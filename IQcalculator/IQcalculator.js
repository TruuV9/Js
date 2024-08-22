function calculateIQ(testScore) {
    const maxTestScore = 10;
    const maxIQ = 130;
    const minIQ = 70;
    const averageIQ = 100;

    const iq = ((testScore / maxTestScore) * (maxIQ - minIQ)) + minIQ;

    let comparison;
    if (iq >= 130) {
        comparison = "very good";
    } else if (iq >= 115) {
        comparison = "above average";
    } else if (iq >= 85) {
        comparison = "average";
    } else if (iq >= 70) {
        comparison = "below average";
    } else {
        comparison = "very bad";
    }

    return {
        iq: iq,
        comparison: comparison
    };
}

// My IQ result
const testScore = 7;
const result = calculateIQ(testScore);
console.log(`Your IQ is ${result.iq.toFixed(2)}, which is considered ${result.comparison}.`);
