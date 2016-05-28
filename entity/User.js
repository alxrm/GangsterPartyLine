'use strict'

class User {
    /**
     *
     * @param {string|null} userName
     * @param {string}firstName
     * @param {string} lastName
     * @param {number} id
     */
    constructor(userName, firstName, lastName, id) {
        this._userName = userName
        this._firstName = firstName
        this._lastName = lastName
        this._id = id
    }

    /**
     *
     * @returns {string}
     */
    get userName() {
        return this._userName
    }

    /**
     *
     * @returns {string}
     */
    get firstName() {
        return this._firstName
    }

    /**
     *
     * @returns {string}
     */
    get lastName() {
        return this._lastName
    }

    /**
     *
     * @returns {number}
     */
    get id() {
        return this._id
    }

    /**
     * 
     * @param {Object} raw
     * @returns {User}
     */
    static fromRaw(raw) {
        return new User(
            raw.username,
            raw.first_name,
            raw.last_name,
            raw.id
        )
    }
}

module.exports = User