let input = parseInt(process.argv[2])

class RepeatingReciprocalFinder {

    constructor(n) {
        this.n = n;
        this.pastRemainders = []
        this.quotientDigits = 0
    }

    findStartingDividend() {
        var dividend = 1
        while (this.n > dividend) dividend *= 10
        return dividend
    }

    findGreatestMultiple(butNotGreaterThan) {
        return Math.floor(butNotGreaterThan / input) * input
    }

    getDigitsUntilReciprocalRepeats() {
        var currentDividend = this.findStartingDividend();
        var repeating = false;

        while (!repeating) {
            var multiple = this.findGreatestMultiple(currentDividend)
            var remainder = currentDividend - multiple
            if (!this.pastRemainders.includes(remainder)) {
                this.pastRemainders.push(remainder)
                //console.log(this.pastRemainders)
                ++this.quotientDigits
                currentDividend = remainder * 10;
            } else {
                repeating = true
            }
        }
        return this.quotientDigits
    }
}

let finder = new RepeatingReciprocalFinder(input);
let result = finder.getDigitsUntilReciprocalRepeats()

console.log(`The reciprocal of ${input} repeats after ${result} digits`);