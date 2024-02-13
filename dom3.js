// #1 document.createElement()
// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환

const divEl = document.createElement('div')
divEl.textContent = '새로 만든 div'
console.dir(divEl)


const inputEl = document.createElement('input')
console.dir(inputEl)

// #2 E.prepend(N) / E.append(N)
const parent3El = document.querySelector('.parent3')
console.dir(parent3El)

parent3El.prepend(new Comment(' 새로 만든 주석 '))
// parent3El.append(divEl)
// parent3El.append('New Text!')
parent3El.append(divEl, 'New Text!')

// #3 E.remove()
const el9 = document.querySelector('.child')
// el9.remove()

// #4 E.insertAdjacentElement()
// 대상 요소의 지정한 위치에 새로운 요소를 삽입
// 대상 요소.insertAdjacentElement(위치, 새로운 요소)

// 위치
/* 
    <!-- beforebegin -->
    <div class="target">
        <!-- afterbegin -->
        Content!
        <!-- beforeend-->
    </div>
    <!-- afterend -->
*/

const childEl = document.querySelector('.child')
const newEl = document.createElement('span')
newEl.textContent= 'Hello~'

childEl.insertAdjacentElement('afterend', newEl)

// #5 N.insertBefore()
// 부모 노드.insertBefore(노드, 참조 노드)

const parent4El = document.querySelector('.parent3')
const child4El = document.querySelector('.child')
const newEl = document.createElement('span')
newEl.textContent = 'insertBefore'

parent4El.insertBefore(newEl, child4El)

// #6 N.contains()

const parent5El = document.querySelector('.parent3')
const child5El = document.querySelector('.child')

console.log(parent5El.contains(child5El))
console.log(document.body.contains(parent5El))
console.log(document.body.contains(child5El))
console.log(document.body.contains(document.body))
console.log(parent5El.contains(parent5El))
console.log(parent5El.contains(document.body))
console.log(child5El.contains(document.body))

// #7 N.textContent

const el = document.querySelector('.child')
console.log(el.textContent)

el.textContent = '7'
console.log(el.textContent)

// #8 E.innerHTML

const el8 = document.querySelector('.parent')
console.log(el8.innerHTML)

el8.innerHTML = '<span style="color: red;">Hello</span>'







