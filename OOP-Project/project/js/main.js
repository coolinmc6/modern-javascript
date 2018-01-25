

var MAINAPP = (function(nsp, $, domU, strU) {

    /*
    Quiz Functionality
    */
    var contentObj = {},
        questionsArray = [],
        navigationProto = {}, //Setup in setUpNavigation()
        prevBtn, 
        nextBtn;

    var loadJSON = function(path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                contentObj = JSON.parse(xobj.responseText);
                //console.log(contentObj);
                parseData(contentObj);
            }
        };
        xobj.send(null);
    },

    parseData = function(cObj) {
        questionsArray = cObj.questions;
        //set button text
        domU.setHTML($('.fill-in-submit'), cObj.buttonText);
        
        for (let i = 0; i < questionsArray.length; i++) {
            questionsArray[i] = new Question(questionsArray[i]);
        }
        console.log(questionsArray);
        setUpNavigation();
    },

    initQuiz = function() {
        loadJSON("../project/JSON/content.json");
    };

    // Setup Quesions
    var Question = function(obj) {

        this.questionDiv = (obj.type === "true-false") ? "multi-choice" : obj.type; // COPY #3
        //Transfer Data - COPY #1
        
        // this.type = obj.type;
        // this.id = obj.id;
        // this.questionText = obj.questionText;
        // this.distractorText = obj.distractors;
        // this.correctResp = obj.correctResp;
        // this.feedback = obj.feedback;
        // this.weight = obj.weight;
        for (let i in obj) {
            this[i] = obj[i];
        }

        this.result = "no-answer";
        this.studentResp = "";
        this.correct = false;

        console.log(obj)
        //Assign DOM elements - COPY #2
        htmlDiv = $('#'+this.questionDiv)[0];
        this.questionField = htmlDiv.querySelector(".question-text");
        this.noAnswerFeed = htmlDiv.querySelector(".feedback.no-answer");
        this.correctFeed = htmlDiv.querySelector(".feedback.correct");
        this.inccorrectFeed = htmlDiv.querySelector(".feedback.incorrect");
        this.htmlDiv = htmlDiv;

        
        // Populating the Questions - COPY #5
        switch (this.questionDiv) {
            case "fill-in":
                this.populateTheQuestion = function() {
                    this.populateQuestion();
                    htmlDiv.querySelector('textarea').value = '';
                };
                this.checkTheAnswer = function() {
                    console.log("fill-in");
                    var ans,
                        value = htmlDiv.querySelector('textarea').value;

                    if (value !== "") {
                        // breakOut is a stringUtil function that breaks out all the words 
                        // of a string into an array
                        ans = strU.breakOut(this.correctResp, ",");
                        this.correct = ans.every(function(val) {
                            // if the answer exists, they will get a "right" answer for that word
                            return (value.indexOf(val) > -1);
                        });
                        this.result = (this.correct) ? 'correct' : 'incorrect';
                    }
                    this.hideFeedback();
                    this.displayFeedback();
                };
                break;
            case "multi-choice":
                var distractors = htmlDiv.querySelectorAll('label'),
                    distractorsRadio = htmlDiv.querySelectorAll('input');

                this.populateTheQuestion = function() {
                    // COPY #6
                    this.populateQuestion();
                    domU.addClass(distractors, 'remove');
                    for (let i = 0; i < distractors.length; i++) {
                        if (this.distractorText[i] !== undefined) {
                            distractors[i].innerHTML = this.distractorText[i];
                            domU.removeClass([distractors[i]],'remove');
                        }
                    }
                    for (let i = 0; i < distractorsRadio.length; i++) {
                        distractorsRadio[i].checked = false;
                    }
                };
                this.checkTheAnswer = function() {
                    // COPY #8
                    console.log("multi-choice");

                    for (let i = 0; i < distractors.length; i++) {
                        if (distractorsRadio[i].checked) {
                            this.studentResp = $('#' + distractorsRadio[i].id + '_label')[0].innerHTML;
                        }
                    }
                    if (this.studentResp !== "") {
                        this.correct = this.studentResp === this.correctResp;
                        this.result = (this.correct) ? 'correct' : 'incorrect';
                    }
                    this.hideFeedback();
                    this.displayFeedback();
                };
                break;
            default:
                this.populateTheQuestion = function() {
                    this.populateQuestion();
                };
                break;
        }



    };

    Question.prototype.displayQuestion = function() {
        var checkTheAnswer = this.checkTheAnswer.bind(this);
        domU.removeClass([this.htmlDiv],'hidden-question');
        // we have to use this.htmlDiv because this is the prototype
        domU.assignEvent(this.htmlDiv.querySelectorAll('.fill-in-submit.btn-primary'), 'click', function() {
            checkTheAnswer();
        })
    };
    Question.prototype.hideQuestion = function() {
        domU.addClass([this.htmlDiv], 'hidden-question');
    };
    Question.prototype.populateQuestion = function() {
        //Set Question text
        this.questionField.innerHTML = this.questionText;
        this.noAnswerFeed.innerHTML = '<p><span>X </span>' + this.feedback.noAnswer + '</p>';
        this.correctFeed.innerHTML = '<p><span>&#10003 </span>' + this.feedback.correctAnswer + '</p>';
        this.inccorrectFeed.innerHTML = '<p><span>X </span>' + this.feedback.wrongAnswer + '</p>';
    };
    Question.prototype.hideFeedback = function() {
        var feedback = this.htmlDiv.querySelectorAll('.feedback.visible');
        domU.removeClass(feedback, 'visible');
    };
    Question.prototype.displayFeedback = function() {
        var feedback = $('.feedback.' + this.result);
        domU.addClass(feedback, 'visible');
    };
    Question.prototype.checkAnswer = function() {

    };

    // Setup Navigation Object
    var setUpNavigation = function() {
        var cQuestion = 0;

        // COPY #9
        navigationProto = {
            questionsArray: questionsArray,
            totalQuestions: questionsArray.length,
            hideQuestion: function() {
                var curQuestion = this.questionsArray[this.currentQuestion];
                curQuestion.hideQuestion();
            },
            showQuestion: function() {
                var newQuestion = this.questionsArray[this.currentQuestion];
                newQuestion.hideFeedback();
                newQuestion.populateTheQuestion();
                newQuestion.displayQuestion();
            },
            get currentQuestion() {
                return cQuestion;
            },
            set currentQuestion(value) {
                cQuestion = value;
            }
        };

        nextBtn = Object.create(navigationProto);
        nextBtn.goNext = function(e) {
            if(this.currentQuestion < this.totalQuestions - 1) {
                this.hideQuestion();
                this.currentQuestion = this.currentQuestion + 1;
                this.showQuestion();

            }
        }

        prevBtn = Object.create(navigationProto);
        prevBtn.goPrev = function(e) {
            if (this.currentQuestion > 0){
                this.hideQuestion();
                this.currentQuestion = this.currentQuestion - 1;
                this.showQuestion();
            }
        };

        $('.btn-prev')[0].addEventListener("click", function(e) {
            prevBtn.goPrev(e);
        });

        $('.btn-next')[0].addEventListener("click", function(e) {
            nextBtn.goNext(e);
        });

        navigationProto.showQuestion();

        nsp.prevBtn = prevBtn;
        nsp.nextBtn = nextBtn;
    }

    /*
    Setup
    */
    UTIL.domReady(function() {
        initQuiz();
    });

    //Public Methods and Properties
    nsp.initQuiz = initQuiz;
    
    return nsp;
    
})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string);