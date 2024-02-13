// #1 객체 구조 분해 할당

const user = {
    firstName: 'jungwon',
    lastName: 'min'
}

const {firstName, lastName} = user
console.log(firstName, lastName)

const {firstName: F, lastName: L } = user
console.log(F, L)
