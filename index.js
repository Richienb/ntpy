"use strict"

const dgram = require("dgram")

const is = require("@sindresorhus/is")
const pEvent = require("p-event")
const pTimeout = require("p-timeout")
const { parse: parsePacket } = require("ntp-packet-parser").default

const { assert } = is

const sendRequest = async ({ client, url, port, ntpData }) => {
	client.send(ntpData, port, url)

	const message = await pEvent(client, "message")
	client.close()

	return parsePacket(message)
}

module.exports = async (url, { port = 123, timeout = 10000 } = {}) => {
	assert.string(url)
	assert.inRange(port, [0, 65535])
	assert.any([is.integer, value => value === false], timeout)

	const client = dgram.createSocket("udp4")

	const data = new Array(48)
	data[0] = 0x1B
	data.fill(0, 1)

	const ntpData = Uint8Array.from(data)
	const request = sendRequest({ client, url, port, ntpData })

	return typeof timeout === "number" ? pTimeout(request, timeout) : request
}
