// 정적 메소드 (Static methods)
// prototype 메소드와의 차이

class User {
  constructor(first, last) {
      this.firstName = first
      this.lastName = last
  }

  // prototype 메소드 (인스턴스에서 사용)
  getFullName() {
      return `${this.firstName} ${this.lastName}`
  }

  // 정적 메소드 (클래스에서 사용)
  static isUser(user) {
      if(user instanceof User)
          return true

      return false
  }
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')




const o = {
  firstName: 'Jungwon',
  lastName: 'Min'
}

console.log(User.isUser(o))
console.log(User.isUser(heropy))
console.log(User.isUser(neo))
