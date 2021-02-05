/**
 * @classdesc Find all contact
 * @class
 */
class FindAllContact {
	/**
	 * @param {array} contacts
	 */
	static findAllView(contacts) {
		if (contacts.length) {
			console.log("\n\tAll Contacts ----->\n");
		}

		if (!contacts.length) {
			console.log(
				"\n\tContact list is empty. For create a new contact, please enter 1\n"
			);
		}

		if (contacts.length) {
			console.log("\t**********\n");
		}

		contacts.map((contact) => {
			console.log(
				`\tID: ${contact.id}, Name: ${contact.name}, Phone No: ${
					contact.phoneNo
				}, Email: ${contact.email === null ? "N/A" : contact.email}\n`
			);
		});

		if (contacts.length) {
			console.log("\t**********\n");
		}
	}
}

module.exports = FindAllContact;