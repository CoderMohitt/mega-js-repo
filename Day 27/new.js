function checkEvenOdd(num) {
    let remainder = num % 2

    if(remainder === 1) {
        console.log("odd")
    } else {
        console.log("even")
    }
}

function largeOfThree(a, b, c) {
    if(a > b && a > c) {
        console.log('a is greatest')
    } else if(b > a && b > c) {
        console.log('b is greatest')
    } else if(c > a && c > b) {
        console.log('c is greatest')
    } else {
        console.log('all are equal')
    }
}

function fizzBuzz() {
    for(let i = 1; i <= 30; i++) {
        if(i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz")
        else if(i % 3 === 0) console.log("Fizz")
        else if(i % 5 === 0) console.log("Buzz")
        else console.log(i)
    }
}

function revString(str) {
    let ans = ""
    for(let i = str.length - 1; i >= 0; i--) { // 4, 3, 2, 1, 0
        ans = ans + str[i]
    }

    console.log(ans)
}

function countVowels(str) {
    str = str.toLowerCase()
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'a' || str[i] === 'i' || str[i] === 'e' || str[i] === 'o' || str[i] === 'u') {
            count = count + 1
        }
    }

    console.log(count)
}

// checkEvenOdd(11)
// largeOfThree(12, 12, 12)
// fizzBuzz()
// revString("mohit")
countVowels("shivamSHIVAM")

let a = "shivam"

console.log('a' in a)
