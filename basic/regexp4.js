// 정규 표현식(RegExp, Regular Expression)

const str = `
010-1234-5678
010-234-3424
thesecon@gmail.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록 하1느님
abbcccddddeeeee
___
`;

// ^ab    | 줄(Line) 시작에 있는 ab와 일치
console.log(str.match(/^h.../gm)); // 각 줄마다 맨처음이 h 인지 (^ + 옵션 m)
// . 는 임의 문자 1개를 의미

// ab$    | 줄(Line) 끝에 있는 ab와 일치
console.log(str.match(/\.com$/gm)); // \. 문자로서의 점 + com이 각 줄(옵션 m)에 있는 경우
console.log(str.match(/...\.com$/gm));

// .      | 임의의 한 문자와 일치

// a|b    | a 또는 b와 일치
console.log(str.match(/fox|dog|\.com/g));
console.log(/fox|dog/g.test(str));
console.log('[a|b]', str.match(/http|https/g)); // 원하는건 http 나 https가 나오길 바라지만 |로는 겹치는 부분만 나옴
// 이럴때 필요한게 /?/

// ab?    | b가 없가나 b와 일치
console.log(str.match(/https?/g));

// {3}    | 3개 연속 일치
// {3,}   | 3개 이상 연속 일치
// {3,5}  | 3개 이상 5개 이하 연속 일치
console.log(str.match(/\d{3}/g));
console.log(str.match(/\d{3}-\d{3,4}-\d{4}/g));

// +      | 1회 이상 연속 일치,  같은 의미의 패턴: /{1,}/
console.log(str.match(/\d{1,}/g));

// \w       | 63개 문자(Word, 대소영문52개 + 숫자 10개 + _)에 일치
// \b       | 63개 문자에 일치하지 않는 문자 경계(Boundary)
// \d       | 숫자(Digit)에 일치
// \s       | 공백(Space, Tab 등)에 일치

// [ab]     | a 또는 b
// [a-z]    | a부터 z사이의 문자 구간에 일치(영어 소문자)
// [A-Z]    | A부터 Z사이의 문자 구간에 일치(영어 대문자)
// [0-9]    | 0부터 9사이의 문자 구간에 일치(숫자)
// [가-힣]  | 가부터 힣 사이의 문자 구간에 일치(한글)

console.log(str.match(/[foxdog]/g));
// console.log(str.match(/f|o|x|d|o|g/g));

console.log(str.match(/[a-z]{1,}/g));
//console.log(str.match(/[a-z]+/g))

console.log(str.match(/[a-zA-Z]+/g));

console.log(str.match(/[가-힣0-9]{3}/g));

console.log(str.match(/\w+/g));

console.log(str.match(/\b[0-9]+\b/g));

// (?:)     | 그룹 지정
// (?=)     | 앞쪽 일치(Lookhaed)
// (?<=)    | 뒤쪽 일치(Lookbehind)

console.log(str.match(/https?:\/\/(?:\w+\.?)+\/?/g)); // (?:\w+\.?)  \w : 단어 이면서 1개이상, \.? : .이 있을수도 없을수도 있는 그룹
console.log(str.match(/.+(?=과)/));
console.log(str.match(/(?<=과).+/));

console.log(str.match(/[0-9]{3}-[0-9]{3,4}-[0-9]{4}/g));
console.log(str.match(/\d{3}-\d{3,4}-\d{4}/g));

console.log(str.match(/\w+@\w+\.\w+/g));
