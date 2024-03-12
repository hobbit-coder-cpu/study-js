/**
 * Promise는 자바스크립트에서 비동기 처리에 사용되는 객체입니다.
 * 비동기 처리란 특정 코드의 실행이 완료될 때까지 기다리지 않고
 * 다음 코드를 실행할 수 있게 해주는 방식입니다.
 */

// const promise = new Promise((resolve, reject) => {
//   if (1) {
//     resolve("결과 데이터");
//   } else {
//     reject(new Error("에러"));
//   }
// });

// promise
//   .then((str) => {
//     console.log(str);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/* function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/25");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.response);
      console.log(res);
      return res;
    } else {
      console.error(xhr.status, xhr.statusText);
      return;
    }
  };
}

const res = getData();
console.log(res);

console.log("다음 코드를 실행합니다."); */

function getDataPromise() {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/25");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
        // const res = JSON.parse(xhr.response);
        // console.log(res);
        // return res;
      } else {
        reject(xhr.status, xhr.statusText);
        // console.error(xhr.status, xhr.statusText);
        // return;
      }
    };
  });

  return promise;
}

getDataPromise()
  .then((response) => {
    const res = JSON.parse(response);
    console.log(res);
  })
  .catch((status, statusText) => {
    console.log(status, statusText);
  });
