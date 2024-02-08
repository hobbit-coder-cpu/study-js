// Async / Await

const a = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(1)
            resolve()
        }, 1000);
    })
}

const b = () => console.log(2)

// a().then(() => { b() })
// a().then(b)

const wrap = async () => {
    await a() // promise 가 반환되는 함수에서만 await 사용해야함! 
    b()
}

wrap()

const getMovies = (movieName) => {
    return new Promise((resolve) => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            resolve()
        })

    })
}

const wrap2 = async () => {
    await getMovies('frozen')
    console.log('겨울왕국#2')
    await getMovies('avengers')
    console.log('어벤져스#2')
    await getMovies('avatar')
    console.log('아바타#2')
}

wrap2()


const delayAdd2 = (index) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(index > 10) {
                reject(`${index}는 10보다 클 수 없습니다.`)
                return
            }
            console.log(index)
            resolve(index + 1)
        }, 1000)
    })
    
    
}

const wrap3 = async () => {
    try {
        const res = await delayAdd2(13)
        console.log(res)
    } catch(err) {
        console.log(err)
    } finally {
        console.log('done!')
    }
}

wrap3()
