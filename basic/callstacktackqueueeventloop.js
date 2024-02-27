// Web APIs를 이용한 콜백함수는 바로 콜스택에서 실행되지 않고, 
// Task Queue(=콜백큐) 에 적재 후, JS 콜백이 "빈 상태"에서 실행.
/*
setTimeout(() => {
    console.log(1)    
}, 0);

console.log(2)

// [출력 결과]
// 2 
// 1
*/

function a() {
    console.log('a')
    function b() {
        setTimeout(() => {
            console.log('b1')
            console.log('b2')   
        });
    }
    b()
}

function c() {
    console.log('c')
}

function first() {
    a()
    c()
}

function second() {
    c()
}

first()
second()