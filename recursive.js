// 재귀(Recursive)

// 예제 #1
let i = 0;
const a = () => {
    console.log('A')
    i+=1
    if(i < 4) {
        a()
    }
}

a()

// 예제 #2
const userA = {name: 'A', parent: null}
const userB = {name: 'B', parent: userA}
const userC = {name: 'C', parent: userB}
const userD = {name: 'D', parent: userC}

const getRootUser = (user) => {
    if(user.parent) {
        return getRootUser(user.parent)
    }

    return user
}

console.log(getRootUser(userD))



