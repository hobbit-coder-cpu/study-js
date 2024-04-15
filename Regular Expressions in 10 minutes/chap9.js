// 전방탐색(lookahead)과 후방탐색
// ** 자바스크립트는 후방탐색을 지원하지 않는다.
//

const text = `
<HEAD>
<TITLE>Ben Forta's Homepage</TITLE>
</HEAD>
`

console.log("1.", text.match(/<[tT][iI][tT][lL][eE]>.*?<\/[tT][iI][tT][lL][eE]>/g))
console.log("1.", text.match(/<title>.*?<\/title>/gi))


// 전방탐색 - 앞으로 찾기
// 전방탐색 패턴은 일치 영역을 발견해도 그 값을 반환하지 않는 패턴을 말한다.
// 패턴 구문은 ?= 으로 시작하고 등호(=) 다음에 일치할 텍스트가 오는 하위 표현식 (?=)

const text2 = `
http://www.forta.com/
https://mail.forta.com/
ftp://ftp.forta.com/
`

console.log("2.", text2.match(/.+(?=:)/g))  // 콜론(:) 앞에 있는 문자를 탐색


