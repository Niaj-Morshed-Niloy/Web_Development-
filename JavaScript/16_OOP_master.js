let car={
    make:"Toyota",
    model:"camry",
    year:2020,
    start:function(){
        return`${this.make} car got started in ${this.year}`

    }

}
console.log(car.start());
//

function person(name,age){
    this.name=name
    this.age=age
}
let john =new person("johnsina",20)
console.log(john.name);
//
function animal(type){
    this.type=type

}
animal.prototype.speak=function(){

    return`$(this.type) makes a sound`
}
Array.prototype.hitesh=function(){
    return `custom methos ${this}`
}
let myarray=[1,2,3]
console.log(myarray.hitesh());
let mynewarray=[1,2,3,4,5,6]
console.log(mynewarray.hitesh());
//

class vehicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }
    start(){
        return`${this.model} is a car from ${this.make}`
    }

}
class carr extends vehicle{
    drive(){
        return `${this.make}: this is an inheritance example`
    }
}
let mycar=new carr("Toyota","corolla")
console.log(mycar.start());
console.log(mycar.drive());
//
let vehicle1=new vehicle("toyota","corolla")
console.log(vehicle1.make);

//encapsulation
class bankaccount {
    #balance=0;
    deposit(amount){
        this.#balance+=amount;
        return this.#balance
    }
    getbalance(){
        return `$ ${this.#balance}`
    }
}

let account=new bankaccount()
console.log(account.getbalance( ));


//
class coffemachine{
    start(){
        return`starting the machine...`
    }
    brewcoffe(){
        return`brewing coffe`
    }
    pressstartbutton(){
        let msgone=his.start()
        let msgtwo=this.brewcoffe()
        return`${msgone} +${msgtwo}`

    }
}
let mymachine=new coffemachine
console.log(mymachine.start());
console.log(mymachine.brewcoffe());

//polymorphism

  class Bird{
    fly(){
        return `flying....`
    }
  }
  class Penguin extends Bird{
    fly(){
        return `penguins can't fly`
    }
  }
let bird =new Bird()
let penguin =new Penguin()
console.log(bird.fly());
console.log(penguin.fly());


//static method

class calculator{
    add(a,b){
        return a+b
    }
}
// let minical=new calculator()
// console.log(minical.add(2,3));

// console.log(calculator.add(2,3));


//getters and setters

class employee {
    constructor(name,salary){
        this.name=name
        this._salary=salary
    }
    get salary(){
        return `you are not allowed to see salary `;
    }

Set salary(value){
    if (value<0){
        console.error("invalid")
    } else{
    this._salary=value
    }
 } 
}
let emp= new employee("alice",-5000)
console.log(emp._salary);
