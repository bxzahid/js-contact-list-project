/**
 * Title: Remove Contact
 * Description: Remove a contact
 * Author: Bx Zahid <zahidhasan.dev@gmail.com> (https://zahidhasan.dev)
 * Date: 22/02/2021
 */

const FindAllContact = require('./FindAll')

/**
 * @classdesc Remove contact.
 * @class
 * @method removeView
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
