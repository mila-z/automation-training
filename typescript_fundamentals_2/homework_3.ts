let titles: string [] = [];
let priorities: number [] = [];

for (let i = 1; i <= 10; i++) {
    let title: string = "";
    if (i < 10) {
        title = `Title request 0${i}`;
    }
    else {
        title = `Title request ${i}`;
    }
    
    const priority: number = (i % 5 === 0 ? 5 : i % 5);

    titles.push(title);
    priorities.push(priority);
}