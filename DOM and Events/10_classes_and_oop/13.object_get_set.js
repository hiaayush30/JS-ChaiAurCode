////implementing getters and setters in Object based syntax instead of functions or classes
const User = {
    _email: 'h@hc.com', //_represents that i am almost creating a private property or that will not be normally used
                        //by the users
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);