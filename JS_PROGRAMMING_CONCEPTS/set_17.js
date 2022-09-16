//in arrays we can have duplicate values
//set is a collection all the values will be unique
/*set is a unordered list not in a sequency order which we have added order but in js
it maintains the order and its doesnt have a index value */
//set is a class we need to use constructor
let numss=new Set("bookKeeper");
console.log(numss);//Set(7) { 'b', 'o', 'k', 'K', 'e', 'p', 'r' }
console.log("---------------");
let numsss=new Set();
numsss.add("sandeep");
numsss.add(2);
numsss.add(1);
numsss.add(2);
numsss.add(3);
numsss.add("sandeep");
console.log(numsss);//Set(4) { 'sandeep', 2, 1, 3 }
console.log("---------");
numsss.forEach(value=>{
    console.log(value);
});/*sandeep
2
1
3 */

console.log(numsss.has("sandeep"));//true
console.log(numsss.has("Sandeep"));//false


 