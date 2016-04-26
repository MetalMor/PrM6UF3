/**
 * Created by mor on 6/04/16.
 */
/**
 * Constructor de objetos de utilidad (funciones varias)
 */
function Util() {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Genera una letra mayúscula aleatoriamente a partir de la variable possibleLetters
    this.randomLetter = function() {
        return letters.charAt(utils.randomNumber(letters.length));
    };
    /**
     * Retorna la longitud del string más largo en el array pasado por parámetro.
     * @param strArray Array de string.
     * @returns {Number}
     */
    this.getMaxLength = function(strArray) {
        var len = strArray.length;
        var ret = "";
        for (var counter = 0; counter < len; counter++) {
            ret = strArray[counter].length > ret.length ? strArray[counter] : ret;
        }
        return ret.length;
    };
    /**
     * Busca ocurrencias de la selección actual en el array de palabras-solución mediante una regexp.
     * @param newLetter Nueva letra de la selección.
     * @returns {*}
     */
    this.findOccurrence = function (newLetter) {
        var wordList = words.wordList;
        var len = wordList.length;
        var selected = letterSelection;
        for (var counter = 0; counter < len; counter++) {
            var newSelection = selected+newLetter;
            if (wordList[counter].match("^("+newSelection+")")) return newSelection;
        }
        return selected;
    };
    /**
     * Comprueba la selección de palabras para ver si el usuario ha encontrado una palabra entera.
     */
    this.checkSelection = function () {
        var max = utils.getMaxLength(words.wordList);
        var selected = letterSelection;
        var wordList = words.wordList;
        for (word in wordList) {
            var currWord = wordList[word];
            if(currWord === selected) {
                words.wordList.splice(wordList.indexOf(currWord), 1);
                $("#correct").append("<div>"+currWord+"</div>");
                $("#correct>div:last-child").css('display', 'none');
                $("#correct>div:last-child").fadeIn('slow');
                letterSelection = [];
                $("td").css("color", "black");
            }
        }
        if(selected.length >= max) {
            $("td").css("color", "black");
        }
    };
    // Numero aleatorio entre 0 y el maximo especificado por parametro
    this.randomNumber = function(max) {
        return Math.floor(Math.random() * max);
    };
    // Comprueba si el parámetro es una función
    this.isFunction = function(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    };
    // Comprueba si el parámetro es un array
    this.isArray = function(arrayToCheck) {
        return Object.prototype.toString.call( arrayToCheck ) === '[object Array]';
    };
    // Retorna true si encuentra un elemento nulo o indefinido, false en caso contrario
    this.areNullOrUndefined = function(arrayOrObject) {
        for (x in arrayOrObject)
            if (this.isNullOrUndefined(arrayOrObject[x]))
                return true;
        return false;
    };
    // Retorna true si el parametro es indefinido o nulo, false en caso contrario
    this.isNullOrUndefined = function(smth) {
        return smth === undefined || smth === null;
    };
}