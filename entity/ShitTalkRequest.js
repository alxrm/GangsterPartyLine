'use strict'

const User = require('./User')

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

	/**
	 *
	 * @returns {string}
	 * @private
	 */
    _renderDescription() {
        return `@${this._user.userName} User: ${this._user.firstName} ${this._user.lastName}\nNigga type: ${this._niggaType}\nUserId: ${this._user.id}`
    }

	/**
	 *
	 * @param {string} description
	 * @returns {ShitTalkRequest|boolean}
	 */
	static fromDescription(description) {
		const splitData = description.split(/ User: |@|Nigga type: |UserId: | /igm);

		if (splitData.length !== 5) return false;

		const user = new User(splitData[0], splitData[1], splitData[2], splitData[4]);
		const type = splitData[3];

		return new ShitTalkRequest(user, type);
	}
}

module.exports = ShitTalkRequest