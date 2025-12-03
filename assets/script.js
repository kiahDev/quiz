const questions = [
    { question: 'Who built the ark?', choices: ['Moises', 'Noah', 'Abraham', 'David'], answer: 'Noah' },
    { question: 'What did God create on the first day?', choices: ['Sun and Moon', 'Plants', 'Light', 'Animals'], answer: 'Light' },
    { question: 'Who was thrown in the lions den?', choices: ['Daniel', 'Joseph', 'Elijah', 'Peter'], answer: 'Daniel' },
    { question: 'Where was Jesus born?', choices: ['Nazareth', 'Bethlehem', 'Jerusalem', 'Capernaum'], answer: 'Bethlehem' }, 
    { question: 'Who led the Israelites out of Egypt?', choices: ['Joshua', 'Moses', 'Aaron', 'Samuel'], answer: 'Moses' },
    { question: 'Which sea did God part for the Israelites?', choices: ['Sea of Galilee', 'Dead Sea', 'Red Sea', 'Mediterranean Sea'], answer: 'Red Sea' },
    { question: 'Who denied Jesus three times?', choices: ['Peter', 'John', 'James', 'Paul'], answer: 'Peter' },
    { question: 'How many days and nights did it rain during the flood?', choices: ['20', '30', '40', '50'], answer: '40' },
    { question: 'What is the 6th book in the Bible?', choices: ['Leviticus', 'Numbers', 'Deuteronomy', 'Joshua'], answer: 'Joshua' },
    { question: 'What did David use to defeat Goliath?', choices: ['Sword', 'Bow and Arrow', 'Sling and Stone', 'Spear'], answer: 'Sling and Stone' },
    { question: 'Who betrayed Jesus for 30 pieces of silver?', choices: ['Peter', 'John', 'Paul', 'Judas'], answer: 'Judas' },
    { question: 'What is the shortest verse in the Bible?', choices: ['Fear Not', 'Jesus Wept', 'Rejoice Always', 'Love One Another'], answer: 'Jesus Wept' },
    { question: 'Who was the strongest man in the Bible?', choices: ['Goliath', 'David', 'Solomon', 'Samson'], answer: 'Samson' },
    { question: 'Who was swallowed by a big fish?', choices: ['Jonah', 'Elijah', 'Daniel', 'Paul'], answer: 'Jonah' },
    { question: 'What did God use to speak to Moses?', choices: ['An Angel', 'The Wind', 'A Burning Bush', 'Dream'], answer: 'A Burning Bush' },
    { question: 'Which disciple walked on water with Jesus?', choices: ['James', 'John', 'Peter', 'Thomas'], answer: 'Peter' },
    { question: 'Who was the first king of Israel?', choices: ['Saul', 'David', 'Solomon', 'Samuel'], answer: 'Saul' },
    { question: 'Who wrote many of the Psalms?', choices: ['Moses', 'Isaiah', 'David', 'Solomon'], answer: 'David' },
    { question: 'What is the last book in the Bible?', choices: ['Hebrews', 'Revalation', 'Jude', 'Romans'], answer: 'Revelation' },
    { question: "Who interpreted Pharaoh's dream?", choices: ['Daniel', 'Joseph', 'Moses', 'Samuel'], answer: 'Joseph' },
    { question: 'How many plagues did God send on Egypt?', choices: ['5', '7', '10', '12'], answer: '10' },
    { question: 'Who was known as the weeping prophet?', choices: ['Jeremiah', 'Isaiah', 'Ezekiel', 'Daniel'], answer: 'Jeremiah' },
    { question: 'Which apostle wrote Revelation?', choices: ['John', 'Peter', 'Paul', 'James'], answer: 'John', answer: 'Revelation' },
    { question: 'What is the fruit of the Spirit?', choices: ['Love, Joy, Peace', 'Wealth, Power, Fame', 'Faith, Hope, Fear', 'Strength, Honor, Pride'], answer: 'Love, Joy, Peace' },
    { question: 'How many days did Jesus fast in the wilderness?', choices: ['20', '30', '40', '50'], answer: '40' },
    { question: 'Who was the first murderer in the Bible?', choices: ['Cain', 'Abel', 'Lamech', 'Esau'], answer: 'Cain' },
    { question: 'Which king asked for wisdom?', choices: ['David', 'Solomon', 'Saul', 'Hezekiah'], answer: 'Solomon' },
    { question: 'Who was the first woman?', choices: ['Eve', 'Sarah', 'Mary', 'Rebekah'], answer: 'Eve' },
    { question: 'Who was the first man God created?', choices: ['Adam', 'Noah', 'Abraham', 'Moses'], answer: 'Adam' },
    { question: 'Which prophet challenged the prophets of Baal?', choices: ['Elijah', 'Elisha', 'Isaiah', 'Jeremiah'], answer: 'Elijah' },
    { question: 'Who was known for his patience?', choices: ['Job', 'Daniel', 'Moses', 'Joseph'], answer: 'Job' },
    { question: 'What river was Jesus baptized in?', choices: ['Jordan', 'Nile', 'Euphrates', 'Tigris'], answer: 'Jordan' }
];

const questionTxt = document.getElementById('question-text');
const choiceBtn = document.querySelectorAll('.choice-btn');
const progressTxt = document.getElementById('progress');

let score = 0;
let questionNum = 1;

function askQuestion() {

    if (questionNum < 11) {

        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

        questionTxt.textContent = randomQuestion.question;
        progressTxt.textContent = `Question ${questionNum} of 10`;

        choiceBtn.forEach(function(button, index) {
            button.textContent = randomQuestion.choices[index];
            button.style.backgroundColor = '';

            button.onclick = function() {
                
                choiceBtn.forEach(function(button) {
                    button.disabled = true;
                });

                if (button.textContent === randomQuestion.answer) {
                    button.style.backgroundColor = 'green';
                    score++;
                } else {
                    choiceBtn.forEach(function(button) {
                        if (button.textContent === randomQuestion.answer) {
                            button.style.backgroundColor = 'green';
                        }
                    });

                    button.style.backgroundColor = 'red';
                };
                questionNum++;
                questions.splice(randomIndex, 1);
                setTimeout(function() {
                    choiceBtn.forEach(function(button) {
                        button.disabled = false;
                    });

                    askQuestion();
                }, 1000);
            };
        });
    } else {
        alert(`Quiz finished! Score : ${score}`);
    }
}

askQuestion();


