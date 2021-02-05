// Making propertry from the public to private
const _contacts = Symbol("contacts");

/**
 * @classdesc Project db for contact list.
 * @class
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
	 * @param {string} name
	 * @return {array}
	 */
	search(name) {
		return this[_contacts].filter(
			(contact) =>
				contact.name.split(" ").join("").toLowerCase() ===
				name.trim().split(" ").join("").toLowerCase()
		);
	}

	/**
	 * @override
	 */
	toString() {
		return `Contact List: ${this[_contacts]}`;
	}
}

module.exports = ContactList;
