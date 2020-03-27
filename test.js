const test = require("ava")
const is = require("@sindresorhus/is")
const ntpy = require(".")

test("main", async t => {
	const { receiveTimestamp } = await ntpy("pool.ntp.org")
	t.true(is.date(receiveTimestamp))
})
