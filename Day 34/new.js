// let promise = new Promise((resolve, reject) => {
//     let success = false// from database
//     let msg = "hi there"
    
//     if(success === true) {
//         resolve(msg)
//     } else {
//         reject("value cant be retrieved")
//     }
// }) // executer function

// // to receive data
// function receiveData(data) {
//     console.log(data)
// }

// function errorOccur(errMsg) {
//     console.log(errMsg)
// }

// promise.then(receiveData).catch(errorOccur) // wait

// await promise

// console.log(1)
// console.log(2)

function fetchData() {
    let promise = new Promise((resolve, reject) => {
        msg = "something" // it will take time, database call
        
        setTimeout(() => {
            resolve("msg received")
        }, 3000);
    })

    return promise
}

async function run() {
    let data = await fetchData() // freeze

    console.log(1)
    console.log(1)
    console.log(1)
    console.log(1)
    console.log(data)
}

run()

console.log("loading...")

// let data = fetchData()

// data.then((data) => {
//     console.log(data)
// })
