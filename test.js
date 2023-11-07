testCase = [1,2,3];

console.log(average(testCase));
function average(input){
    var total = 0;
    for (var i = 0; i < input.length; i++){
        total += input[i]
    };
    var avg = total/input.length;
    return avg
}
