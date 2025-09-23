#!/usr/bin/env node

const https = require('https');
const config =  require('dotenv').config;
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv));
const city = argv['_'][0];

const myAPIKey = config().parsed.myAPIKey;
const url = `https://api.weatherapi.com/v1/current.json?key=${myAPIKey}&q=${city}&aqi=no`;

https.get(url, (res) => {
    const { statusCode } = res;
    if(statusCode !== 200){
        console.log(`statusCode: ${statusCode}`);
        return;
    }
    res.setEncoding('utf-8')
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk)
    res.on('end', () => {
        let parseData = JSON.parse(rawData);
        console.log(`Город: ${parseData.location.name}`);
        console.log(`Страна: ${parseData.location.country}`);
        let date = parseData.current.last_updated.replace(/^(\d{4})\-(\d{2})\-(\d{2})/,`$3.$2.$1`);
        console.log(`Дата и время: ${date}`);
        console.log(`Температура: ${parseData.current.temp_c}° С`);
    })
    
}).on('error', (err) => {
    console.log(err);
})