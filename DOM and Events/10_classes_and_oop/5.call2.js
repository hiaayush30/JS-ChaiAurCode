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

let printName2=function(town,state){
    console.log("My name is "+this.name+" and my age is "+this.age+" and i live in "+town+","+state);
}

//function borrowing
printName2.call(user1,"Bhopal","MP");
printName2.apply(user1,["Bhopal","MP"]);
//instead of passing seperate arguments,in apply there only 2- reference for this and the list of other args

let printMyName=printName2.bind(user1,"Bhopal","MP");
//bind will create a copy of printName2 fn and bind it to user1 object and return it
console.log(printMyName);
printMyName();