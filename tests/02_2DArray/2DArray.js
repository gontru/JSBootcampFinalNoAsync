function twoDArray(arr) {
const array2 = arr.flat();
    return array2.reduce((total, num) => total + num, 0);
}

module.exports = { twoDArray };
