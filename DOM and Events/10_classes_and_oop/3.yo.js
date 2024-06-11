const User=function(name,score){
   this.name=name;
   this.score=score;
   this.printScore=function(){
    console.log(`the score is ${this.score}`);
   }
};

const user1=new User("Aayush",98);
const user2=new User("Advay",100);

// console.log(user1.printScore());

const obj={
   1:"Hulk",
   2:"Spiderman",
   3:"Batman"
};

const hero=1;
console.log(obj[hero]);