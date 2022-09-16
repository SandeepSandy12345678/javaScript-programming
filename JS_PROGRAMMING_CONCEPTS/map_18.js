//map is a key value pair the key value cannot be duplicated
let map=new Map();
//we are not using add we are using set because it will add or if the key already exist it will update it (refer line 7 and 13)
map.set("sandeep","java");
map.set("sachin","php");
map.set("vishal","accoutancy");
map.set("shreyas","python");

console.log(map.keys());//[Map Iterator] { 'sandeep', 'sachin', 'vishal', 'shreyas' }
console.log(map.values());//[Map Iterator] { 'java', 'php', 'accoutancy', 'python' }
console.log(map.has('shreyas'));//true
console.log(map.get("shreyas"));//python
map.set("shreyas","js");


//for of loop
for(let [k,v] of map){
    console.log(k+"  "+v);
}/*o/p
sandeep  java
sachin  php
vishal  accoutancy
shreyas  js */




//for each loop
//in foreach we are v first because in foreach first parameter is for value and second paramter is for index 
map.forEach((v,K)=>{
    console.log(K," :",v);
})/* o/p-
sandeep  : java
sachin  : php
vishal  : accoutancy
shreyas  : js */

//map is a collection of key value pair 