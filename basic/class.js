// ES6 classes

function FUser(first, last) {
    this.firstName = first
    this.lastName = last
}
FUser.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

const fheropy = new FUser('Heropy', 'Park')
const fneo = new FUser('Neo', 'Anderson')

console.log(fheropy)
console.log(fheropy.getFullName())
console.log(fneo.getFullName())

class User {
    // firstName
    // lastName
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const cheropy = new User('Heropy', 'Park')
const cneo = new User('Neo', 'Anderson')

console.log(cheropy)
console.log(cneo.getFullName())