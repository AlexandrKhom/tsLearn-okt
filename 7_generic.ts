const arrOfNum: Array<number> = [1,2,3,4,5]
const arrOfStr: Array<string> = ['ander', 'alex', 'hello']

function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}

console.log(reverse(arrOfNum))
console.log(reverse(arrOfStr))





