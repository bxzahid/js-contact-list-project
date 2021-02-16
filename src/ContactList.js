// Making propertry from the public to private
const _contacts = Symbol("contacts");

/**
 * @class
 * @classdesc Project db for contact list.
 * @property contacts
 * @method create
 * @method update
 * @method remove
 * @method getTotalContact
 * @method getContacts
 * @method search
 */
class ContactList {
	/**
	 * @constructor
	 */
	constructor() {
		this[_contacts] = [];
	}

	/**
	 * Create contact method.
	 *
	 * @param {object} contact
	 */
	create(contact) {
		this[_contacts].push(contact);
	}

	/**
	 * Update contact method.
	 *
	 * @param {string} id
	 * @param {object} updatedData
	 */
	update(id, updatedData) {
		const index = this[_contacts].findIndex((contact) => contact.id === id);

		this[_contacts][index] = updatedData;
	}

	/**
	 * Remove contact method.
	 *
	 * @param {string} id
	 */
	remove(id) {
		const filteredContact = this[_contacts].filter(
			(contact) => contact.id !== id
		);
		this[_contacts] = filteredContact;
	}

	/**
	 * Get all contact length method.
	 *
	 * @return {number}
	 */
	getTotalContact() {
		return this[_contacts].length;
	}

	/**
	 * Get all contact method.
	 *
	 * @return {array}
	 */
	getContacts() {
		return this[_contacts];
	}

	/**
	 * Search contact method.
	 *
	 * @param {string} term
	 * @return {array}
	 */
	search(term) {
		const result = [];

		this[_contacts].map((contact) => {
			if (
				contact.name
					.split(" ")
					.join("")
					.toLowerCase()
					.includes(term.split(" ").join("").toLowerCase())
			) {
				result.push(contact);
			}
		});
		return result;
	}

	/**
	 * @override
	 */
	toString() {
		return `Contact List: ${this[_contacts]}`;
	}
}

module.exports = ContactList;
