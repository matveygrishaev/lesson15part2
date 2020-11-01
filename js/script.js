'use strick';

 class First {
    constructor () {

    }
    hello () {
      console.log("Привет я метод родителя!");
    }
 }
 
 const first = new First();
 class Second {
   constructor () {

   }

   hello () {
     first.hello();
     console.log("А я наследуемый метод!");
   }
 }

 const second = new Second();

 first.hello();
 second.hello();

 //"Привет я метод родителя!"
 //"А я наследуемый метод!"