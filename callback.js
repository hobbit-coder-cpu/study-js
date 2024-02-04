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




