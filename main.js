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
