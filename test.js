input = [2, 8, 14];
let average = 0;
for (var i = 0; i< input.length; i++){
    let currentNum = input[i];
    average += currentNum;
}

const answer = average/input.length;
console.log(answer)