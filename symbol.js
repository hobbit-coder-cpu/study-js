import heropy from './heropy.js'
import { birthKey, emailsKey } from './keys.js'
// 심볼(Symbol)

// 변경이 불가한 데이터, 유일한 식별자를 만들어 데이터를 보호하는 요도로 사용할 수 있다

// Symbol('설명')
// 설명은 단순 디버깅을 우한 용도일 뿐, 심볼 값과는 관계가 없다.

const sKey = Symbol('Hello!')
const user = {
  key: '일반 정보!',
  [sKey]: '민감한 정보!'
}

console.log(user.key)
console.log(user['key'])
console.log(user[sKey])
console.log(user[Symbol('Hello!')]) // undefined
console.log(sKey)

for(const i in user) {
  console.log(i)
}

for(const i of Object.keys(user)) {
  console.log(i)
}

console.log(heropy)

console.log(heropy[birthKey])
console.log(heropy[emailsKey])

