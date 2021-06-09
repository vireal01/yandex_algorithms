const fs = require('fs')
let data = fs.readFileSync("input.txt", "utf8");
let ans = ''
data = data.toString().split('\n');
let sideA = parseInt(data[0]);
let sideB = parseInt(data[1]);
let sideC = parseInt(data[2]);


if ((sideA + sideB > sideC) && (sideA + sideC > sideB) && ((sideC + sideB > sideA))) {
    ans = 'YES'
} else ans = 'NO'

fs.writeFileSync("output.txt", ans.toString())