// Write your code below this line.

function luckyNum(n){

    let luckyNum = []
    while (luckyNum.length < n) {
        let num = Math.floor(Math.random() * 10)
        if (!luckyNum.includes(num)) {
            luckyNum.push(num)
        }
    }
    return luckyNum
}

console.log(luckyNum(5))
