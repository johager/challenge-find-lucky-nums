//
//  Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)
//
//  You can trust that this function will never be called with n < 0 or n > 10.
//

// Write your code below this line.

function luckyNum(n){
    let luckyNum = []
    while (luckyNum.length < n) {
        let num = Math.floor(Math.random() * 10)
        if (num > 0 && !luckyNum.includes(num)) {
            luckyNum.push(num)
        }
    }
    return luckyNum
}

console.log(luckyNum(5))
