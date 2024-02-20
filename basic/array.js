// .length
// 배열이 길이(숫자)를 반환

const arr = ['A', 'B', 'C']
console.log(arr.length)

// .at()
// 대상 배열을 인덱싱
// 음수 값 사용시 뒤에서부터 인덱싱

console.log(arr[0])
console.log(arr.at(0))

console.log(arr[arr.length - 1])
console.log(arr.at(-1)) // 
console.log(arr[-1])    // undefined

// .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환

const arr1 = ['a', 'b', 'c']
const arr2 = ['d', 'e', 'f']
// const arr3 = arr1.concat(arr2)
const arr3 = [...arr1, ...arr2]     // 전개연산자(Spread syntax)

console.log(arr1)
console.log(arr2)
console.log(arr3)

// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참을 반환하는지 확인

const arr4 = [1, 2, 3, 4]
const isValid = arr4.every(item => item < 5)
console.log(isValid)

// .some()
// 대상 배열의 어느 1개의 요소라도 콜백 테스트에서 참을 반환하는지 확인

console.log(arr4.some(item => item % 2 === 0))

// .filter()
// 주어진 콜백 테스트를 통과하는 모든 요소를 새로운 배열로 반환
// 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환

const numbers = [1, 20, 7, 9, 104, 0, 58]
const filteredNumbers = numbers.filter(number => number < 30)
console.log(filteredNumbers)

const users = [
    {name: 'Neo', age: 85},
    {name: 'Amy', age: 22},
    {name: 'Lewis', age: 11}
]
const adults = users.filter(u => u.age >= 19) // 배열 요소가 객체이므로 얕은 복사 발생
console.log(adults)

adults[0].age = 1000

console.log(adults)
console.log(users)

// .find()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환
const arr5 = [5, 8, 130, 12, 44]
const foundItem = arr5.find(item => item > 10)

console.log(foundItem)

Array.prototype.findAll = function (predicate) {
    return this.filter(predicate)
}

const foundUser = users.find(user => user.name === 'Amy')
console.log(foundUser)

const foundUsers = users.findAll(user => user.age >= 20)
console.log(foundUsers)

// .findIndex()
// 대상 배열에서 콜배 테스트를 통과하는 첫 번째 요소의 인덱스를 반환

            //0, 1,  2,   3, 4
const arr6 = [5, 8, 130, 12, 44]

const index = arr6.findIndex(item => item > 10)
console.log(index)

// .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열을 생성
// 깊이의 기본값은 1

const arr7 = [1, 2, [3, 4, [5, 6, [7, 8]]]]
console.log(arr7.flat(1)) // = .flat(1)
console.log(arr7.flat(2))
console.log(arr7.flat(Infinity))

// .forEach()
// 대상 배열의 길이만큼 주어진 콜백을 실행
const arr8 = ['A', 'B', 'C']

arr8.forEach(item => console.log(item))

for(let i = 0; i < arr8.length; i+=1) {
    console.log(arr8[i])
}


// .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 부울린 반환

const arr9 = [1, 2, 3]
console.log(arr9.includes(2))

const fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits.includes('Apple'))
console.log(fruits.includes('cherry'))

const users2 = [
{name: 'Neo', age: 85},
{name: 'Amy', age: 22} ,
{name: 'Lewis', age:11 }
]

console.log(users2.includes({name: 'Neo', age: 85}))

const neo = users2[0]
console.log(users2.includes(neo))

// 자료형의 2가지 타입 : 원시형 / 참조형(객체, 배열, 함수)

// .join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환

const arr10 = ['Apple', 'Banana', 'Cherry']
console.log(arr10.join()) // = arr10.join(',')
console.log(arr10.join(', '))
console.log(arr10.join(' / '))

// .map()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고 콜백의 밤환 값을 모아 
// 새로운 배열을 반환

const numbers2 = [1, 2, 3, 4]
const newNumbers = numbers2.map(item => item * 2)
console.log(newNumbers)

const users3 = [
    {name: 'Neo', age: 85},
    {name: 'Amy', age: 22},
    {name: 'Lewis', age: 11}
]

const newUsers = users3.map(user => 
    ({
        ...user,
        isValid: true,
        email: null
    })
)

console.log(newUsers)

// .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
// 대상 배열 원본이 변경됨

const fruits2 = ['Apple', 'Banana', 'Cherry']
console.log(fruits2.pop())
console.log(fruits2)

// .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// 대상 배열 원복이 변경됨

const fruits3 = ['Apple', 'Banana', 'Cherry']
const newLength = fruits3.push('Orange')
console.log(newLength)
console.log(fruits3)

fruits3.push('Mango', 'Strawberry')
console.log(fruits3)

// .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜밸의 반환값을 반환
// 각 콜백의 반환 값은 다음 콜백으로 전달

