// this
// 일반 함수의 this는 호출 위체에서 정의
// 화살표 함수의 this는 자신이 선언된 함수(레시컬) 범위에서 정의
// 렉시컬이란 함수가 동작할수 있는 유효한 범위를 의미


// 예제 #1
const user = {
    firstName: 'Heropy',
    lastName: 'Park',
    age: 85,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    getFullName2: () => {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.getFullName()) // user 객체에 연결(this)
console.log(user.getFullName2()) // getFullName2함수를 감싸는 함수의 this(global)

// 예제 #2
function user2() {
    this.firstName = 'Neo'
    this.lastName = 'Anderson'

    return {
        firstName: 'Heropy',
        lastName: 'Park',
        age: 85,
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`
        },
        getFullName2: () => {
            return `${this.firstName} ${this.lastName}`
        }
    }
}

const u = user2()
console.log(u.getFullName())
console.log(u.getFullName2())

// 예제 #3 (call, bind)
const lewis = {
    firstName: 'Lewis',
    lastName: 'Yang'
}

console.log(u.getFullName.call(lewis));
const f = u.getFullName.bind(lewis);
console.log(f())

// 예제 #4
const timer = {
    title: 'TIMER!',
    timeout() {
        console.log(`timeout: ${this.title}`)
        setTimeout(function () {
            console.log(`setTimeout: ${this.title}`)    
        }, 1000)
    },
    timeout2() {
        console.log(`timeout2: ${this.title}`)
        setTimeout(() => 
            console.log(`setTimeout2: ${this.title}`)    
        , 1000)
    }

}

timer.timeout()
timer.timeout2()
