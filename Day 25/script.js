// // function declartion

// function greet(personName) { // parameter, accepting the value
//     console.log("hey there", personName)
// }

// // let name = "ram"

// // hi there, ram

// greet("saurabh") //argument // calling the function
// // greet()

function sum(a, b) {
    return a + b
}

// NaN

// let ans = sum(23, 45) 

// console.log(sum(23, 45))

function returnANumber(n) {
    let a
    return a

}

// let ans = returnANumber(5) //15

// console.log(ans)

// console.log(returnANumber(34) + 10)

function greet(name = "Guest") {
    console.log("hi there", name)
}

// greet("Mohit")
// greet()

const mul = function (a, b) {
    return a * b
}

// console.log(mul(2, 2))

// arrow function

const plusTen = (n) => {return n + 10} // n + 10

const mulFive = (n) => n * 5

const minusTen = n => n - 10

const hi = () => console.log("hiiii")

// console.log(plusTen(10))
// console.log(mulFive(5))
// console.log(minusTen(50))
hi()