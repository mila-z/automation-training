let durations = [1200, 800, 4300, 950, 2700];
console.log(`First element: ${durations[0]}`);
console.log(`Last element: ${durations[durations.length - 1]}`);
console.log(`Number of items: ${durations.length}`);
durations.push(3100);
let total = 0;
let average = 0;
let slowest = durations[0];
for (let i = 0; i < durations.length; i++) {
    total += durations[i];
    if (durations[i] > slowest) {
        slowest = durations[i];
    }
}
average = total / durations.length;
console.log(`Total: ${total} ms`);
console.log(`Average: ${average} ms`);
console.log(`Slowest: ${slowest} ms`);