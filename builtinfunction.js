// 내장함수
// built-in function

// .length
// 문자 길이를 숫자로 반환
const str = 'Hello world!';
console.log(str.length);

// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지 부울린으로 반환
console.log(str.includes('Hello'));
const str2 = '나는 포켓몬 이야';
console.log(str2.includes('포켓몬'));

// .indexOf()
// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스, 숫자를 반환
// 없으면 -1(숫자) 반환

console.log(str.indexOf('world'));
console.log(str.indexOf('HEROPY'));

if (str.indexOf('HEROPY') === -1) {
  console.log('HEROPY가 없습니다');
}

if (!str.includes('HEROPY')) {
  console.log('HEROPY가 없습니다');
}

// .padEnd(), .padStart()
// 대상 문자의 길이가 지정된 길이보다 작으면
// 주어진 문자를 지정된 길이까지 끝 / 시작에 붙여 새로운 문자를 반환

const str3 = '1234567';
console.log(str3.padEnd(10, '0'));
console.log(str3.padStart(10, '0'));
console.log(str3);

const str4 = '1234567890123';
console.log(str4.padEnd(10, '0'));
console.log(str4.padStart(10, '0'));

// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환

const str5 = 'Hello, world?!';

console.log(str5.replace('Hello', 'Hi'));
console.log(str5.replace(/Hello/g, 'Hi'));

String.prototype.replaceAll = function (searchValue, replaceValue) {
  let str = this;
  while (str.includes(searchValue)) {
    str = str.replace(searchValue, replaceValue);
  }

  return str;
};

const str6 = 'Hello Hello Hello';
console.log(str6.replace('Hello', 'Hi'));
console.log(str6.replaceAll('Hello', 'Hi'));
console.log(str6);

// .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환

const str7 = 'Hello world!';
console.log(str7.slice(0, 5));
console.log(str7.slice(6, -1));
console.log(str7.slice(6));

// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환.

const str8 = 'Apple, Banana, Cherry';
console.log(str8.split(', '));
console.log(str8.split('').reverse().join(''));

// .toLowerCase() / toUpperCase(0)
// 대상 문자를 영어 소문자/대문자로 변환해 새로운 문자로 반환

const str9 = 'Apple, Banana, Cherry';

console.log(str9.toLowerCase());
console.log(str9.toUpperCase());
console.log(str9);

// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자 반환

const str10 = '   HEROPY   '; // space
const str11 = '     HEROPY      '; // tab
console.log(str10);
console.log(str10.trim());
console.log(str11);
console.log(str11.trim());

// .toFixed()
// 숫자를 지정한 고정 소수점 표기까지 표현하는 문자를 반환
// 반올림?
const num = 3.1438493489;

console.log(num.toFixed(4));
console.log(parseFloat(num.toFixed(4)));

// .toLocalString()
// 숫자를 현지 언어 형식의 문자로 반환
const num2 = 10000000;
console.log(num2.toLocaleString());
console.log(`${num2.toLocaleString()}원`);

// Number.isInteger()
// 숫자가 정수인지에 대한 결과를 부울린으로 반환

const num3 = 123; // integer
const pi = 3.14; // float

console.log(Number.isInteger(num3));
console.log(Number.isInteger(pi));

// Number.isNaN()
// 주어진 값이 NaN 인지에 대한 결과를 부울린으로 반환

const num4 = NaN;
const num5 = 123;
const str12 = 'Hello world';
const nul = null;

console.log(Number.isNaN(num4));
console.log(Number.isNaN(num5));
console.log(Number.isNaN(str12));
console.log(Number.isNaN(num));

// Number.parseInt() 또는 parseInt()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환

const str13 = '3.143232323';
const num6 = 3.143232323;

console.log(parseInt(str13, 10));
console.log(parseInt(num6, 10));

Number.isFloat = function (num) {
  if (typeof num !== 'number') return false;

  if (Number.isInteger(num)) return false;

  return num % 1 !== 0;
};

console.log(Number.isFloat(num5));
console.log(Number.isFloat(num6));

// Number.parseFloat() 또는 parseFloat()
// 주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환
const str14 = '3.1423144';
const num7 = 3.1423144;

