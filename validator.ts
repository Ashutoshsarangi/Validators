
class Validator {
    /**
     * This is a Name fied vaslidator which has only Alphabets
     * @param str is the String which we need to validate
     * @returns true/fase depending on the condition
     */
    public nameFieldValidatorAlphabet = (str) => {
        var letters = /^[A-Za-z]+$/;
        if (str.match(letters)) {
            return (true);
        }
        else {
            return (false);
        }
    }
    /**
     * This is a Name field validator which has Alphabets + Numeric
     * @param str is the String which we need to validate
     * @returns true/fase depending on the condition
     */
    public nameFieldValidatorAlphaNumeric = (str) => {
        var letters = /^[A-Za-z0-9]+$/;
        if (str.match(letters)) {
            return (true);
        }
        else {
            return (false);
        }
    }
    /**
     * This is a Email field validator
     * @param str is the String which we need to validate
     * @returns true/fase depending on the condition
     */
    public emailFieldValidator = (str) => {
        var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (str.match(letters)) {
            return (true);
        }
        else {
            return (false);
        }
    }
    /**
     * This is a Number field validator
     * @param str is the String which we need to validate
     * @returns true/fase depending on the condition
     */
    public numberFieldValidator = (str) => {
        var letters = /^[0-9]+$/;
        if (str.match(letters)) {
            return (true);
        }
        else {
            return (false);
        }
    }

}

let v = new Validator();
console.log(v.nameFieldValidatorAlphaNumeric('asd123'));