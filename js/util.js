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
        return letters.charAt(Math.random() * letters.length);
    };
    this.randomNumber = function(max) {
        return Math.floor(Math.random() * max);
    };
    this.isFunction = function(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }
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
    this.contiguousElements = function(one, other) {
        var onePos = this.getElementPos(one);
        var otherPos = this.getElementPos(other);
        return this.areContiguous(onePos, otherPos);
    };
    this.areContiguous = function(one, other) {
        var len = one.length;
        for (var counter = 0; counter < len; counter++)
            if(one[counter]+1 === other[counter] || one[counter]-1 === other[counter]) return true;
        return false;
    };
    this.getElementPos = function(element) {
        return element.attr('id').split('_')
    };
    // Cambia el guion bajo por un guion normal (los atributos de CSS usan guiones, sin embargo, una propiedad de javascript no puede usarlos)
    this.clean = function(str){
        return str.replace("_", "-");
    };
}