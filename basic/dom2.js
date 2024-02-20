// #1 document.getElementById()

// HTML `id` 속성 값으로 검색한 요소를 반환
// 여러 요소가 검색되면 가장 먼저 찾은 요소만 반환
// 검색 결과가 없으면 `null`을 반환

const el = document.getElementById('child2')
console.log(el)

// #2 document.querySelector()
// CSS 선택자 로 검색한 요소를 하나 반환
// 여러 요소가 검색되면 가장 먼저 찾은 요소만 반환
// 검색 결과가 없으면, null 반환

const el2 = document.querySelector('.child:first-child') // document.querySelector('.child:nth-child(3)')
console.log(el2)

// #3 document.querySelectorAll()

// CSS 선택자로 검색한 모든 요소를 NodeList로 반환
// NodeList 객체는 .forEach() 를 사용할 수 있다. 

const nodeList = document.querySelectorAll('.child')
console.log(nodeList)
nodeList.forEach(el => console.log(el.textContent))
console.log(`nodeList is array?: ${Array.isArray(nodeList)}`)
console.log(Array.from(nodeList).reverse())

// N.parentElement 
// E.parentElement

const el3 = document.querySelector('.child')
console.log(el3.parentElement)

// #4 E.closest()
// 자산을 포함한 조상 요소 중 'CSS 선택자'와 일치하는 가장 가까운 요소를 반환
// 요소를 찾지 못하면 null 반환

const el4 = document.querySelector('.child')

console.log(el4)
console.log(el4.closest('div'))
console.log(el4.closest('body'))
console.log(el4.closest('.hello'))

// #5 N.previousSibling / N.nextSibling
const el5 = document.querySelector('.child')
console.log(el5.previousSibling)
console.log(el5.nextSibling)

// #6 E.previousElementSibling / E.nextElementSibling
const el6 = document.querySelector('.child')
console.log(el5.previousElementSibling)
console.log(el5.nextElementSibling)

// #7 E.children 
// 요소의 모든 자식 요소를 반환합니다. 

const el7 = document.querySelector('.parent')
console.log(el7.children)
console.log(Array.from(el7.children))

// #8 E.firstElementChild / E.lastElementChild

const el8 = document.querySelector('.parent')
console.log(el8.firstElementChild)
console.log(el8.lastElementChild)