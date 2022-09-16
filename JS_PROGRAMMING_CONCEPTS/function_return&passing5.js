//return a value
function greet(){
    return "hello";  //we will use when we need this value to store in a avriable when it calls the method
}
let str1=greet();
console.log(str1);//hello


//pass a value
function greeter(user){
    return `hello ${user}`;
}
let user="sandeep";
let str2=greeter(user);
console.log(str2);//hello sandeep