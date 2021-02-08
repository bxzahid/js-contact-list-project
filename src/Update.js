const FindAllContact = require("./FindAll");
const Contact = require("./Contact");
const Validation = require("./Validation");

/**
 * @classdesc Update contact.
 * @class
 */
class UpdateContact {
	/**
	 * @param {object} contactList
	 */
	static updateView(contactList, scanf, chalk) {
		// Show all contacts which are created
		FindAllContact.findAllView(contactList.getContacts(), chalk);

		const log = console.log;
		const error = chalk.redBright.bold;

		let id;
		let updatedName;
		let updatedPhoneNo;
		let updatedContact;

		log(chalk.whiteBright.bold.italic("\tUpdate form ----->\n"));

		log("\tID* : ");
		// Input id from the user
		id = scanf("%S");

		// If id is equal to empty space, then it continues & wants input from the user
		while (id.trim() === "") {
			log(error("\tRequired"));
			id = scanf("%S");
		}

		log("\tUpdate Name* : ");
		// Input update name from the user
		updatedName = scanf("%S");

		// If update name is equal to empty space, then it continues & wants input from the user
		while (updatedName.trim() === "") {
			log(error("\tRequired"));
			// Input update name from the user
			updatedName = scanf("%S");
		}

		log("\tUpdate Phone No* : ");
		// Input update phone no from the user
		updatedPhoneNo = scanf("%S");

		// If update phone no is equal to empty space, then it continues & wants input from the user
		while (updatedPhoneNo.trim() === "") {
			log(error("\tRequired"));
			// Input update phone no from the user
			updatedPhoneNo = scanf("%S");
		}

		log("\tUpdate Email: ");
		// Input update email from the user
		const updatedEmail = scanf("%S");

		if (updatedEmail !== null) {
			if (updatedEmail.toLowerCase() === "n") {
				// Create a updatedContact object from the Contact class
				updatedContact = new Contact(
					Validation.inputValidation(updatedName),
					Validation.inputValidation(updatedPhoneNo)
				);
			} else {
				// Create a updatedContact object from the Contact class
				updatedContact = new Contact(
					Validation.inputValidation(updatedName),
					Validation.inputValidation(updatedPhoneNo),
					Validation.inputValidation(updatedEmail)
				);
			}
		} else {
			// Create a updatedContact object from the Contact class
			updatedContact = new Contact(
				Validation.inputValidation(updatedName),
				Validation.inputValidation(updatedPhoneNo),
				Validation.inputValidation(updatedEmail)
			);
		}

		contactList.update(id, updatedContact);

		log(
			chalk.bgWhiteBright.blackBright.bold.italic(
				"\n\tContact updated successfull...\n"
			)
		);
	}
}

module.exports = UpdateContact;
