#!user/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

let sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
};

async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('lets start calculation');
    await sleep();
    rainbowTitle.stop();
    console.log(` _____________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|`
    );

}
await welcome();

async function askQuestion() {

    let answer = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'operators',
                message: 'which operation do you want to perform?/n',
                choices: ["addition",
                         "subtraction",
                        "multiplication",
                        "division"]
            },
            {
                type: "number",
                name: "num1",
                message: "enter first number"
            },
            {
                type: "number",
                name: "num2",
                message: "enter second number"
            },
        ])
        .then((answers) => {
            // etc
            if (answers.operators == "addition")
                console.log(`${answers.num1}+${answers.num2}=${answers.num1 + answers.num2}`);

            else if (answers.operators == "subtraction")
                console.log(`${answers.num1}-${answers.num2}=${answers.num1 - answers.num2}`);

            else if (answers.operators == "multiplication")
                console.log(`${answers.num1}*${answers.num2}=${answers.num1 * answers.num2}`);

            else if (answers.operators == "division")
                console.log(`${answers.num1}/${answers.num2}=${answers.num1 / answers.num2}`);

        });
}
// await askQuestion();

async function startAgain(){
    do {
        await askQuestion();
       var again = await inquirer.prompt({
            type : "input",
            name : "restart",
            message : "do you want to continue ! press 'y' or 'n' "
        }
        )
        
    } while (again.restart == "y"|| again.restart == "yes"|| again.restart=='Y');

};
startAgain();