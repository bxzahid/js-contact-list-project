/**
 * @class
 * @classdesc Search contact.
 */
class SearchContact {
	/**
	 * @param {object} contactList
	 * @method searchView
	 */
	static searchView(contactList, scanf, chalk) {
		const log = console.log;

		log("\n\tEnter name to search: \n");

		// Input search item from the user
		const searchItem = scanf("%S");

		// Remove all double whitespace
		const searchItemValidate = searchItem.replace(/\s{2,}/g, " ");

		const searchResult = contactList.search(searchItemValidate);

		log(chalk.whiteBright.bold.italic("\n\tSearch Result ----->\n"));

		if (!searchResult.length)
			return log(chalk.redBright.italic("\tContact Not Found\n"));

		// Show search result
		searchResult.map((contact) => {
			log(
				`\tID: ${contact.id}, Name: ${contact.name}, Phone No: ${
					contact.phoneNo
				}, Email: ${contact.email === null ? "N/A" : contact.email}\n`
			);
		});
	}
}

module.exports = SearchContact;
