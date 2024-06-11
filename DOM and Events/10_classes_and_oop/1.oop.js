const user = {
    username: "hitesh",
    loginCount: 8,
    
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

//Arrow functions cannot be used as constructor functions.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
//calling the constructor fn without 'new' will lead to 'this' pointing to the global object(as in normal fns)
//and the properties will be set globally instead of creating an object
//in case of user1=User("aayush","3",true); you will be able to access the properties with the user1 variable(if you
//explicitely wrote "return this") as the user1 will be assigned to the global object

//calling the constructor fn with new without storing it in a variable will lead to creation of an object
//which will get discarded on being returned

//constructor fn(called with new) automatically returns the new object unless told to return something else

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); //constructor property is the ref of itself
//console.log(userTwo);