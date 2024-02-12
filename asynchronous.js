// 동기(Synchronous) 와 비동기(Asynchronous)
// 동기: 순차적으로 코드 실행 O
// 비동기: 순차적으로 코드 실행 X

// 동기 
console.log('sync:', 1)
console.log('sync:', 2)
console.log('sync:', 3)

console.log('---------------------------------')

// 비동기 #1 - setTimeout에 의한
console.log('async:', 1)
const a = 20
setTimeout(() => {
    console.log('async:', 2)
    // console.log(a)    
}, 1000);

console.log('async:', 3)

// 비동기 #2 - addEventListener에 의한
const btnEl = document.querySelector('h1')
btnEl.addEventListener('click', () => {
    console.log('clicked')
})


// 비동기 #3 - fetch에 의한
fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => { console.log('res:', res); return res.json()})
    .then(res => console.log('res.json:', res))

console.log('async #3')

// 반복문에서 비동기 처리 

const getMovies = movieName => {
    return new Promise(resolve => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
        .then(res => res.json())
        .then(res => resolve(res))
    })
}

const titles = ['frozen', 'avengers', 'avatar']

// async 컨트롤이 안됨 
// titles.forEach(async title => {
//     const movies = await getMovies(title)
//     console.log(title, movies)
// })

const wrap = async () => {
    for(const title of titles) {
        const movies = await getMovies(title)
        console.log(title, movies)
    }
}

wrap()

