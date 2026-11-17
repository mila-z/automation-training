const sla_hours: number = 30;
const days: number = Math.floor(sla_hours / 24);
const hours: number = sla_hours % 24;
const minutes: number = sla_hours*60;
console.log(`${sla_hours} SLA hours are ${days} days and ${hours} hours.`);
console.log(`${sla_hours} SLA hours are ${minutes} minutes.`);

let counter: number = 5;
const new_requests: number = 3;
const resolved_requests: number = 2;
counter += new_requests;
counter -= resolved_requests;
console.log(`Open requests: ${counter}`);