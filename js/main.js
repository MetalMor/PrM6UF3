/**
 * Created by becari on 07/04/2016.
 */
function DocumentReady() {
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