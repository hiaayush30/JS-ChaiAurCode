let user1={
    name:"Aayush",
    age:21,
}

let user2={
    name:"Akshay",
    age:28
};

let printName=function(){
    console.log("My name is "+this.name+" and my age is "+this.age);
}

printName.call(user1);  //first arg is the reference to the context passed through the call method to the
                        //'this' of the function
printName.call(user2);

let printName2=function(town){
    console.log("My name is "+this.name+" and my age is "+this.age+" and i live in "+town);
}
printName2.call(user1,"Bhopal");