console.log(parseFloat(str14));
console.log(parseFloat(num7));

// Math.abs()
// 주어진 숫자의 절대값을 반환

console.log(Math.abs(2));
console.log(Math.abs(-2));

// Math.ceil()
// 주어진 숫자를 올림해 정수를 반환
console.log(Math.ceil(3.14534324));

// Math.floor()
// 주어진 숫자를 내림해 정수를 반환
console.log(Math.floor(3.14534324));

// Math.round()
// 주어진 숫자를 반올림해 정수를 반환
console.log(Math.round(3.54534324));

Math.roundFloat = function (num, fixed) {
  if (typeof num !== 'number') return NaN;

  let tmp = num * Math.pow(10, fixed);
  console.log('tmp', tmp);
  tmp = Math.round(tmp);
  console.log('round tmp', tmp);
  return tmp / Math.pow(10, fixed);
};

console.log(`Math.roundFloat: ${10.23656} ${Math.roundFloat(10.23656, 2)}`);

// Math.max()
// 주어진 숫자중 가장 큰 숫자를 반환
console.log(Math.max(1, 20, 4));

// Math.min()
// 주어진 숫자중 가장 작은 숫자를 반환
console.log(Math.min(1, 20, 4, 0 - 10));

// Math.pow()
// 주어진 숫자의 거듭제곱 한 값 반환
console.log(Math.pow(2, 4));
console.log(Math.pow(10, 3));

// Math.random()
// 숫자 0이상 1미만의 숫자를 반환
console.log(Math.random());

Math.randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log(Math.randomInt(10, 20));

// Date
const date = new Date()
console.log(date)

// month 는 zero-based
const d1 = new Date(2022, 11, 17, 12, 57, 30)
console.log(d1)

const d2 = new Date('Wed Feb 07 2024 08:25:04 GMT+0900 (한국 표준시)')
console.log(d2)
console.log(d2.getFullYear())

// .getFullYear() / .setFullYear()
// 날짜 인스턴스의 연도를 반환하거나 지정

const date2 = new Date()
console.log(date2.getFullYear())

date2.setFullYear(2024)
console.log(date2.getFullYear())
console.log(date2)

// .getMonth() / .setMonth()
// 날짜 인스턴스의 월을 반환하거나 지정
// 0부터 시작(zero-based numbering)
const date3 = new Date()

console.log(date3.getMonth())

date3.setMonth(0)
console.log(date3.getMonth())
console.log(date3)

// .getDate() / .setDate()
// 날짜 인스턴스의 일을 반환하거나 지정

const date4 = new Date()

console.log(date4.getDate())
date4.setDate(25)
console.log(date4.getDate())
console.log(date4)

// .getHours() / .setHours()
// 날짜 인스턴스의 시간을 반환하거나 지정

const date5 = new Date()
console.log(date5.getHours())
date5.setHours(17)
console.log(date5)

// .getMinutes() / .setMinutes()
// .getSeconds() / .setSeconds()

// .getDay()
// 날짜 인스턴스의 요일을 반환
const date6 = new Date()
const day = date6.getDay()

// .getTime() / .setTime()
/// 1970-01-01 00:00:00 (유닉스타임)부터 경과한, 
// 날짜 인스턴스의 밀리초(ms)로 반환하거나 지정
const date7 = new Date()
console.log(date7.getTime())

Date.prototype.isAfter = function(date) {
    const a = this.getTime()
    const b = date.getTime()
    return a > b
}

const d3 = new Date('Wed Feb 07 2024 08:25:04 GMT+0900 (한국 표준시)')
const d4 = new Date('Wed Feb 07 2025 08:25:04 GMT+0900 (한국 표준시)')

console.log(d3.isAfter(d4))
console.log(d4.isAfter(d3))

// Date.now()
// 1970-01-01 00:00:00 (유닉스 타임)부터 경과한 
// 메소드가 호출될 때의 밀리초(ms) 로 반환

const time = new Date().getTime()
console.log(Date.now())
console.log(time)

setTimeout(() => {
    console.log(Date.now())
    console.log(time)
},1000)