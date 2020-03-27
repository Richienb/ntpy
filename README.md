# ntpy [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/ntpy/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/ntpy)

NTP client for Node.js.

[![NPM Badge](https://nodei.co/npm/ntpy.png)](https://npmjs.com/package/ntpy)

## Install

```sh
npm install ntpy
```

## Usage

```js
const ntpy = require("ntpy");

(async () => {
	const { receiveTimestamp } = await ntpy("pool.ntp.org");
	console.log("The date is: ", receiveTimestamp);
})();
```

## API

### ntpy(url, options?)

#### url

Type: `string`

The url of a NTP server to use.

#### options

Type: `object`

##### port

Type: `number`\
Default: `123`

The port to use when connecting to the NTP server.

##### timeout

Type: `number | false`\
Default: `10000`

The timeout in milliseconds for the request to complete. Set to `false` to disable.
