for (let i = 1; i <= 5; i++) {
    console.log(`Run ${i} out of 5`);
}

let attempt = 1;
while (attempt <= 5) {
    console.log(attempt);
    if (attempt == 4) {
        break;
    }
    else {
        attempt++;
    }
}