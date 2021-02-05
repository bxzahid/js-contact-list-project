const FindAllContact = require("./FindAll");
const Contact = require('./Contact')

/**
 * @classdesc Update contact.
 * @class
 */
class UpdateContact {
	/**
	 * @param {object} contactList
	 */
	static updateView(contactList, scanf) {
		// Show all contacts which are created
		FindAllContact.findAllView(contactList.getContacts());

		let id;
		let userUpdatedName;
		let userUpdatedPhoneNo;
		let updatedContact;

		console.log("\tUpdate form ----->\n");

		console.log("\tID* : ");
		// Input id from the user
		id = scanf("%S");

		// If id is equal to empty space, then it continues & wants input from the user
		while (id.trim() === "") {
			console.log("Required");
			id = scanf("%S");
		}

		console.log("\tUpdate Name* : ");
		// Input update name from the user
		userUpdatedName = scanf("%S");

		// If update name is equal to empty space, then it continues & wants input from the user
		while (userUpdatedName.trim() === "") {
			console.log("Required");
			// Input update name from the user
			userUpdatedName = scanf("%S");
		}

		console.log("\tUpdate Phone No* : ");
		// Input update phone no from the user
		userUpdatedPhoneNo = scanf("%S");

		// If update phone no is equal to empty space, then it continues & wants input from the user
		while (userUpdatedPhoneNo.trim() === "") {
			console.log("Required");
			// Input update phone no from the user
			userUpdatedPhoneNo = scanf("%S");
		}

		console.log("\tUpdate Email: ");
		// Input update email from the user
		const userUpdatedEmail = scanf("%S");

		// Remove double whitespace
		const updatedName = userUpdatedName.trim().replace(/\s{2,}/g, " ");
		const updatedPhoneNo = userUpdatedPhoneNo
			.trim()
			.replace(/\s{2,}/g, " ");
		const updatedEmail = userUpdatedEmail.trim().replace(/\s{2,}/g, " ");

		if (updatedEmail !== null) {
			if (updatedEmail.toLowerCase() === "n") {
				// Create a updatedContact object from the Contact class
				updatedContact = new Contact(updatedName, updatedPhoneNo);
			} else {
				// Create a updatedContact object from the Contact class
				updatedContact = new Contact(
					updatedName,
					updatedPhoneNo,
					updatedEmail
				);
			}
		} else {
			// Create a updatedContact object from the Contact class
			updatedContact = new Contact(
				updatedName,
				updatedPhoneNo,
				updatedEmail
			);
		}

		contactList.update(id, updatedContact);

		console.log("\n\tContact updated successfull...\n");
	}
}

module.exports = UpdateContact;