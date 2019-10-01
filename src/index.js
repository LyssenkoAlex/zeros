module.exports = function zeros(expression) {
    // your solution
    let toReturn1 = 0;
    let toReturn2 = 0;
    let arrNumbers = expression.split('*');

    arrNumbers.forEach(x => {
        let number = Number(x.substr(0, x.indexOf("!")));
        if (x.includes('!!')) {
            toReturn1 = toReturn1 + getFractionOfDigitTwo(number, 2);
            toReturn2 = toReturn2 + getFractionOfDigitTwo(number, 5);
        } else {
            toReturn1 = toReturn1 + getFractionOfDigit(number, 2);
            toReturn2 = toReturn2 + getFractionOfDigit(number, 5);
        }
    });

    return toReturn1 <= toReturn2 ? toReturn1 : toReturn2;

};

function getFractionOfDigit(digit, delimiter) {
    let i = 1;

    let count = 0;
    while (i <= digit) {
        let tmp = i;
        while (tmp && tmp % delimiter === 0) {
            count++;
            tmp = Math.floor(tmp / delimiter);
        }
        i++;
    }
    return count;
}

function getFractionOfDigitTwo(digit, delimiter) {

    let i = digit % 2 ? 1 : 2;
    let count = 0;

    while (i <= digit) {
        let tmp = i;
        while (tmp && tmp % delimiter === 0) {
            count++;
            tmp = Math.floor(tmp / delimiter);
        }
        i += 2;
    }
    return count;
}
