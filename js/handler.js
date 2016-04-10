/**
 * Created by mor on 5/04/16.
 */

/**
 * Controlador de las funciones de la sopa de letras: aquí es donde se usa el jQuery :D
 * Funcionalidades implementadas:
 *      - TABLA DINÁMICA mega guay de la muerte. Rellena la tabla con letras aleatorias de forma automática
 * TODO:
 *      - Situar un array de palabras en la sopa de letras.
 *      - Tabla simulada en un array multidimensional.
 */
function DOMhandler() {

    // Ruta de la imagen
    this.image = "img/image.png";

    // Carga la imagen
    this.putImage = function() {
        $('img').attr('src', this.image);
    };
    // Rellena una tabla seleccionada por parámetro con el contenido especificado
    this.fillTable = function(content) { // content es un array
        $("tr").each(function() {
            $("td", this).each(function() {
                if($(this).is(':empty')) {
                    $(this).text(content.call());
                } else this.class = "word";
                $(this).click(function() {
                    if($(this).attr('class') === "word") {
                        var selected = letterSelection;
                        letterSelection = utils.findOccurrence($(this).text());
                        if (selected != letterSelection) $(this).css("color", "red");
                        utils.checkSelection();
                    }
                });
            });
        });
        this.putImage();
        $("div#correct").css('float', 'left');
        $("tr").css("font-family", "'Bangers', cursive");
    };

}
