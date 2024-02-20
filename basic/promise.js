// Promise
// executor: (resolve: function, reject: function) => {void}
const a = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(1)
            resolve()
        }, 1000)
    })
}

const b = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(2)
            resolve()
        }, 1000)
    })
}

const c = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(3)
            resolve()
        }, 1000)
    })
}

const d = () => console.log(4)

// 
a().then(() => {
    b().then(() => {
      c().then(() => {
        d()
      }) 
    })
})

// then 함수의 인자인 콜백함수에서 promise를 리턴하면 then 체이닝 가능.
a().then(() => {
    return b()
}).then(() => {
    return c()
}).then(()=>{
    d()
})

// 간소화 #1
a()
.then(() => b())
.then(() => c())
.then(() => d())

// 간소화 #2
a()
.then(b)
.then(c)
.then(d)
.then(() => { console.log('done')})

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


// 
getMovies('frozen')
    .then(() => {
        console.log('겨울왕국')
        return getMovies('avengers')
    })
    .then(() => {
        console.log('어벤져스')
        return getMovies('avatar')
    })
    .then(() => {
        console.log('아바타')
        console.log('done')
    })


    // Resolve, Reject 그리고 에러 핸들링

// const delayAdd = (index, cb, errorCb) => {
//     setTimeout(() => {
//         if(index > 10) {
//             errorCb(`${index}는 10보다 클 수 없습니다.`)
//             return
//         }
//         console.log(index)
//         cb(index + 1)
//     }, 1000);
// }

// delayAdd(
//     4,
//     res => console.log(res),
//     err => console.log(err)
// )

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

delayAdd2(12)
.then(res => console.log(res))
.catch(err => console.log(err))
.finally( () => console.log('done!') )
