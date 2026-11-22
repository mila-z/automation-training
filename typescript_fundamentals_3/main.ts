import {idFormatting, slaCalculation, isOverdue, isAllowedCategory, validTitle, createSummary} from "./request-utils.ts";

console.log(idFormatting(2));
console.log(idFormatting(25));
console.log(idFormatting(250));

console.log(slaCalculation(25));
console.log(slaCalculation(48));


console.log(isOverdue([22, 5, 2026], [22, 6, 2026]));
console.log(isOverdue([22, 6, 2026], [22, 5, 2026]));

console.log(validTitle("hehe"));
console.log(validTitle("hehehe"));
console.log(validTitle("hehehehehe hehehehehe hehehehehe hehehehehe hehehehehe hehehehehe hehehehehe hehehehehe hehehehehe hehehehehe "));


const allowedCategories: string[] = ["cat1", "cat2", "cat3"];

console.log(isAllowedCategory("cat1", allowedCategories));
console.log(isAllowedCategory("cat5", allowedCategories));

console.log(createSummary(1, "Broken street light", 2));