/**
 * Created by mor on 5/04/16.
 */

/**
 * Controlador de las funciones de la sopa de letras: aquí es donde se usa el jQuery :D
 * Funcionalidades implementadas:
 *      - TABLA DINÁMICA mega guay de la muerte. Calcula las letras de forma automática (aleatoriamente)
 * TODO:
 *      - Situar un array de palabras en la sopa de letras.
 */
function DOMhandler() {
    // Objeto de funciones de utilidad
    this.utils = new Util();
    // Objeto del que se obtienen los estilos
    this.elementStyles = new ElementStyles();

    // Modifica el estilo de un elemento de forma predeterminada (a partir del objeto definido en la clase ElementStyles)
    this.modElement = function(selector, effect, time, callback) {
        if(!this.isNullOrUndefined(selector)) {
            var newStyle = this.elementStyles.style(selector)
            for (var attr in newStyle)  {
                if(!this.mode(effect, time, callback))
                    this.applyStyle(selector, {key: attr, value: newStyle[attr]});
                else
                    this.applyEffect(selector, effect, time, callback);
            }
        }
    };
    // Modifica los estilos de un array de elementos (de uno en uno)
    this.modElements = function (selectors) {
        for (var selector in selectors)
            this.modElement(selectors[selector]);
    };
    this.fillTable = function(selector, content) { // content es un array
        $(selector+" tr").each(function () {
            var x = 0;
            var y = 0;
            $('td', this).each(function () {
                if($(this).is(':empty')) {
                    var value = content.call();
                    var htmlPre = "<td>";
                    var htmlPost = "</td>";
                    $(this).html(htmlPre + value + htmlPost);
                }
                $(this).attr('id', x+"_"+y);
                x++;
            });
            y++;
        });
    };
    this.newElement = function(tag, content) {
        // TODO atributos
        if (this.isFunction(content)) content = content.call();
        return "<"+tag+">"+ content +"</"+tag+">";
    };
    // Obtiene el objeto que contiene los datos del nuevo estilo a partir del selector especificado por parámetro
    this.getNewStyle = function(selector) {
        return this.style(selector);
    };
    // Aplica el atributo a los elementos seleccionados
    this.applyStyle = function(selector, attr) {
        $(selector).css(this.clean(attr.key), attr.value);
    };
    // Aplica el efecto especificado (time y callback incluidos) al selector
    this.applyEffect = function(selector, effect, time, callback) {
        $(selector)[effect](time, callback);
    };
    // Si alguno de los parametros es null o undefined, retorna false (modo CSS), sino, true (modo efectos)
    this.mode = function(effect, time, callback) {
        return this.areNullOrUndefined([effect, time, callback]);
    };

    this.style = this.elementStyles.style;
    this.randomNumber = this.utils.randomNumber;
    this.isFunction = this.utils.isFunction;
    this.areNullOrUndefined = this.utils.areNullOrUndefined;
    this.isNullOrUndefined = this.utils.isNullOrUndefined;
    this.clean = this.utils.clean;

};
