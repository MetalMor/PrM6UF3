/**
 * Created by becari on 07/04/2016.
 */
/**
 * MAIN se ejecuta cuando el DOM está cargado.
 */
function DocumentReady() {
    var fade = $("#fade");
    fade.css('background-color', 'cyan');
    fade.css('height', '40px');
    fade.css('width', '40px');
    fade.css('text-align', 'center');
    fade.css('display', 'none');
    var table = $("table");
    table.css('float', 'right');
    table.css('margin', '200px');
    var handler = new DOMhandler();
    words = new Words();
    utils = new Util();
    letterSelection = "";
    checkSelection = function() {
        var max = utils.getMaxLength(words.wordList);
        var selected = letterSelection;
        var wordList = words.wordList;
        for (word in wordList) {
            var currWord = wordList[word];
            if(currWord === selected) {
                words.wordList.splice(wordList.indexOf(currWord), 1);
                $("#correct").append("<div>"+currWord+"</div>");
                letterSelection = [];
                $("td").css("color", "black");
            }
        }
        if(selected.length >= max) {
            $("td").css("color", "black");
            ("td").click(function() {
                if($(this).attr('class') === "word") {
                    $(this).css("color", "red");
                    letterSelection = utils.findOccurrence($(this).text());
                    checkSelection();
                }
            });
        }
    };
    handler.fillTable(utils.randomLetter);
}
$(document).ready(DocumentReady);