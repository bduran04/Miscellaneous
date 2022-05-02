
// IMPORTANT: All code must be in this file or it will not be submitted

// Sample Test Case
// JavaScript only supports strings as keys in Objects, so we represent the input in this way
const sample = { "A,B,C": 4, "B,C,A": 3, "C,B,A": 2 };
const sample2 = { "A,B,C": 5, "B,C,A": 7, "C,B,A": 2 };
const case1 = { "A,B,C": 2, "A,C,B": 2, "B,A,C": 3 };
const case2 = { "B,A": 2, "A,B": 2 };
const case3 = { "A,B,C": 1, "B,A,C": 2, "C,A,B": 1 };
const case4 = { "A,B": 5, "B": 4, "C": 3, "D": 2 };

// you can convert back and forth between this and an Array as follows:
console.log("A,B,C".split(","))
console.log(["A", "B", "C"].join(","))

// Determine plurality winner (Part 1)
console.log("The plurality winner is: " + getPluralityWinner(sample));
// TODO: add additional test cases for Part 1 here
console.log("The plurality winner is: " + getPluralityWinner(sample2));
console.log("The plurality winner is: " + getPluralityWinner(case1));
console.log("The plurality winner is: " + getPluralityWinner(case2));


// Determine ranked choice winner (Part 2)
console.log("The ranked choice winner is: " + getRankedChoiceWinner(sample));
// TODO: add additional test cases for Part 2 here
console.log("The ranked choice winner is: " + getRankedChoiceWinner(sample2));
console.log("The ranked choice winner is: " + getRankedChoiceWinner(case1));
console.log("The ranked choice winner is: " + getRankedChoiceWinner(case2));
console.log("The ranked choice winner is: " + getRankedChoiceWinner(case4));

//implement this method for Part 1
function getPluralityWinner(ballots) {
    let winner = 0;
    let currentHighScore = 0;
    let ballotMap = {};
    Object.keys(ballots).forEach((ballot, i) => {
        if (ballotMap[ballot[0]]) {
            ballotMap[ballot[0]] += ballots[ballot]
        } else {
            ballotMap[ballot[0]] = ballots[ballot];
        }
    })
    Object.keys(ballotMap).forEach(candidate => {
        if (ballotMap[candidate] > currentHighScore) {
            currentHighScore = ballotMap[candidate]
            winner = candidate
        }
    })
    return winner;

}
function updateCandidateKeys(ballots, leastPopularCandidate) {
    Object.keys(ballots).map(ballot => {
        let newKey = ballot.split(',').filter(candidate => candidate != leastPopularCandidate).join(',');
        if (ballots[newKey]) {
            ballots[newKey] += ballots[ballot]
        } else {
            ballots[newKey] = ballots[ballot];
        }
        delete ballots[ballot];
    })
    return ballots
}

//implement this method for Part 2
function getRankedChoiceWinner(ballots) {
    let winner = '';
    let currentHighScore = 0;
    let total = 0;
    let ballotMap = {};
    let leastPopularCandidate = '';
    let leastPopularCandidateScore = null;
    Object.keys(ballots).forEach((ballot, i) => {
        if (ballotMap[ballot[0]]) {
            ballotMap[ballot[0]] += ballots[ballot]
        } else {
            ballotMap[ballot[0]] = ballots[ballot];
        }
    })
    Object.keys(ballotMap).forEach(candidate => {
        if (ballotMap[candidate] > currentHighScore) {
            currentHighScore = ballotMap[candidate]
            winner = candidate
        }
        if (leastPopularCandidateScore === null) {
            leastPopularCandidateScore = ballotMap[candidate];
            leastPopularCandidate = candidate;
        }
        if (ballotMap[candidate] < leastPopularCandidateScore) {
            leastPopularCandidateScore = ballotMap[candidate]
            leastPopularCandidate = candidate
        }
    })
    Object.values(ballotMap).forEach(value => {
        total += value
    })
    if (ballotMap[winner] > total / 2) {
        return winner;
    } else {
        let newSample = updateCandidateKeys(ballots, leastPopularCandidate);
        return getRankedChoiceWinner(newSample);
    }
}