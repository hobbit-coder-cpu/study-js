function say(message) {
  if (message != undefined) {
    console.log(message);
  } else {
    console.log("파라미터가 넘어오지 않았어요.");
  }
}

say();

function say2(message = "파라미터가 넘어오지 않았어요") {
  console.log(message);
}

say2();
