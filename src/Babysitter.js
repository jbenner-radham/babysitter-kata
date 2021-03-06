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
     * Class constructor
     *
     * @param {object} times
     */
    constructor(times) {
        this.start = times.start
        this.end   = times.end
        this.bed   = times.bed

        if (!this.startsNoEarlierThan5pm()) {
            console.error('The babysitter should start no earlier than 5pm (17:00).')
            process.exit(1)
        }

        if (!this.leavesNoLaterThan4am()) {
            console.error('The babysitter should leave no later than 4am (04:00).')
            process.exit(1)
        }
    }

    /**
     * Is the provided time during bedtime to midnight?
     *
     * @param {number} time
     * @return {boolean}
     */
    isDuringBedtimeToMidnight(time) {
        return time >= this.bed && time < 24.00
    }

    /**
     * Is the provided time during midnight to the end of our job?
     *
     * @param {number} time
     * @return {boolean}
     */
    isDuringMidnightToEndOfJob(time) {
        return time == 24.00 || (time >= 1.00 && time <= this.end)
    }

    /**
     * Is the provided time during our start-time to bedtime?
     *
     * @param {number} time
     * @return {boolean}
     */
    isDuringStartTimeToBedtime(time) {
        return time >= this.start && time < this.bed
    }

    /**
     * > leaves no later than 4:00AM (04:00)
     *
     * @return {boolean}
     */
    leavesNoLaterThan4am() {
        return this.end <= 4.00
    }

    /**
     * Rounds the classes time properties.
     * > gets paid for full hours (no fractional hours)
     *
     * @return {this}
     */
    roundWorkedHours() {
        this.start = Math.round(this.start)
        this.end   = Math.round(this.end)
        this.bed   = Math.round(this.bed)

        return this
    }

    /**
     * > starts no earlier than 5:00PM (17:00)
     *
     * @return {boolean}
     */
    startsNoEarlierThan5pm() {
        return this.start >= 17.00
    }

    /**
     * Get an array of the hours worked.
     *
     * @return {number[]}
     */
    getHoursWorked() {
        let hours = []

        for (let hour = this.start;
             // Break after we hit our end time.
             hour !== (this.end + 1.00);
             // Roll over the hours if we're at midnight or increment if not.
             (hour == 24.00) ? hour = 1.00 : hour += 1.00
        ) {
            hours.push(hour)
        }

        return hours
    }
}
