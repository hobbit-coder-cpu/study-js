// 호출 스케쥴링(Scheduling a function call)

// 예제 #1
const hello = () => {
    console.log(`Hello~`)
}
const timeout = setTimeout(hello, 1000)
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    console.log('clear!')
    clearTimeout(timeout)
})

// setInterval, clearInterval
// clearInterval 로 setTimeout 이벤트 정지 가능하며
// 그 반대도 가능하나 혼랑 방지를 위해 호환 비권장






