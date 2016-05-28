'use strict'

class MenuGenerator {
    /**
     *
     * @param {string} message
     * @param {string[]} items
     * @param {Function[]|Function} handlers
     * @param {Object} options
     * @returns {Object}
     */
    static generate(message, items, handlers, options) {
        const menu = { message: message }
        options = options || {}

        if (typeof  handlers == 'function') {
            items.forEach((item, index) => menu[items[index]] = handlers)
        }
        else {
            handlers.forEach((handler, index) => menu[items[index]] = handler)
        }

        Object.keys(options).forEach((key) => menu[key] = options[key])

        return menu
    }
}

module.exports = MenuGenerator