/* write a function named maketea that takes one parameter,
"typeoftea", and returns a string like "making green tea" when called with "green tea".
store the result in a variable named "teaorder"
*/
function maketea(typeoftea){
    return `Making ${typeoftea}`
    console.log(test);

}
let teaorder=maketea("green tea");
console.log(teaorder);

/*create a function name ordertea that takes one
 parameter, teatype. Inside
this function, create another function name 
confirmorder that returns a message
like order confirmed for chai.
Call confirmorder from within ordertea
 and retunr the result */
 function ordertea(teatypes){
    function confirmorder(){
        return `order confirmed for chai`
    }
    return confirmorder()

 }
 let orderconfirmation=ordertea("chai")
 console.log(orderconfirmation);
 
 /*write an arrow function named calculatetotal 
 that takes two parameters: price and quantity. 
The function should return the total cost by multiplying the price
and quantity.
store the result in a variable named totalcost.
*/

const calculatetotal=(price,quantity)=> price*quantity 
let totalcost=calculatetotal(500*2) 

 /*write a function names processteaorder that takes another 
 function, maketea as a parameter and calls it with the
  argument earl grey.
  Return the result of calling maketea.
  */
function maketea(typeoftea){
    return `maketea:${typeoftea}`
}
function processteaorder(teafunction){
    return teafunction('earl grey')
}
let order=processteaorder(maketea)
console.log(order);


/*write a function named createtemaker that 
returns another function. the return function 
should take one parameter, teatype, and return a
 message like making green tea.
store the returned function in a variable named
 teamaker and call it with green tea
 */
function createtemaker(){
    return function(teatype){
        return `making ${teatype}`
    }
}
let teamaker=createtemaker()
let result=teamaker("green tea")

console.log(result);
