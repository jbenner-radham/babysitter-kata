'use strict'

/**
 * The babysitter
 * - starts no earlier than 5:00PM (17:00)
 * - leaves no later than 4:00AM (04:00)
 * - gets paid $12/hour from start-time to bedtime
 * - gets paid $8/hour from bedtime to midnight
 * - gets paid $16/hour from midnight to end of job
 * - gets paid for full hours (no fractional hours)
 */
module.exports = {
    /** @type {number} */
    startTimeToBedtimeWage: 12,

    /** @type {number} */
    bedtimeToMidnightWage: 8,

    /** @type {number} */
    midnightToEndOfJobWage: 16
}
