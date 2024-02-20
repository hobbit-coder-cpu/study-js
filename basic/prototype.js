// prototype

// 예제 #1
// const fruits = ['Apple', 'Banana', 'Cherry']
const fruits = new Array('Apple', 'Banana', 'Cherry');
// fruits.push('Apple')
// fruits.push('Banana')
// fruits.push('Cherry')

console.log(fruits)
console.log(fruits.length)
console.log(fruits.includes('Banana'))
console.log(fruits.includes('Orange'))

Array.prototype.heropy = function () {
    console.log(this)
}

fruits.heropy()

const arr = []
arr.heropy()

// 예제 #2
// const heropy = {
//     firstName: 'Heropy',
//     lastName: 'Park',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const neo = {
//     firstName: 'Neo',
//     lastName: 'Anderson'
// }

// console.log(heropy.getFullName())
// console.log(heropy.getFullName.call(neo))
// console.log(heropy.getFullName.apply(neo))
// console.log(heropy.getFullName.bind(neo)())

// 예제 #3
function User(first, last) {
    this.firstName = first
    this.lastName = last    
    // User.prototype.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`
    // }
}
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')

console.log(heropy)
console.log(neo)
console.log(heropy.getFullName())
console.log(neo.getFullName())


