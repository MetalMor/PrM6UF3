/**
 * Created by becari on 07/04/2016.
 */
function DocumentReady() {
    var handler = new DOMhandler();
    var words = new Words();
    var utils = handler.utils;

    handler.fillTable("table#soup", utils.randomLetter);
}
$(document).ready(DocumentReady)