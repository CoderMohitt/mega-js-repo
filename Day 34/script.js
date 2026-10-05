// console.log(1) // main thread

// msg  // it takes time
// // read msg, send msg -> separate thread
// console.log(msg)

// console.log(2) // main thread

function say() {
    console.log("hii")
}

setTimeout(say, 20000) // 2000 -> 2 sec

console.log(1) // normal tasks
console.log(1) // normal tasks
console.log(1) // normal tasks
console.log(1) // normal tasks
console.log(1) // normal tasks
console.log(1) // normal tasksd