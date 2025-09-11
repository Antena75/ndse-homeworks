#!/usr/bin/env node

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 0;
const max = 100;

const number = Math.floor(min + Math.random() * (max + 1 - min));

rl.write(`Отгадайте число в диапазоне от ${min} до ${max}\n`);

rl.on('line', data => {
    const input = Number(data);
    if(number > input) {
        console.log(`Больше`);
    } else if (number < input) {
        console.log(`Меньше`);
    } else {
        console.log(`Отгадано число ${number}`);
        rl.close();
    }
});