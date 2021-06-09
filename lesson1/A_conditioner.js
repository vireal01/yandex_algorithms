const fs = require('fs')
let data = fs.readFileSync("input.txt", "utf8");

data = data.toString().split('\n');
let troom = parseInt(data[0].split(' ')[0]);
let tcond = parseInt(data[0].split(' ')[1]);
let method = data[1];
if ((method === 'freeze') && (troom > tcond)) {
    troom = tcond
}
if ((method === 'heat') && (troom < tcond)) {
    troom = tcond
}
if ((method === 'auto')) {
    troom = tcond
}
fs.writeFileSync("output.txt", troom.toString())