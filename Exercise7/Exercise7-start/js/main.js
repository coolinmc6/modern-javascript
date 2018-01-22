

var MAINAPP = (function(nsp) {

    var quiz = nsp.quiz,
        dom = nsp.dom,
        $ = nsp.dom.$;
    
      

    /*
    Other Utilities
    */

    var domReady = function(funct) {
        document.addEventListener('DOMContentLoaded', function(){ 
            if (typeof funct === "function") {
                funct();
            }
        }, false);
    };

    /*
    Quiz Functionality
    */
    var initQuiz = function() {
        dom.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
            quiz.initialize();
            quiz.checkAnswer($('#q01_ans')[0].value);
        });
    };
        


    /*
    Setup
    */
    domReady(function() {
        initQuiz();
    });

    //Public Methods and Properties
    // Step #1 - remove these public methods / properties; I commented them out for now

    // nsp.displayFeedback = displayFeedback;
    // nsp.$ = $;

    return nsp;
    
})(MAINAPP || {});