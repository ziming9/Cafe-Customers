const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validatePerson = data => {
    let errors = {};
    
    data.lists_phone = !isEmpty(data.lists_phone) ? data.lists_phone : "";

    if (Validator.isEmpty(data.lists_phone)) {
        errors.lists_phone = "Phone field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}