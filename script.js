let questions = [
    "Что мне взять с собой на каток?",
    "Что мне положить в холодильник?",
    "Что мне взять с собой в школу?",
    "Что мне взять с собой в бассейн?",
];
let answers = ["коньки", "яблоки", "учебники", "полотенце", "куртку", "бананы"];

let rand = Math.floor(Math.random() * questions.length);
function randomArrayValue(arr) {
    return arr[rand];
}
let rand1 = Math.floor(Math.random() * answers.length);
function getRandomInt(n) {
    return n[rand1]
}
let rand2 = Math.floor(Math.random() * answers.length);
function getRandomInt1(n) {
    return n[rand2]
}

let question = randomArrayValue(questions);
let answer = getRandomInt(answers);
let answer1 = getRandomInt1(answers);
alert(question + ": " + answer + ", " + answer1);