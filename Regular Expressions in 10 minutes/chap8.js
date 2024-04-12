// 역참조(backreference) 사용하기
// 하위 표현식의 중요한 표현법 중 하나.


// 역참조 이해하기
// 역참조는 정규 표현식 패턴으로 앞서 일치한 부분을 다시 가리킨다.
const text = `
<BODY>
  <H1>Welcome to my Homepage</H1>
  Content is divided into two sections:<BR>
  <H2>ColdFusion</H2>
  Information about Macromedia ColdFusion.
  <H2>Wireless</H2>
  Information about Bluetooth, 802.11, and more.
  <H2>This is not valid HTML</H3>
</BODY>
`
console.log("1-1.", text.match(/<[hH][1-6]>.*?<\/[hH][1-6]>/g)) // 잘못된 Heading 요소도 함께 찾는다.
console.log("1-2.", text.match(/<([hH][1-6])>.*?<\/\1>/g))

// 치환 작업 수행하기
const text2 = `
Hello, ben@forta.com is my email address.
`
console.log(text2.replace(/(\w+[\w.]*@[\w\.]+\.\w+)/g, `<A HREF="mailto:$1">$1</A>`))

const text3 = `
313-555-1234
248-555-9999
810-555-9000
`
console.log(text3.replace(/(\d{3})(-)(\d{3})(-)(\d{4})/g, "($1) $3-$5"))

