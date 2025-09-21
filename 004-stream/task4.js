#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');

const { argv } = yargs(hideBin(process.argv));
const logFile = argv['_'][0] + '.txt';

const result = (data) => {
    const array = Array.from(data);
    const size = array.length;
    const win = array.filter((item) => item != '0').length;

    console.log(`Общее количество партий: ${size}`);
    console.log(`Количество выигранных/проигранных партий: ${win}/${size - win}`);
    console.log(`Процентное соотношение выигранных партий: ${Math.floor(100/size*win)}%`);
}

// fs.readFile(logFile, "utf-8", (err, data) => {
//     if (err) throw new Error(err);
//     result(data);
// })

const readerStream = fs.createReadStream(logFile);
let data = '';
readerStream
.setEncoding('UTF8')
.on('data', (chunk) =>{
    data += chunk;
})
.on('end', () => {
    result(data);
});