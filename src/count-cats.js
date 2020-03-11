module.exports = function countCats(arrI) {
    let sum = 0;
    for (let i = 0; i < arrI.length; i++) {

        for (let j = 0; j < arrI[i].length; j++) {
            if (arrI[i][j] === "^^") sum++;
        }
    }
    return sum;
};