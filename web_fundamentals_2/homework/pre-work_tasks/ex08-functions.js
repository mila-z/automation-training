function isPassed(stat) {
    return stat === 'passed';
}

function classifyDuration(ms) {
    if (ms < 1000) {
        return 'fast';
    }
    else if (durationMs <= 3000) {
        return 'ok';
    }
    return 'slow';
}