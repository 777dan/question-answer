let questions = [
    "Что мне взять с собой на каток?",
    "Что мне положить в холодильник?",
    "Что мне взять с собой в школу?",
    "Что мне взять с собой в бассейн?",
];
let answers = ["коньки", "яблоки", "учебники", "полотенце"];

function randomArrayValue(arr) {
    let rand = getRandomInt(n = answers.length);
    return arr[rand];
}
function getRandomInt(n = answers.length) {
    return Math.floor(Math.random() * n);
}

let question = randomArrayValue(questions);
let answer = randomArrayValue(answers);
alert(question + ": " + answer);