//filter
let nums=[42,51,24,98,65,12];
nums.filter(n=> n%2===0).forEach(n=>{
    console.log(n);
})/*42
24
98
12 */
console.log("---------------------------");
 //map()
 nums.filter(n=> n%2===0).map(n=>n*2).forEach(n=>{
    console.log(n);
})/*o/p-
84
48
196
24  */

console.log("----------------");
//reduce() will give only one value not like forEach()
//we will store to variable result because reduce will give one value
let result =nums.filter(n=> n%2===0).map(n=>n*2).reduce((a,b)=>a+b);
console.log(result);//352


