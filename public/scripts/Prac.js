// arrow Functions Practice
const name = (value, value1) => {
    return value, value1;
}
console.log(name(23, 24))

calc => calc * 3;
const result1 = calc(4);
console.log(result1)

// Revisiting Objects 
const user = {
    Name: 'Navjot',
    age: 23,
    greet() {
        console.log("Hi there")
    }
}
console.log(user.Name` is ${user.age} years old and want to say ${user.greet()}`)

// class keyword 

class User1 {
    // constructor keyword 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// new Keyword 
const nKey = new User1("Navjot", 23);
console.log(nKey);