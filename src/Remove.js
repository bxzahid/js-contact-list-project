const FindAllContact = require('./FindAll')

/**
 * @classdesc Remove contact.
 * @class
 */
class RemoveContact {
	/**
	 * @param {object} contactList
	 */
	static removeView(contactList, scanf) {
		// Show all contacts which are created
		FindAllContact.findAllView(contactList.getContacts());

		if (contactList.getTotalContact()) {
			console.log("\n\tEnter id to remove: ");

			const id = scanf("%S");

			contactList.remove(id);
		}
	}
}

module.exports = RemoveContact;
