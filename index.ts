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
    const name: string = await askQuestion("WHY Hello there, friend. What might your name be?");

    let gender: string = await askQuestion(`'Tis a pleasure to meet you ${name}. Now what is your gender (male/female)as I would hate to assume yours `);

    // male Male MALE mAlE malE
    if (gender.toLowerCase() === "male") {
        gender = "Mr.";
    } else if (gender.toLowerCase() === "female") {
        gender = "Mrs.";
    }

    let age: string | number = await askQuestion(`Well it's a pleasure to meet you ${gender}${name}, and how old are you? `);

    age = Number(age);

    if (age > 15) {
        console.log("Wow, you are so old!");
    } else if (age <= 15) {
        console.log("Wow, so young!");
    } else {
        console.log("stop messing around");
    }
    return name;

}

main();