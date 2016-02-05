'use strict'

let assert     = require('assert')
let Babysitter = require('../src/Babysitter')
let HourlyPay  = require('../src/HourlyPay')

describe('Babysitter', () => {
    let times      = require('./times.json')
    let babysitter = new Babysitter(times);

    it('Should start no earlier than 5:00PM (17:00).', () => {
         assert(babysitter.startsNoEarlierThan5pm())
    })

    it('Should leave no later than 4:00AM (04:00).', () => {
        assert(babysitter.leavesNoLaterThan4am())
    })

    it('Should be paid for full hours (no fractional hours).', () => {
        babysitter.roundWorkedHours()
        assert.equal(babysitter.start, 18.00)
        assert.equal(babysitter.bed, 20.00)
        assert.equal(babysitter.end, 4.00)
    })

    it('Should verify if we are working during our start-time to bedtime.', () => {
        assert(babysitter.isDuringStartTimeToBedtime(18.00))
    })

    it('Should verify if we are working during bedtime to midnight.', () => {
        assert(babysitter.isDuringBedtimeToMidnight(times.bed))
    })

    it('Hours worked should be a collection of numbers.', () => {
        babysitter.getHoursWorked().forEach(hour => assert(!isNaN(hour)))
    })
})

describe('Hourly Pay', () => {
    it('Should be paid $12/hour from start-time to bedtime.', () => {
         assert.equal(HourlyPay.startTimeToBedtimeWage, 12)
    })

    it('Should be paid $8/hour from bedtime to midnight.', () => {
         assert.equal(HourlyPay.bedtimeToMidnightWage, 8)
    })

    it('Should be paid $16/hour from midnight to end of job.', () => {
         assert.equal(HourlyPay.midnightToEndOfJobWage, 16)
    })
})
