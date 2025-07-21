const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Hey this is my first Java Script File");

rl.question("Please Enter Your Age: ", function(age) {
  age = parseInt(age);

  if (age > 65) {
    console.log("You are a Senior citizen!!!");
  } else if (age > 35) {
    console.log("You are Married!!!");
  } else if (age > 20) {
    console.log("You are a Young Star!!!!");
  } else if (age > 10) {
    console.log("You are a Kid!!!");
  } else {
    console.log("You Born recently — how can you give input here!!!");
  }

  rl.question("Enter Password: ", function(pass) {
    console.log("Password received: " + pass);  // Optional
    rl.close();
  });
});
