// function doThis() {
//     console.log(2)
// }

// console.log(1) // quickly
// setTimeout(doThis, 5000) // 5 sec - schedule for later
// console.log(3) // quickly


// // doThis(1, 2)

// document.addEventListener((event) => {})


let promise = new Promise((resolve, reject) => {
    let success = false

    if(success === true) {
        resolve("msg returned, hi there") // .then() -> whenResolve("msg returned, hi there")
    } else {
        reject("error occured") // whenReject(error occured)
    }
})

// function whenResolve(data) {
//     console.log(data)
// }

function whenReject(data) {
    console.log(data)
}

// promise.then(whenResolve).catch(whenReject)

function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("data received")
        }, 5000);
    })

    // return "data received"
}

let data = fetchData()

function whenResolve(data) {
    console.log(data)
}

data.then(whenResolve)

console.log("after call")

// console.log(data)