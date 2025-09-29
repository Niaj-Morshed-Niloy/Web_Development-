function person(name,age){
    this.name= name
    this.age=age
}

let myperson=new person("Anon",24)
let myperson1=new person("Niaj",24)
console.log(myperson);
console.log(myperson1);

//
function tea(type){
    this.type=type
    this.describe=function(){
        return `this is a cup of ${this.type}`
    }
}
let lemontea=new tea("lemon tea")
console.log(lemontea.describe());


//
function animal(species){
    this.species=species
}
animal.prototype.sound=function(){
    return `${this.species} makes a sound`
}
let dog=new animal("dog")
console.log(dog.sound());


//
function drink(){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.namee=namee

}
let tea =new drink("tea")
let coffe=drink("coffee")