const numbers3 = [1, 2, 3, 4, 5, 6]
const sum = numbers3.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

const users4 = [
    {name: 'Neo', age: 85},
    {name: 'Amy', age: 22},
    {name: 'Lewis', age: 11}
]

// 총 나이 계산
const totalAge = users4.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge)
console.log((totalAge / users4.length).toFixed(1))

// 모든 이름 추출
const names = users4
    .reduce((names, user) => {
        names.push(user.name)
        return names
    }, [])
    .join(', ') // method chaining

console.log(names)

// .reverse()
// 대상 배열의 순서를 반전
// 대상 배열 원본이 변경

const arr11 = [1, 2, 3]
const reverse = arr11.reverse()

console.log(arr11)
console.log(reverse)

// .shift()
// 대상 배열에서 첫번째 요소를 제거하고 제거된 요소 반환
// 대상 배열 원본이 변경

const arr12 = [1, 2, 3]
console.log(arr12.shift())
console.log(arr12)

// .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환
// 두 번째 인수 직전까지만 추출, 두번째 인수 생략하면 대상 배열의 끝까지 추출

const arr13 =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr13.slice(0, 3))
console.log(arr13.slice(4, -1))
console.log(arr13.slice(4))
console.log(arr13)

// .every / .some()
// 대상 배열의 (모든 요소가 / 어떤 요소라도) 콜백 테스트를 통과하는지 확인
const arr14 = [1, 2, 3, 4]
const isValid2 = arr14.some(item => item > 4)
console.log(isValid2)

// .sort()
// 대상 배열을 콜백의 반환(음수, 양수, 0) 값에 따라 정렬
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬
// 대상 원본이 변경

const numbers4 = [4, 17, 2, 103, 3, 1, 0]

numbers4.sort()
console.log(numbers4)

numbers4.sort((a, b) => a - b)
console.log(numbers4)

numbers4.sort((a, b) => b - a)
console.log(numbers4)

const users5 = [
    {name: 'Neo', age: 85},
    {name: 'Amy', age: 22},
    {name: 'Lewis', age: 11}
]

users5.sort((a, b) => a.age - b.age)
console.log(users5)


users5.sort((a, b) => b.age - a.age)
console.log(users5)

// .splice()
// 대상 배열에 요소를 추가 / 삭제 / 교체
// 대상 배열 원본이 변경 

const arr15 = ['a', 'b', 'c']
arr15.splice(2, 0, 'x') // 3번째 자리에 x 삽입(추가)
console.log(arr15)

arr15.splice(1, 1) // 2번째 자리부터 1개의 요소를 삭제
console.log(arr15)

arr15.splice(2, 1, 'y') 
console.log(arr15)

arr15.splice(2, 0, ['2', '3'])
console.log(arr15)

// .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환
// 대상 배열 원본이 변경

const arr16 = ['a', 'b', 'c']
console.log(arr16.unshift('x'))
console.log(arr16)

// Array.from()
// 유사 배열(Array-like)을 실제 배열로 반환

const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
console.log(arrayLike.constructor == Array)
console.log(arrayLike.constructor == Object)

// arrayLike.forEach(item => console.log(item) // error
Array.from(arrayLike).forEach(item => console.log(item))

// Array.isArray()
// 배열 데이터인지 확인

const array = ['a', 'b', 'c']
const arrayLike2 = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}

console.log(Array.isArray(array))
console.log(Array.isArray(arrayLike2))

// Object.assign()
// 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상 객체를 
// 반환

const target1 = {a: 1, b: 2}
const target2 = {a: 1, b: 2}
const src1 = {b: 3, c: 4}
const src2 = {c: 5, d: 6}
const result1 = Object.assign(target1, src1, src2)
const result2 = Object.assign(target2, src2, src1)
const result3 = {
    ...target1,
    ...src1,
    ...src2
}
// const result4 = Object.assign({}, target1, src2, src1)


console.log(src1)
console.log(src2)

console.log(target1)
console.log(result1)

console.log(target2)
console.log(result2)

target2.a = 1000

console.log(target2)
console.log(result2)

console.log(result3)

// Object.entries()
// 주어진 객체의 각 속성과 값을 하나의 배열[k, v]로 만들어 요소로 추가한 
// 2차원 배열을 반환

const u = {
    name: 'Heropy',
    age: 85,
    isValid: true,
    email: 'thesecon@gmail.com',
}

const array2d = Object.entries(u)

for(const [k, v] of array2d) {
    console.log(k, v)
}

// Object.keys() / Object.values()
// 주어진 객체의 속성이름 / 값을 나열한 배열을 반환

const user2 = {
    name: 'Heropy',
    age: 85,
    isValid: true,
    email: 'thesecon@gmail.com',
}

console.log(Object.keys(user2))
console.log(Object.values(user2))





