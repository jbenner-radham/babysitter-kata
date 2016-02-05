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
module.exports = class Babysitter {
    /**
     * @param {object} times
     */
    constructor(times) {
        this.start = times.start
        this.end   = times.end
        this.bed   = times.bed
    }

    /**
     * > gets paid for full hours (no fractional hours)
     */
    roundWorkedHours() {
        this.start = Math.round(this.start)
        this.end   = Math.round(this.end)
        this.bed   = Math.round(this.bed)
    }

    /**
     * > starts no earlier than 5:00PM (17:00)
     * @return {boolean}
     */
    startsNoEarlierThan5pm() {
        return this.start >= 17.00
    }
}
