/* use a "for-in" loop to loop through an object containing
city populations.
Stop the loop when the population of "berlin" is
found and store all previous cities populations in a 
new object named "citypopulations"
let citiespopulation={
"london":890000,
"new york":840000,
"paris":220000,
"berlin":350000
};
*/
let citiespopulation = {
  london: 890000,
  "new york": 840000,
  berlin: 350000,
  paris: 220000,
};
let cityNewpopulations={}
// console.log(Object.keys(citiespopulation));

for (const city in citiespopulation) {
    if (city=="berlin") {
        break;
    }


        cityNewpopulations[city]=citiespopulation[city];
    }
    console.log(cityNewpopulations);
    
 
/* use a "for-in" loop to loop through an object containing
city populations.
skip any city with a population below 3 million and 
store the rest in a new object name largecities.
let worldcities={
"sydney":5000000,
"tokyo":9000000,
"berlin":350000,
"paris":2200000
};
*/
let worldcities = {
  sydney: 5000000,
  tokyo: 9000000,
  berlin: 350000,
  paris: 2200000,
};
let largecities={}
for (const city in worldcities) {
    if(worldcities[city]<3000000){
        continue;
    }
    largecities[city]=worldcities[city]
        
    }
    console.log(largecities);
    


/*write a foreach loop that iterates through the array ["earl grey",
"green tea","chai","oolong tea"] .
stop the loop when "chai" is found and store all previous tea
types in a array named "availableteas"*/

let teacollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableteas=[]

teacollection.forEach(function(tea){
    if (tea==="chai") {
        return ;
    }
    
    
    availableteas.push(tea)
});
console.log(availableteas);


/*write a foreach loop that iterates through the array 
["paris","new york","tokyo","london"].
skip tokyo and store the other cities in a new array
named travelcities.
*/

let myworldcities = ["paris", "new york", "tokyo", "london"];
let travelcities=[]
myworldcities.forEach(function(city) {
    if(city==="tokyo"){
        return;
    }
    travelcities.push(city)
    
});
console.log(travelcities);


/*write a for loop that iterates through the array [2,4,7,9]
skip the value 7 and multiply the rest by 2. store the
result in a new array doublenumbers.
*/
let numbers=[2,4,7,9]
let doublenumbers=[]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]==7) {
        continue;
        
    }
    doublenumbers.push(numbers[i]*2)
    
}
console.log(doublenumbers);



/* use a for of loop iterate through the array 
["chai","green tea","lemon","black","jasmine"]
and stop when the length of the current tea name is greater than 10.
store the teas iterated over in an array named shortteas.*/

let myteas = ["chai", "green tea", "lemon", "black", "jasmine"];
let shortteas=[]
for (const tea of myteas) {
    if(tea.length>10){
        break;
    }
    shortteas.push(tea)
}
console.log(shortteas);
