// let num=1;
// function show(){
//     console.log("hello",num);
//     num++;
//     show();
// }
// show();//hello 10351


//factorial of a number'
function fact(n){
    if(n===0)
        return 1;
    else
   return n*fact(n-1);
}
let num=5;
let result=fact(num);
console.log(result);//120