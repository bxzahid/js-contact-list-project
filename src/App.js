/**
 * Title: JavaScript Contact List Project
 * Description: Root file
 * Author: Bx Zahid <zahidhasan.dev@gmail.com> (https://zahidhasan.dev)
 * Date: 22/02/2021
 */

// Dependencies
const scanf = require("scanf");
const chalk = require("chalk");

const ContactList = require("./ContactList");
const Menu = require("./MenuView");
const CreateContact = require("./Create");
const FindAllContact = require("./FindAll");
const UpdateContact = require("./Update");
const RemoveContact = require("./Remove");
const SearchContact = require("./Search");

/**
 * @class
 * @classdesc App class is the root of this application.
 */
class ContactListApp {
	constructor() {
		let menuItem;

		// Contact list object
		const contactList = new ContactList();

		do {
			// Show all menu
			Menu.menuView(chalk);

			// Input menu item number from the user
			menuItem = scanf("%S");

			const warning = chalk.italic.keyword("orange");

			// If a menu item number is equal to empty space, then it continues & wants input from the user
			while (menuItem.trim() === "") {
				console.log(
					warning("\tYou have to choice a option between 1 and 6\n")
				);
				// Input menu item number from the user
				menuItem = scanf("%S");
			}

			switch (menuItem) {
				// Create New Contact
				case "1":
					const contact = CreateContact.createView(scanf, chalk);
					contactList.create(contact);
					break;

				// Show All Contact
				case "2":
					FindAllContact.findAllView(
						contactList.getContacts(),
						chalk
					);
					break;

				// Update Contact
				case "3":
					UpdateContact.updateView(contactList, scanf, chalk);
					break;

				// Delete Contact
				case "4":
					RemoveContact.removeView(contactList, scanf, chalk);
					break;

				// Search Contact
				case "5":
					SearchContact.searchView(contactList, scanf, chalk);
					break;

				// Exit
				case "6":
					process.exit(0);
					break;

				// If the user inputs the wrong menu item number, then the default message will print
				default:
					console.log(
						warning(
							"\n\tYou have to choice a option between 1 and 6\n"
						)
					);
					break;
			}
		} while (menuItem != 6);
	}
}

new ContactListApp();
