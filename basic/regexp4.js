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
동해물과 백두산이 마르고 닳도록
abbcccddddeeeee
`



// ^ab    | 줄(Line) 시작에 있는 ab와 일치
console.log(str.match(/^h.../gm)) // 각 줄마다 맨처음이 h 인지 (^ + 옵션 m)
                                  // . 는 임의 문자 1개를 의미

// ab$    | 줄(Line) 끝에 있는 ab와 일치
console.log(str.match(/\.com$/gm))  // \. 문자로서의 점 + com이 각 줄(옵션 m)에 있는 경우 
console.log(str.match(/...\.com$/gm))

// .      | 임의의 한 문자와 일치

// a|b    | a 또는 b와 일치
console.log(str.match(/fox|dog|\.com/g))
console.log(/fox|dog/g.test(str))
console.log(str.match(/http|https/g)) // 원하는건 http 나 https가 나오길 바라지만 |로는 겹치는 부분만 나옴 
                                      // 이럴때 필요한게 /?/

// ab?    | b가 없가나 b와 일치 
console.log(str.match(/https?/g))

// {3}    | 3개 연속 일치
// {3,}   | 3개 이상 연속 일치
// {3,5}  | 3개 이상 5개 이하 연속 일치
console.log(str.match(/\d{3}/g))
console.log(str.match(/\d{3}-\d{3,4}-\d{4}/g))

// +      | 1회 이상 연속 일치,  같은 의미의 패턴: /{1,}/
console.log(str.match(/\d{1,}/g))



// \w     | 63개 문자(Word, 대소영문52개 + 숫자 10개 + _)에 일치
// \d     | 숫자(Digit)에 일치
// \s     | 공백(Space, Tab 등)에 일치

