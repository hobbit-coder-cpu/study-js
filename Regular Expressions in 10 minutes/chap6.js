// 위치 찾기

// 단어 경계 지정하기
// \b : boundary
// \b는 일반적으로 단어의 일부로 사용하는 문자(\w)와 그외 문자(\W) 사이에 있는 위치와 일치시킨다.
const text = `
The cat scattered his food all over the room
`

console.log("1-1", text.match(/cat/g))     // The [cat] s[cat]tered
console.log("1-2", text.match(/\bcat\b/g)) // The [cat]
console.log("1-3", text.match(/\Bcat\B/g)) // The cat s[cat]tered his

// 문자열 경계 정의하기
// 단어 경계는 단어의 위치(단어의 시작, 단어의 마지막, 던어 전체 등)를 기반으로 위치를 찾는다.
// 문자열 경계는 전체 문자열의 시작이나 마지막 부분과 패턴을 일치시키고자 할 때 사용
//
// 메타 문자 캐럿(^)으로 문자열의 시작을, 달러 기호($)로 문자열의 마지막을 나타낸다.
// 캐럿(^) 사용법
// 1. 집합을 의미하는 메타문자인 대괄호([])안에 사용시 부정을 뜻함. 사용 예) [^0-9]
// 2. 집합 밖에서는 패턴 시작 부분에 사용하면 문자열의 시작 부분과 일치. 사용 예) ^\s
//
// 달러($) 사용법
// 1. 패턴 마지막 부분에 (뒤에) 사용. 사용 예) \s*$

const text2 = `
This is bad, real bad!
<?xml version="1.0" encoding="UTF-8" ?>
<wsdl:definitions targetNamespace="http://tips.cf"
xmlns:impl="http://tips.cf" xmlns:intf="http://tips.cf"
xmlns:apachesoap="http://xml.apache.org/xml-soap"
`

console.log("2-1.", text2.match(/<\?xml.*\?>/g))      // 문자열의 첫 시작이 <?xml ~ ?>로 시작해야한다는 조건을 찾지 못함.
console.log("2-1.", text2.match(/^\s*<\?xml.*\?>/g))  // \s : 공백. 


const text3 = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
This is bad. real bad
`

console.log("3-1", text3.match(/<\/html>/g))      // 문자열의 마지막이 </html> 끝나야한다는 조건을 찾지 못함.
console.log("3-2", text3.match(/<\/html>\s*$/g))  // $는 문자 뒤에.

// 다중행(multiline) 모드 사용하기.
// 문자열의 시작과 문자열의 끝을 의미하는 메타문자의 동작을 바꾸는 특수 메타 문자(?m)
// ?m 를 사용하면 
// 캐럿(^)은 문자열의 시작이나 줄바꿈 다음(새로운 줄)에 나오는 문자열의 시작과 일치 시킨다.
// 달러($)는 문자열의 마지막이나 줄바꿈 다음에 나오는 문자열의 마지막과 일치 시킨다.

const text4 = `
<SCRIPT>
function doSpellCheck(form, field) {
  // Make sure not empty
  if (field.value == '') {
    return false;
  }
  // Init
  var windowName = 'spellWindow';
  var spellCheckURL = 'spell.cfm?formname=comment&fieldname='+field.name;

    // Done
    return false;
}
</SCRIPT>
`
console.log("4-1", text4.match(/^\s*\/\/.*?$/g))      // 다중행 지원을 하지 않으면 찾을수 없다.
console.log("4-2", text4.match(/^\s*\/\/.*?$/gm))     // m 옵션 사용
