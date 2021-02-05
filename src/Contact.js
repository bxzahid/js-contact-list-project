const crypto = require("crypto");

// Making properties from the public to private
const _id = Symbol("id");
const _name = Symbol("name");
const _phoneNo = Symbol("phoneNo");
const _email = Symbol("email");

/**
 * @classdesc A contact template.
 * @class
 */
class Contact {
	/**
	 * @constructor
	 * @param {string} name
	 * @param {string} phoneNo
	 * @param {string} email
	 */
	constructor(name, phoneNo, email) {
		/** @private */
		this[_id] = crypto.randomBytes(2).toString("hex");

		/** @private */
		this[_name] = name;

		/** @private */
		this[_phoneNo] = phoneNo;
		
		/** @private */
		this[_email] = email || null;
	}

	/**
	 * @return {string}
	 */
	get id() {
		return this[_id];
	}

	/**
	 * @return {string}
	 */
	get name() {
		return this[_name];
	}

	/**
	 * @param {string} value
	 */
	set name(value) {
		this[_name] = value;
	}

	/**
	 * @return {string}
	 */
	get phoneNo() {
		return this[_phoneNo];
	}

	/**
	 * @param {string} value
	 */
	set phoneNo(value) {
		this[_phoneNo] = value;
	}

	/**
	 * @return {string}
	 */
	get email() {
		return this[_email];
	}

	/**
	 * @param {string} value
	 */
	set email(value) {
		this[_email] = value;
	}

	/**
	 * @override
	 */
	toString() {
		return `
            ID: ${this[_id]},
            Name: ${this[_name]},
            Phone No: ${this[_phoenNo]},
            Email: ${this[_email]},
        `;
	}
}

module.exports = Contact;
