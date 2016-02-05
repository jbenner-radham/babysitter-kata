'use strict'

/**
 * Formats a number to the equivalent "military time".
 *
 * @param  {number} time
 * @return {string}
 */
module.exports = function (time) {
    let sprintf = require('sprintf-js').sprintf

    let formatted = sprintf('%.2f', time)

    if (formatted.length === 4) {
        formatted = '0' + formatted
    }

    return formatted.replace('.', ':')
}
