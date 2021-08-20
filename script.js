/* 
This project will start with 3 prompts and a bunch of randomized answers for each.
My first code will be setting the prompts and the possible completions.
Then I will write the possible prompts and write a function to randomize each one.
After that, I will write a function to print each prompt with a randomized answer
for every time the program runs. 
*/

const firstPrompt = "Your underwear color is: ";
const secondPrompt = "Your favorite animal is: ";
const thirdPrompt = "Your future job will be: ";

const firstAnswers = ["Blue!", "Red!", "Purple!", "Grey!"];
const secondAnswers = ["Lion!", "Tiger!", "Wolf!", "Fly!"];
const thirdAnswers = ["Construction!", "Dog handler!", "Navy SEAL!", "Astronaut!"];

const randomizeAnswer = answers => {
    let number = Math.floor(Math.random() * 4);
    return answers[number];
};

const buildPhrase = (prompt, answer) => {
    let response = randomizeAnswer(answer);
    let phrase = prompt + response;
    return phrase;
};

console.log(buildPhrase(firstPrompt, firstAnswers));
console.log(buildPhrase(secondPrompt, secondAnswers));
console.log(buildPhrase(thirdPrompt, thirdAnswers));