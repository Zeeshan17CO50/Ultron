var questionBox;
var answerBox;
var hintBox1;
var hintBox2;
var addition;
var response = ["Better Luck Next Time!", "Keep Trying Hard"]
var feedback = ["Good Job!", "You are Super Smart", "Keep Going!", "Awesome!", "Great!", "Excellent"];
var mojis = ["😀", "🐱", "🐶", "🌟", "🐄", "👶", "🔥"];
var mojisad = ["☹", "😠"];
var difficulty = 10;

class Addition {
    constructor() {
        this.a = Math.ceil(Math.random() * difficulty);
        this.b = Math.ceil(Math.random() * difficulty);
        this.answer = this.a + this.b;
    }
    check(ans) {
        if (ans == this.answer) {
            window.alert("Your Answer is Correct");
            alert(feedback[Math.floor(Math.random() * 6)]);
            answerBox.value = "";
            hintBox1.value = "";
            hintBox2.value = "";
            askQuestion();
        }

        if (ans == "") {
            window.alert("Please Insert Some Value");
        }

        if (ans != this.answer && ans != "") {
            window.alert("Wrong Answer");
            window.alert(response[Math.floor(Math.random() * 2)]);
        }
    }


    getEquation() {
        return this.a + "+" + this.b + "=?"
    }
}

function init() {
    questionBox = document.getElementById("question");
    answerBox = document.getElementById("ans");
    hintBox1 = document.getElementById("hint1");
    hintBox2 = document.getElementById("hint2");
    askQuestion();
}

function askQuestion() {
    let moji = mojis[Math.floor(Math.random() * 5)];
    addition = new Addition();
    questionBox.innerHTML = addition.getEquation();
    hintBox1.innerHTML = moji.repeat(addition.a);
    hintBox2.innerHTML = moji.repeat(addition.b);
}

function checkAnswer() {
    addition.check(answerBox.value);
}

function response() {
    let moji = mojisad[Math.floor(Math.random() * 5)];
}