const FindAllContact = require('./FindAll')

/**
 * @classdesc Remove contact.
 * @class
 */
class RemoveContact {
	/**
	 * @param {object} contactList
	 */
	static removeView(contactList, scanf, chalk) {
		// Show all contacts which are created
		FindAllContact.findAllView(contactList.getContacts(), chalk);

		if (contactList.getTotalContact()) {
			console.log("\n\tEnter id to remove: ");

			// Input id from the user
			const id = scanf("%S");

			contactList.remove(id);
		}
	}
}

module.exports = RemoveContact;
