const curr_status: string = "Submitted";
const next_status: string = "In Review";
const next_status2: string = "Resolved";

// Submitted → In Review → Resolved 
// In Review → Waiting for Info → In Review
const allowed_combinations: [string, string] [] = [["Submitted", "In Review"],["In Review", "Resolved"], ["In Review", "Waiting for Info"], ["Waiting for Info", "In Review"]];

function is_allowed_combination(curr_status: string, next_status: string) : boolean {
    return allowed_combinations.findIndex(
    combination => 
        combination[0] === curr_status && 
        combination[1] === next_status
    ) !== -1;
}

console.log(is_allowed_combination(curr_status, next_status)); //true
console.log(is_allowed_combination(curr_status, next_status2)); //false

