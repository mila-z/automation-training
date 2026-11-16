let total = 40;
let failed = 6;
let skipped = 2;
let passed = total - failed - skipped;
let passedPercent = (passed/total)*100;
let greenRun = !failed && passedPercent >= 90;
console.log(`Passed: ${passed}`);
console.log(`Passed rate: ${passedPercent}%`);
console.log(`Green run: ${greenRun}`);