'use strict'

class ShitTalkRequest {
    /**
     * 
     * @param {User} user
     * @param {string} niggaType
     */
    constructor(user, niggaType) {
        this._user = user
        this._niggaType = niggaType
        this._textDescription = this._renderDescription()
    }

    /**
     * 
     * @returns {User}
     */
    get user() {
        return this._user
    }

    /**
     * 
     * @returns {string}
     */
    get niggaType() {
        return this._niggaType
    }

    /**
     *
     * @returns {string}
     */
    get textDescription() {
        return this._textDescription
    }

    _renderDescription() {
        return `User: ${this._user.firstName} ${this._user.lastName} @${this._user.userName}\nNigga type: ${this._niggaType}\nUserId: ${this._user.id}`
    }
}

module.exports = ShitTalkRequest