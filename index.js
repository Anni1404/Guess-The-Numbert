const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Please Enter a Number between ${min} - ${max}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("Please Enter a valid Number");
    } else if (guess < min || guess > max) {
        window.alert("Please Enter a valid Number");
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("Too Low");
        } else if (guess > answer) {
            window.alert("Too High");
        } else {
            window.alert(`Correct Guess after ${attempts} attempts`);
            running = false;
        }
    }
}
