// Getter Setter

class User {
  // firstName
  // lastName
  constructor(first, last) {
      this.firstName = first
      this.lastName = last
  }

  get fullName() {
      console.log('Getting full name!')
      return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
      console.log(value)
      ;[this.firstName, this.lastName] = value.split(' ')
  }

}

const heropy = new User('Heropy', 'Park')

// Getter
console.log(heropy)
console.log(heropy.fullName)

// Setter
heropy.fullName = 'Jungwon Min'
console.log(heropy.fullName)




