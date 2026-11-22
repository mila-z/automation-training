const ids: string [] = ["REQ-001", "REQ-002", "REQ-003", "REQ-004"];
const titles: string [] = ["Title-1", "Title-2", "Title-3", "Title-4"];
const priorities: number [] = [1, 2, 3, 2];
const statuses: string [] = ["Submitted", "Resolved", "In Review", "Waiting for Info"];
const requestNum: number = ids.length;

console.log("ID".padEnd(10) + "Title".padEnd(25) + "Priority".padEnd(10) + "Status");
console.log("-".repeat(61));

for (let i = 0; i < requestNum; i++) {
    console.log((ids[i] ?? "").padEnd(10) + (titles[i] ?? "").padEnd(25) + String(priorities[i]).padEnd(10) + (statuses[i] ?? ""));
}