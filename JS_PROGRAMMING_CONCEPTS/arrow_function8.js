//normal function
let greet=function(){
    console.log("helo");
    return 1;
}
console.log(greet());//helo    1

//arrow function
let greeter=(user)=>{
    console.log("helo"+user);
    return 1;
}
console.log(greeter('sandeep'));//helosandeep    1


let add=(num1,num2)=>num1+num2;  //we dont need to write return statement in a single line we can write 
let result=add(6,7);
console.log(result);//13