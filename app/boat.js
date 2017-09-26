const Boatit = require('boatit');

const boatit = new Boatit();

process.stdin
    .pipe(boatit)
    .pipe(process.stdout);

console.log('boat boat boat boat boat boat boat');