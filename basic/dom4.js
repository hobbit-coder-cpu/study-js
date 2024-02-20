// #1 E.dataset

// 요소의 각 `data-` 속성 값을 얻거나 지정
const el = document.querySelector('.child')
const str = 'Hello world!'
const obj = {a: 1, b: 2}

el.dataset.helloWorld = str
// .helloWorld = hello-world
// .helloworld = helloworld
el.dataset.object = JSON.stringify(obj)
el.dataset.jungwWon = 'jungwon'


console.log(el.dataset.helloWorld)
console.log(el.dataset.object)
console.log(JSON.parse(el.dataset.object))


// #2 E.tagName

const parent2El = document.querySelector('.parent')
const child2El = document.querySelector('.child')
const el2 = document.createElement('span')

console.log(parent2El.tagName)
console.log(child2El.tagName)
console.log(el2.tagName)
console.log(document.body.tagName)

// #3 E.id

const el3 = document.querySelector('.child')
console.log(el3.id)
el3.id = 'child1'
console.log(el3.id)

// #4 E.className 

// const el4 = document.querySelector('.child')
// console.log(el4.className)
// el4.className += ' child2 active'
// console.log(el4.className)
// console.log(el4)


// #5  E.classList
// .add() 
// .remove()
// .toggle()
// .contains()
const el5 = document.querySelector('.child')
console.log(el5.classList)
el5.classList.add('child2', 'active')
console.log(el5.classList)
console.log(el5)

el5.classList.remove('active')
console.log(el5.classList)

el5.addEventListener('click', () => {
    el5.classList.toggle('active')
    console.log(el5.classList.contains('active'))
})

// #6 E.style
// "인라인" 스타일의 CSS 속성값을 얻거나 지정

const el6 = document.querySelector('.child')

// 개별 지정
// el6.style.width = '100px'
// el6.style.fontSize = '50px'
// el6.style.backgroundColor = 'yellow'
// el6.style.position = 'absolute'

// 한번에 지정
Object.assign(el6.style, {
    width: '100px',
    fontSize: '50px',
    backgroundColor: 'yellow',
    position: 'absolute'
})


console.log(el6.style)
console.log(el6.style.width)
console.log(el6.style.fontSize)
console.log(el6.style.backgroundColor)
console.log(el6.style.position)

// #7 window.getComputedStyle()
// 요소에 적용된 스타일 객체를 반환

const el7 = document.querySelector('.child')
const styles = window.getComputedStyle(el7)
// globalThis.getComputedStyle(el7)

console.log(styles.width)
console.log(styles.fontSize)

// #8 E.getAttribute() / E.setAttribute()
// 요소에서 특정 속성 값을 얻거나 지정
// 속성은 HTML 에서는 Attribute
// 속성은 CSS 에서는 Property

const el8 = document.querySelector('.child')
el8.setAttribute('title', 'Hello World!')
console.log(el8.getAttribute('title'))

// #9 E.hasAttribute() / E.removeAttribute()
// 요소에서 특정 속성을 확인하거나 제거 

const el = document.querySelector('.child')
console.log(el.hasAttribute('class'))

el.removeAttribute('class')
console.log(el.hasAttribute('class'))

