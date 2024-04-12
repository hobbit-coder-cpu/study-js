// 5장 반복 찾기

// 문자 하나 이상 찾기
// 문자나 집합에 속한 요소를 하나 이상 찾으려면 간단히 문자 뒤에 더하기 (+)를 붙인다.
// 더하기는 문자가 하나 이상일때. (1 ~ ) 
// +, []+

const text = `
Send personal email to ben@forta.com For questions
about a book use support@forta.com. Feel free to send
unsolicited email to spam@forta.com (would't it be
nice if it were that simple, huh?).
`

console.log("1.", text.match(/\w+@\w+\.\w+/g))

// 문자가 없는 경우나 하나 이상 연속하는 문자 찾기
// 메타 문자인 애스터리스크(=asterisk(*)) 사용

const text2 = `
Send personal email to ben@forta.com or
ben.forta@fotta.com. For questions about a
book use support@forta.com. If your message
is urgent try ben@urgent.forta.com. Feel
free to send unsolicited email to 
spam@forta.com(would't it be nice if
it were that simple, huh?).
`
console.log("2.", text2.match(/\w+[\w.]*@[\w.]+\.\w+/g))

// 문자가 없거나 하나인 문자 찾기.
// 메타 문자 물음표(?)
// 별표(*)와 달리 문자나 집합이 없거나 하나만 있는 경우만 일치. 
// 하나 이상은 일치하지 않는다.

const text3 = `
The URL is http://www.forta.com/, to connect
securely use https://www.forta.com/ instead.
`

console.log("3.", text3.match(/https?:\/\/[\w./]+/g)) // http:// ~ 또는 https:// ~

// 구간 지정하기
// 문자가 최대 몇개까지 일치하는지 설정할 수 있다.
// 일치하는 문자 수의 최솟값을 설정할 수 있다.
// 정확히 원하는 만큼만 일치하도록 문자 수를 정희할 수 있다.
// 구간은 중괄호({})안에 표시.

// 정확한 구간 찾기
const text4 = `
<BODY BGCOLOR="#336633" TEXT="#FFFFFF"
  MARGINWIDTH="0" MARGINHEIGHT="0"
  TOPMARGIN="0" LEFTMARGIN="0">
`
console.log("4.", text4.match(/#[a-fA-F0-9]{6}/g))

// 범위 구간 찾기
const text5 = `
4/8/03
10-6-2004
2/2/2
01-01-01
4-8/03
`

console.log("5.", text5.match(/\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}/g)) // 구분자가 달라도 체크되는 문제가 있는 정규식(4-8/03) 

// 과하게 일치하는 상황 방지하기
// 애스터리스트(*), 더하기(+) 같은 메타 문자가 탐욕적(greedy)이기 때문에
// 가능한한 가장 큰 덩어리를 찾으려 한다.

//수량자(quantifier)
// 탐욕적 수량자 VS 게으른 수량자
//      *        VS       *?  
//      +        VS       +?
//      {n,}     VS       {n,}?

const text6 = `
This offer is not available to customers
living in <B>AK</B> and <B>HI</B>.
`
console.log("6-1", text6.match(/<[bB]>.*<\/[bB]>/g))   // 탐욕적 수량자
console.log("6-2", text6.match(/<[bB]>.*?<\/[/bB]>/g))  // 게으른 수량자
