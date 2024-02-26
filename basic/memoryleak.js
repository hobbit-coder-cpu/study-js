// 메모리 누수(memory leak)

// 더 이상 필요하지 않은 데이터가 해제되지 못하고 메모리를 계속 차지하는 현상

// #1 불필요한 전역 변수 사용
// #2 분리된 노드 참조
// #3 해제하지 않은 타이머
// #4 잘못된 클로저 사용 

// #1
window.hello = 'Hello world!'
window.heropy = { name: 'Heropy', age: 85}
console.log(window.hello)

// #2
const btn = document.querySelector('button')
const parent = document.querySelector('.parent4') // V 

btn.addEventListener('click', () => {
    console.log(parent)
    parent.remove() // parent 를 제거해도 위 const parent로 인해 메모리에 남는다.
})

/*
    수정 방법
btn.addEventListener('click', () => {
    const parent = document.querySelector('.parent4')
    console.log(parent)
    parent && parent.remove()
})
*/

// #3
let a = 0
setInterval(() => {
    a += 1
}, 100); // 해제하지 않은 타이머

setTimeout(() => {
    console.log(a)
}, 1000);

/*
    수정 방법
const intervalId = setInterval(() => {
    a += 1
}, 100); // 해제하지 않은 타이머

setTimeout(() => {
    console.log(a)
    clearInterval(intervalId)
}, 1000);
*/

// #4
const getFn = () => {
    let a = 0
    return name => {
        a += 1          // 불필요한 변수
        console.log(a)  // 불필요한 로직
        return `hello ${name}~`
    }
}
const fn = getFn()
console.log(fn('Heropy'))
console.log(fn('Neo'))
console.log(fn('Lewis'))

const fn2 = getFn()
console.log(fn2('Heropy2'))
console.log(fn2('Neo2'))
console.log(fn2('Lewis2'))
