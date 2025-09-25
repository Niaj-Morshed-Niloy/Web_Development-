/* write a for loop that loop through the array ["green tea",
"black tea","chai","oolong tea"] and stops the loop when it finds  "chai".
stores all teas before "Chai" in a new array named "selectedteas"
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedteas=[];
for (let i = 0; i < teas.length; i++) {
    if(teas[i]=="chai"){
        break;
    }
   selectedteas.push(teas[i])
    
}
console.log(selectedteas);

/* wrie a for loop that loops throug the array ["london","new york",
"paris","berlin"] and skips "paris"
store the othe cities in a new array named visitedcities
*/

let cities = ["london", "new york", "paris", "berlin"];
let visitedcities=[]

for (let i = 0; i < cities.length; i++) {
    if (cities[i]=="paris") {
        continue;
        
    }
 visitedcities.push(cities[i])
    
}
console.log(visitedcities);


/*use a "for-of" loop to iterate through the array[1,2,3,4,5] and
stop when the num 4 is found. store the num before 4 in an array
named smallnumbers.
*/

let numbers = [1, 2, 3, 4, 5];
let smallnumbers=[]

for (const num of numbers) {
    if(num==4){
        break;
    }
    smallnumbers.push(num)
}
console.log(smallnumbers);


/*use a "for-of" loop to iterate through the array ["chai","green",
"herbal","blaxk"] and skip herbal.
store the other teas in an array named "preferredteas"
*/
 let teatypes = ["chai", "green", "herbal", "blaxk"];
 let preferredteas=[]
 for (const tea of teatypes) {
    if (tea==="herbal") {
        continue;
        
    }
    preferredteas.push(tea)
    
 }
 console.log(preferredteas);
 