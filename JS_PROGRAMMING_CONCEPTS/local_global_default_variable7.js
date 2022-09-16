function greeter(u){  // u is alocal variable 
    let num=5; //it can be accessed  inside the fun only not outside this block
    console.log(user);//sandeep
    return `hello ${u}`;//hello sandeep
}
let user="sandeep";  //user is a global variable can be accesed anywhere in the file
let str2=greeter(user);
console.log(str2);

function add(num1,num2,num3=1){//when we calling the method if we didnt mention nu3 it will take 1 if we mention it will take that value 
    console.log(num1,num2,num3);//5 6 7 
    return num1+num2+num3;

}
let result=add(5,6,7);
console.log(result);//18