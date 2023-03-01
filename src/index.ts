import * as readline from "readline";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  console.log("Welcome to cock and ball torture");
  rl.question("What operation do you want to preform u cuck \n", (answer) => {
    if (answer === "add") {
      add();
    } else if (answer === "multiply") {
      multiply();
    } else if (answer === "divide") {
      divide();
    } else if (answer === "subtract") {
      subtract();
    } else {
      console.log("fuck you try again not an operation L bozo");
      main();
    }
  });
}

function add() {
  rl.question("What two numbers do you want to add bitch? \n", (answer) => {
    const split = answer.split(" ");
    const result = parseInt(split[0]) + parseInt(split[1]);
    if (Number.isNaN(result)) {
      console.log("you fucked up go back stupid slut");
      add();
      return;
    }
    console.log("the answer is: ", result, "now kill yourself ");
    rl.close();
  });
}

function subtract() {
  rl.question(
    "What two numbers do you want to subtract bitch? \n",
    (answer) => {
      const split = answer.split(" ");
      const result = parseInt(split[0]) - parseInt(split[1]);
      if (Number.isNaN(result)) {
        console.log("you fucked up go back stupid slut");
        subtract();
        return;
      }
      console.log("the answer is:  ", result, "now kill yourself ");
      rl.close();
    }
  );
}

function multiply() {
  rl.question(
    "What two numbers do you want to multiply bitch? \n",
    (answer) => {
      const split = answer.split(" ");
      const result = parseInt(split[0]) * parseInt(split[1]);
      if (Number.isNaN(result)) {
        console.log("you fucked up go back stupid slut");
        multiply();
        return;
      }
      console.log("the answer is:  ", result, "now kill yourself ");
      rl.close();
    }
  );
}

function divide() {
  rl.question("What two numbers do you want to divide bitch? \n", (answer) => {
    const split = answer.split(" ");
    const result = parseInt(split[0]) / parseInt(split[1]);
    if (Number.isNaN(result)) {
      console.log("you fucked up go back stupid slut");
      divide();
      return;
    }
    console.log("the answer is:  ", result, "now kill yourself ");
    rl.close();
  });
}
main();
