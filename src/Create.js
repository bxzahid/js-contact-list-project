const Contact = require("./Contact");
const Validation = require("./Validation");

/**
 * @classdesc Create contact
 * @class
 */
class CreateContact {
	/**
	 * @return {object}
	 */
	static createView(scanf, chalk) {
		let contact;
		let name;
		let phoneNo;

		const log = console.log;
		const error = chalk.redBright.bold;

		log(
			chalk.whiteBright.bold.italic("\tFill the input correctly ----->\n")
		);

		log("\tEnter Name* : ");
		// Input name from the user
		name = scanf("%S");

		// If name is equal to empty space, then it continues & wants input from the user
		while (name.trim() === "") {
			log(error("\tName is required. Please enter name"));
			// Input name from the user
			name = scanf("%S");
		}

		log("\tEnter Phone No* : ");
		// Input phone number from the user
		phoneNo = scanf("%S");

		// If phone no is equal to empty space, then it continues & wants input from the user
		while (phoneNo.trim() === "") {
			log(error("\tPhone no is required. Please enter phone no"));
			// Input phone number from the user
			phoneNo = scanf("%S");
		}

		log("\tEnter Email (Type N if not available) : ");
		// Input email from the user
		const email = scanf("%S");

		if (email !== null) {
			if (email.toLowerCase() === "n") {
				// Create a contact object from the Contact class
				contact = new Contact(
					Validation.inputValidation(name),
					Validation.inputValidation(phoneNo)
				);
			} else {
				// Create a contact object from the Contact class
				contact = new Contact(
					Validation.inputValidation(name),
					Validation.inputValidation(phoneNo),
					Validation.inputValidation(email)
				);
			}
		} else {
			// Create a contact object from the Contact class
			contact = new Contact(
				Validation.inputValidation(name),
				Validation.inputValidation(phoneNo),
				Validation.inputValidation(email)
			);
		}

		log(
			chalk.bgWhiteBright.blackBright.bold.italic(
				"\n\tContact created successfull...\n"
			)
		);

		return contact;
	}
}

module.exports = CreateContact;
