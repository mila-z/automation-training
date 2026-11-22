export function idFormatting (id: number) : string {
    // turn an id number into a string
    return "REQ-" + String(id).padStart(3, '0');
}


export function slaCalculation (slaHours: number) : [number, number] {
    // calculates the SLA hours into days and remaining hours
    const days: number = Math.floor(slaHours / 24);
    const hours: number = slaHours % 24;
    return [days, hours];
}


export function isOverdue(currDate: [number, number, number], deadline: [number, number, number]) : boolean {
    // checks whether the current Date is past the deadline
    if (currDate[2] !== deadline[2]) {
        return currDate[2] > deadline[2];
    }

    if (currDate[1] !== deadline[1]) {
        return currDate[1] > deadline[1];
    }

    return currDate[0] > deadline[0];
}

export function validTitle(title: string) : boolean {
    // checks whether the length of the title is between 5 and 100 chars
    if (title.length < 5 || title.length > 100) {
        return false;
    }
    return true;
}


export function isAllowedCategory(category: string, allowed: string[]) : boolean {
    return allowed.includes(category);
}


export function createSummary(id: number, title: string, priority: number) : string {
    const formattedId : string = idFormatting(id); 
    return `${formattedId}: ${title} (P${priority})`;
}