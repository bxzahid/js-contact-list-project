/**
 * @classdesc Search contact.
 * @class
 */
class SearchContact {
	/**
	 * @param {object} contactList
	 */
	static searchView(contactList, scanf) {
		console.log("\n\tEnter name to search: \n");

		// Input search item from the user
		const searchItem = scanf("%S");

		// Remove all double whitespace
		const searchItemValidate = searchItem.replace(/\s{2,}/g, " ");

		const searchResult = contactList.search(searchItemValidate);

		console.log("\n\tSearch Result ----->\n");

		if (!searchResult.length) return console.log("\tContact Not Found\n");

		// Show search result
		searchResult.map((contact) => {
			console.log(
				`\tID: ${contact.id}, Name: ${contact.name}, Phone No: ${
					contact.phoneNo
				}, Email: ${contact.email === null ? "N/A" : contact.email}\n`
			);
		});
	}
}

module.exports = SearchContact;
