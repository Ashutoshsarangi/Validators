var Validator = /** @class */ (function () {
    function Validator() {
        /**
         * This is a Name fied vaslidator which has only Alphabets
         * @param str is the String which we need to validate
         */
        this.nameFieldValidatorAlphabet = function (str) {
            var letters = /^[A-Za-z]+$/;
            if (str.match(letters)) {
                return (true);
            }
            else {
                return (false);
            }
        };
        this.nameFieldValidatorAlphaNumeric = function (str) {
            var letters = /^[A-Za-z0-9]+$/;
            if (str.match(letters)) {
                return (true);
            }
            else {
                return (false);
            }
        };
    }
    return Validator;
}());
var v = new Validator();
console.log(v.nameFieldValidatorAlphaNumeric('asd123,.>'));
