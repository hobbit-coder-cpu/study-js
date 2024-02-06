// 내장함수
// built-in function

// .length
// 문자 길이를 숫자로 반환
const str = 'Hello world!'
console.log(str.length)

// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지 부울린으로 반환
console.log(str.includes('Hello'))
const str2 = '나는 포켓몬 이야'
console.log(str2.includes('포켓몬'))

// .indexOf()
// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스, 숫자를 반환
// 없으면 -1(숫자) 반환

console.log(str.indexOf('world'))
console.log(str.indexOf('HEROPY'))

if(str.indexOf('HEROPY') === -1) {
    console.log('HEROPY가 없습니다')
}  

if(!str.includes('HEROPY')) {
    console.log('HEROPY가 없습니다')
}

// .padEnd(), .padStart()
// 대상 문자의 길이가 지정된 길이보다 작으면 
// 주어진 문자를 지정된 길이까지 끝 / 시작에 붙여 새로운 문자를 반환

const str3 = '1234567'
console.log(str3.padEnd(10, '0'))
console.log(str3.padStart(10, '0'))
console.log(str3)

const str4 = '1234567890123'
console.log(str4.padEnd(10, '0'))
console.log(str4.padStart(10, '0'))

// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환

const str5 = 'Hello, world?!'

console.log(str5.replace('Hello', 'Hi'))
console.log(str5.replace(/Hello/g, 'Hi'))

String.prototype.replaceAll = function(searchValue, replaceValue) {
    let str = this
    while(str.includes(searchValue)) {
        str = str.replace(searchValue, replaceValue)
    }

    return str
}

const str6 = 'Hello Hello Hello'
console.log(str6.replace('Hello', 'Hi'))
console.log(str6.replaceAll('Hello', 'Hi'))
console.log(str6)

// .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환

const str7 = 'Hello world!'
console.log(str7.slice(0, 5))
console.log(str7.slice(6, -1))
console.log(str7.slice(6))

// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환.

const str8 = 'Apple, Banana, Cherry'
console.log(str8.split(', '))
console.log(str8.split('').reverse().join(''))

// .toLowerCase() / toUpperCase(0)
// 대상 문자를 영어 소문자/대문자로 변환해 새로운 문자로 반환

const str9 = 'Apple, Banana, Cherry'

console.log(str9.toLowerCase())
console.log(str9.toUpperCase())
console.log(str9)

// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자 반환

const str10 = '   HEROPY   ' // space
const str11 = '     HEROPY      ' // tab
console.log(str10)
console.log(str10.trim())
console.log(str11)
console.log(str11.trim())




