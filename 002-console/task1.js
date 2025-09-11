#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv))
    .option('year', {
        alias: 'y',
        type: 'boolean',
        description: 'год'
    })
    .option('month', {
        alias: 'm',
        type: 'boolean',
        description: 'месяц'
    })
    .option('date', {
        alias: 'd',
        type: 'boolean',
        description: 'дата'
    });

const date = new Date();
const command = argv['_'][0];
const value = argv['_'][1];

const parseDate = (value) => {
    if (argv.y){
        console.log(date.getFullYear() + value);
        return;
    }
    
    if (argv.m){
        console.log(date.getMonth() + value + 1);
        return;
    } 
    
    if (argv.d){
        console.log(date.getDate() + value);
        return;
    } 

    console.log(date.toISOString());
};

if (command === undefined || value === undefined) {
    console.log('Текущая дата');
    parseDate(0);
    return;
} 

if (command === 'add') {
    console.log('Дата вперёд');
    parseDate(value);
    return;
} 

if (command === 'sub') {
    console.log('Дата назад');
    parseDate(-value);
    return;
}

console.error('неправильные аргументы');
    


