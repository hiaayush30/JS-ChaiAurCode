class User {
    constructor(email, password){
        this.email = email;
        this.password = password //this will get overriden by the setter
        //getters and setters methods for all properties get created automatically
    }

    get email(){
        return this._email.toUpperCase()  
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}
//get and set are special methods which are accessed as properties
//getters andd setters help overswrie how the value is brought(ie accessed by the user) and stored in the memory
const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);