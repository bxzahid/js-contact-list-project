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
