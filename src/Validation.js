/**
 * Title: Validation
 * Description: Validation
 * Author: Bx Zahid <zahidhasan.dev@gmail.com> (https://zahidhasan.dev)
 * Date: 22/02/2021
 */

/**
 * @class
 * @classdesc Validation.
 */
class Validation {
	// Input validation method
	static inputValidation(value) {
		// Remove double whitespace
		return value.trim().replace(/\s{2,}/g, " ");
	}
}

module.exports = Validation;
