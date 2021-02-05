const Contact = require("./Contact");

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
		let userName;
		let userPhoneNo;

		const log = console.log;
		const error = chalk.redBright.bold;

		log(chalk.whiteBright.bold.italic("\tFill the input correctly ----->\n"));

		log("\tEnter Name* : ");
		// Input name from the user
		userName = scanf("%S");

		// If name is equal to empty space, then it continues & wants input from the user
		while (userName.trim() === "") {
			log(error("\tName is required. Please enter name"));
			// Input name input the user
			userName = scanf("%S");
		}

		log("\tEnter Phone No* : ");
		// Input phone number input the user
		userPhoneNo = scanf("%S");

		// If phone no is equal to empty space, then it continues & wants input from the user
		while (userPhoneNo.trim() === "") {
			log(error("\tPhone no is required. Please enter phone no"));
			// Input phone number input the user
			userPhoneNo = scanf("%S");
		}

		log("\tEnter Email (Type N if not available) : ");
		// Input email from the user
		const userEmail = scanf("%S");

		// Input validation
		const name = userName.trim().replace(/\s{2,}/g, " ");
		const phoneNo = userPhoneNo.trim().replace(/\s{2,}/g, " ");
		const email = userEmail.trim().replace(/\s{2,}/g, " ");

		if (email !== null) {
			if (email.toLowerCase() === "n") {
				// Create a contact object from the Contact class
				contact = new Contact(name, phoneNo);
			} else {
				// Create a contact object from the Contact class
				contact = new Contact(name, phoneNo, email);
			}
		} else {
			// Create a contact object from the Contact class
			contact = new Contact(name, phoneNo, email);
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
