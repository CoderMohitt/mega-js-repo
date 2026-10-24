function add({name, age}){
    console.log(name, age)
}

let a = {
    name: "mohit",
    age: 34
}

let {name, age} = a

// console.log(name)

add(a)