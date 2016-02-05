'use strict'

// Modules
let Babysitter = require('./src/Babysitter')
let HourlyPay  = require('./src/HourlyPay')

// Vars
let times      = require('./times.json')
let babysitter = new Babysitter(times)
let pay        = 0
let hours      = babysitter.roundWorkedHours().getHoursWorked()

// Calculate our pay for the night.
for (let hour of hours) {
    if (babysitter.isDuringStartTimeToBedtime(hour)) {
        pay += HourlyPay.startTimeToBedtimeWage
    } else if (babysitter.isDuringBedtimeToMidnight(hour)) {
        pay += HourlyPay.bedtimeToMidnightWage
    } else if (babysitter.isDuringMidnightToEndOfJob(hour)) {
        pay += HourlyPay.midnightToEndOfJobWage
    }
}

console.info(`Total Pay: $${pay}`)
