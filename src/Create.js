const Contact = require('./Contact')

/**
 * @classdesc Create contact
 * @class
 */
class CreateContact {
	/**
	 * @param {object} contact
	 * @return {object}
	 */
	static createView(scanf) {
		let contact;
		let userName;
		let userPhoneNo;

		console.log("\tFill the input correctly ----->\n");

		console.log("\tEnter Name* : ");
		// Input name from the user
		userName = scanf("%S");

		// If name is equal to empty space, then it continues & wants input from the user
		while (userName.trim() === "") {
			console.log("Name is required. Please enter name");
			// Input name input the user
			userName = scanf("%S");
		}

		console.log("\tEnter Phone No* : ");
		// Input phone number input the user
		userPhoneNo = scanf("%S");

		// If phone no is equal to empty space, then it continues & wants input from the user
		while (userPhoneNo.trim() === "") {
			console.log("Phone no is required. Please enter phone no");
			// Input phone number input the user
			userPhoneNo = scanf("%S");
		}

		console.log("\tEnter Email (Type N if not available) : ");
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

		console.log("\nContact created successfull...\n");

		return contact;
	}
}

module.exports = CreateContact;
