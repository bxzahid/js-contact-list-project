/**
 * @class
 * @classdesc Find all contact
 * @method findAllView
 */
class FindAllContact {
	/**
	 * @param {array} contacts
	 */
	static findAllView(contacts, chalk) {
		const log = console.log;
		const warning = chalk.italic.keyword("orange");

		if (contacts.length) {
			log(chalk.whiteBright.bold.italic("\n\tAll Contacts ----->\n"));
		}

		if (!contacts.length) {
			log(
				warning(
					"\n\tContact list is empty. For create a new contact, please enter 1\n"
				)
			);
		}

		if (contacts.length) {
			log("\t**********\n");
		}

		contacts.map((contact) => {
			log(
				`\t  ID: ${contact.id}, Name: ${contact.name}, Phone No: ${
					contact.phoneNo
				}, Email: ${contact.email === null ? "N/A" : contact.email}\n`
			);
		});

		if (contacts.length) {
			log("\t**********\n");
		}
	}
}

module.exports = FindAllContact;
