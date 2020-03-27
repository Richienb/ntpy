declare namespace ntpy {
	export interface Options {
		/**
		 * The port to use when connecting to the NTP server.
		 * @default 123
		*/
		port: number

		/**
		 * The timeout in milliseconds for the request to complete. Set to `false` to disable.
		 * @default 10000
		*/
		timeout: number | false
	}

	export interface Result {
		/**
		 * Indications of an upcoming leap second adjustment, with values as follows:
		 *
		 * - 0 - No warning
		 * - 1 - Last minute has 61 seconds
		 * - 2 - Last minute has 59 seconds
		 * - 3 - Alarm condition (clock not synchronized)
		*/
		leapIndicator: number

		/**
		 * The version used by the server.
		*/
		version: number

		/**
		 * The association mode with values corresponding as follows:
		 *
		 * - 0 - Unspecified
		 * - 1 - Symmetric active
		 * - 2 - Symmetric passive
		 * - 3 - Client
		 * - 4 - Server
		 * - 5 - Broadcast
		 * - 6 - Reserved for NTP control messages
		 * - 7 - Reserved for private use
		*/
		mode: number

		/**
		 * The stratum of the local clock.
		*/
		stratum: number

		/**
		 * The minimum interval in seconds between transmitted messages.
		*/
		poll: number

		/**
		 * The precision of the clock in seconds.
		*/
		precision: number

		/**
		 * The total roundtrip delay to the primary time reference source.
		*/
		rootDelay: Date

		/**
		 * The maximum margin of error to the primary time reference source.
		*/
		rootDispersion: Date

		/**
		 * A code identifying the particular reference clock.
		*/
		referenceId: string

		/**
		 * The UTC time the clock was last set or corrected.
		*/
		referenceTimestamp: Date

		/**
		 * The UTC time that the last result was sent by the server.
		*/
		originTimestamp: Date

		/**
		 * The UTC time that the result was received.
		*/
		receiveTimestamp: Date

		/**
		 * The UTC time that the result was sent by the server.
		*/
		transmitTimestamp: Date
	}
}

/**
 * NTP client for Node.js.
 * @param url The url of a NTP server to use.
 * @example
 * ```
 * const ntpy = require("ntpy");
 *
 * (async () => {
 *     const { receiveTimestamp } = await ntpy("pool.ntp.org");
 *     console.log("The date is: ", receiveTimestamp);
 * })();
 * ```
*/
declare function ntpy(url: string, options?: ntpy.Options): Promise<ntpy.Result>

export = ntpy
