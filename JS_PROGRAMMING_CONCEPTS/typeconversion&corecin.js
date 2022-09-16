let num=6;
console.log(num,typeof num);//6 number
//when we need to convert  number to string type conversion
let num1=String(6);
console.log(num1,typeof num1);//6 string
//converted number to string 
let num2="123";
console.log(num2,typeof num2);//123 string
//string to number below
let num3=Number("123");
console.log(num3,typeof num3);//123 number
/*this is explicit conversion we are doing the conversion 
on our own*/ 
let x="123 sandeep";
//how to convert this
x=parseInt("123 sandeep");
//parseInt will convert to number 
console.log(x)//123 
console.log(typeof x);//number
//when we use number + string we get string
//when we use number - string we get number
//when we use ! it will be like a compliment if true false if flase true
//in boolean 0 means false undefined means false null means false all other numbers and strings are true
