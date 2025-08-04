let maximum = prompt("Enter maximum number:");
maximum = parseInt(maximum); // Ensure it's a number

if (isNaN(maximum) || maximum <= 0) {
    console.log("Please enter a valid positive number!");
} else {
    let randomNumber = Math.floor(Math.random() * maximum) + 1; // +1 to include 'maximum'
    let maxAttempts = 10;

    for (let i = 1; i <= maxAttempts; i++) {
        let guess = prompt(`Attempt ${i}: Enter your guess (1 to ${maximum}):`);
        guess = parseInt(guess);

        if (isNaN(guess)) {
            console.log("Not a valid number. Try again.");
            i--; // Does not count invalid attempts
            continue;
        }

        if (guess === randomNumber) {
            console.log("🎉 Correct!!");
            console.log(`✅ You guessed it in attempt ${i}. CONGRATULATIONS!`);
            break;
        } else if (guess > randomNumber) {
            console.log("📈 Too High!! Try Again.");
        } else {
            console.log("📉 Too Low!! Try Again.");
        }

        if (i === maxAttempts) {
            console.log("❌ You've used all attempts!");
            console.log(`💡 The correct number was: ${randomNumber}`);
        }
    }
}
