// function fetch() {
//     return new Promise((res, rej) => {})
// }

let data = fetch("https://jsonplaceholder.typicode.com/users")

// let res = data.then((response) => {return response.json()}) // convert raw data to json

// res.then((ans) => console.log(ans)) // extract data from json

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const data = await response.json()

    console.log(data)
}


getData()




function random() {
    return new Promise((res, rej) => {
        let success = false

        if(success === true) {
            res("this is the data")
        } else {
            rej("value rejected")
        }
    })
}

async function getAns() {
    try {
        const ans = await random()

        console.log(ans)
    } catch (error) {
        console.log(error)
    }
}

getAns()

let ans = random()

// ans.then((data) => {console.log(data)}).catch((msg) => console.log(msg))

// const add = (a, b) => a + b

// console.log(add(2, 3))

let a = 4
let b = "df"

// console.log(4 + 5)

try {
    console.log(a / b)
} catch (error) {
    console.log(error)
}