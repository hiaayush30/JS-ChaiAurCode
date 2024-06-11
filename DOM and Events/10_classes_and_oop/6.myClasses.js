// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
    // this.encryptPassword = function(){
    //     return `${this.password}abc`
    // }
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

// In JavaScript, User.prototype and User.__proto__ are not the same and serve different purposes
// in the prototype chain and inheritance mechanism.

// User.prototype
// User.prototype is used to add properties and methods to the constructor function User. When a 
// new instance of User is created, the instance's internal prototype (__proto__) will point to
// User.prototype.
// Adding methods to User.prototype means all instances of User will have access to those methods.
// User.__proto__
// User.__proto__ refers to the prototype of the User function itself, which is Function.prototype
// since User is a function.
// It is rarely modified directly. Instead, it’s generally used to access or understand the 
// inheritance chain of the constructor function itself.


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());