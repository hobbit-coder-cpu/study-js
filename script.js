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

const numbers3 = [1, 2, 3]
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)




