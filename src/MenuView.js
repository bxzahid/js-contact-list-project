/**
 * Title: Menu
 * Description: Menu
 * Author: Bx Zahid <zahidhasan.dev@gmail.com> (https://zahidhasan.dev)
 * Date: 22/02/2021
 */

/**
 * @class
 * @classdesc Project menu.
 */
class Menu {
	// View menu
	static menuView(chalk) {
		const log = console.log;

		const cyanColor = chalk.keyword("cyan");

		log(cyanColor("\t======================="));
		log(cyanColor("\t1.   Create New Contact"));
		log(cyanColor("\t2.   Show All Contact"));
		log(cyanColor("\t3.   Update Contact"));
		log(cyanColor("\t4.   Delete Contact"));
		log(cyanColor("\t5.   Search Contact"));
		log(cyanColor("\t6.   Exit"));
		log(cyanColor("\t=======================\n"));
		log(cyanColor("\tEnter Option: "));
	}
}

module.exports = Menu;
