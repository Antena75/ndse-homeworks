#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const readline = require('readline');
const fs = require('fs');


const { argv } = yargs(hideBin(process.argv));
const logFile = argv['_'][0] + '.txt';

// const path = require('path');
// fs.mkdir(path.join(__dirname, 'log'), (err) => {
//     if (err) throw Error(err);
// });
// const file = path.join(__dirname, logFile);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const writeLog = (data) => {
    fs.appendFile(logFile, data, (err) => {
        if (err) throw Error(err);
    })
}

const number = Math.floor(1 + Math.random() * 2);

rl.write('Отгадайте орел(1) или решка(2)\n');

rl.on('line', data => {    
    if(number === +data){
        console.log('Вы угадали');
        writeLog('1')
        rl.close();
    } else {
        console.log('вы НЕ угадали');
        writeLog('0')
        rl.close();
    }
});