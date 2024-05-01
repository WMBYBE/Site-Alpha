class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }
}


const questionsList = new LinkedList();
    questionsList.append({ question: "Snowmelt is the source of most of the worlds drinking water.", answer: true });
    questionsList.append({ question: "Trees Existed Before Sharks", answer: false });
    questionsList.append({ question: "There are stars made of diamonds.", answer: true });
    questionsList.append({ question: "Earths oldest known rock is about 4 billion years old.", answer: true });

let currentQuestionIndex = 0;
let score = 0;

const displayQuestion = () => {
    const currentQuestion = questionsList.get(currentQuestionIndex);
    document.getElementById('question').textContent = currentQuestion.question;
};

function checkAnswer(userAnswer) {
    const currentQuestion = questionsList.get(currentQuestionIndex);
    const correctAnswer = currentQuestion.answer;

    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        resultText.textContent = "Correct!";
        score++;
    } else {
        resultText.textContent = "Incorrect!";
    }

    resultContainer.style.display = 'block';
}

function nextQuestion() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'none';

    currentQuestionIndex++;
    if(currentQuestionIndex < questionsList.length) {
        displayQuestion();
    } else {
        displayScore();

    }
}

function displayScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.style.display = 'none';

    const scoreContainer = document.createElement('div');
    scoreContainer.textContent = `Your final score is: ${score} out of ${questionsList.length}`;
    document.body.appendChild(scoreContainer);
}

displayQuestion();