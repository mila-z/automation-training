const passedText = '17';
const failedText = '3';
// the result will be '173' because when one of the operands is a string the + is concatenation
const res = passedText + failedText; 
console.log(res); 
const passedNum = Number(passedText);
const failedNum = Number(failedText);
const converted = passedNum + failedNum;
console.log(converted);
console.log(`text: ${typeof(res)}; converted: ${typeof(converted)}`);