// 콜백(Callback)

// 예제#1
const sum = (a, b, c) => {
    setTimeout(() => {
        c( a + b )
    },1000)
}

sum(1, 2, value => 
    console.log(value)
);


sum(3, 7, value => 
    console.log(value)
);

// 예제 #2 - 아이유 이미지 가져오기
const loadImage = (url, cb) => {
    const imgEl = document.createElement('img');
    imgEl.src = url;
    imgEl.addEventListener('load', () => {
        setTimeout(() => {cb(imgEl)},1000);
    })
}

const containerEl = document.querySelector('.container')
loadImage('https://biz.chosun.com/resizer/AJnJBonY6ktBUkQBKkwFD_M-bVE=/530x749/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/R5MBM3GH45H7AXFK2UJZWIOWLI.jpg', 
    imgEl => {
        containerEl.innerHTML = '';
        containerEl.append(imgEl);
});

// 콜백 지옥 #1

const a = (callback) => {
    setTimeout(() => {
        console.log(1)
        callback()
    }, 1000);
}
const b = (callback) => {
    setTimeout(() => {
        console.log(2)
        callback()    
    }, 1000);
}

const c = (callback) => {
    setTimeout(() => {
        console.log(3)
        callback()    
    }, 1000);
    
}

const d = () => console.log(4)


a(() => {
    b(() => {
        c(() => {
            d()
        })
    })
})

// 콜백지옥 #2
const getMovies = (movieName, callback) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            callback()
        })
}

getMovies('frozen', () => {
    console.log('겨울왕국')
})


getMovies('avengers', () => {
    console.log('어벤져스')
})


getMovies('avatar', () => {
    console.log('아바타')
})

// 콜백지옥
getMovies('frozen', () => {
    console.log('겨울왕국#2')
    getMovies('avengers', () => {
        console.log('어벤져스#2')
        getMovies('avatar', () => {
            console.log('아바타#2')
        })
    })
})





