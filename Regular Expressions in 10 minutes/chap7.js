// 하위 표현식(Subexpression) 사용하기


// 하위 표현식으로 묶기
// 하위 표현식은 큰 표현식 안에 속한 일부 표현식을 한 항목으로 다루도록 한데 묶은 것이다.
// 괄호( 여는 괄호((), 닫는 괄호()) )는 메타 문자

const text = `
Hello, my name is Ben&nbsp;Forta, and I am
the author of books on SQL, ColdFusion, WAP,
Windows&nbsp;&nbsp;2000, and other subjects.
`

console.log("1-1.", text.match(/&nbsp;{2,}/g))  // (;) 에 대해서만 구간 일치. 따라서 의도한 &nbsp;&nbsp;를 찾지못함
console.log("1-2.", text.match(/(&nbsp;){2,}/g))  // (()) 하위 표현식을 이용

const text2 = `
Pinging hog.forta.com [12.159.46.200]
Pinging hog2.forta.com [012.234.600.22] - bad ip address
with 32 bytes of data:
`
console.log("2-1.", text2.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g)) // 유효하지 않은 아이피 주소도 찾음. #1
console.log("2-2.", text2.match(/(\d{1,3}\.){3}\d{1,3}/g)) // 유효하지 않은 아이피 주소도 찾음. #1
console.log("2-3.", text2.match(/((2[0-5][0-5]|1[1-9]\d|[1-9]\d|\d{1})\.){3}(2[0-5][0-5]|1[1-9]\d|[1-9]\d|\d{1})/g))
