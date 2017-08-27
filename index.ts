"use strict";

import { ReadLine, createInterface } from "readline";

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function askQuestion(question: string): Promise<string> {
    const promise = new Promise<string>((resolve, reject) => {
        readLine.question(question, (answer: string) => {
            resolve(answer);
        });
    });
    return promise;
}

async function main(): Promise<string> {
    const name: string = await askQuestion("What is your name? ");

    let age: string | number = await askQuestion(`It's a pleasure to meet you ${name}, how old are you? `);

    age = Number(age);

    if (age > 10) {
        console.log("Wow, you are so old!");
    } else {
        console.log("Wow, so young!");
    }

    return name;
}

main();