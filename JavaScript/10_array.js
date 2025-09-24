/*
Declare an array name `teaflavors` that
 contains the strings `"green tea",`"black tea"` and
  `"oolong tea"`.
Access the first element of the array and 
srote it in a variable named `first tea`.  */

let teaflavors =["green tea","black tea","oolong tea"]


const firsttea=teaflavors[0]

/* Declare an array name "cities" 
containing "london"."tokyo","paris"
 and "new york".
Access the third element in the array
 and store it in a variable named "favoritecity"
*/


let cities =["london","tokyo","paris","new york"]
const favoritecity=cities[2]

// You have an array named "teatypes" containig "herbel tea","white tea","masala tea".
// change the second element of the array to "jasmine tea".
let teatypes=["herbel tea","white tea","masala tea"]
teatypes[1]="jasmine tea"
//push method

teatypes.push("milk tea")
teatypes[3]="rong chai"

//removed last element
teatypes.pop()
console.log(teatypes)


//you have an array named `popularteas` containing "green tea","oolong tea","chai".
//creates a soft copy of this array named "softcopyteas"

let popularteas = ["green tea", "oolong tea", "chai"];
let softcopyteas=popularteas
//any manipulation is done in the original variable the soft copy also reflect those changees
console.log(softcopyteas);


//You have an array named "topcities" containing "berlin","singapore","new yorl"
//create a hard copy of this array named "hardcopycities"

let topcities = ["berlin", "singapore", "new york"];
// let hardcopycities=topcities.slice();
let hardcopycities=[...topcities]
topcities.pop()
console.log(hardcopycities);

//merge two arrays
let merge=topcities.concat(popularteas)
console.log( merge);

//find the length of the array and store it in a variable 
let variablee=merge.length;
console.log(variablee);

//check values in array
let topc = ["london","berlin", "singapore", "new york"];
let islondoninlist=topc.includes("london")
console.log(islondoninlist);


