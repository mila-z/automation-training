let durationMs = 800; 
// let durationMs = 1000; 
// let durationMs = 3000; 
// let durationMs = 3001; 
if (durationMs < 1000) {
    console.log('fast');
}
else if (durationMs <= 3000) {
    console.log('ok');
}
else {
    console.log('slow');
}

let stat = 'PASS';
switch (stat) {
    case 'PASS':
        console.log('PASS');
        break;
    case 'BREAK':
        console.log('BREAK');
        break;
    case 'SKIP':
        console.log('SKIP');
        break;
    default:
        console.log('UNKNOWN');
}