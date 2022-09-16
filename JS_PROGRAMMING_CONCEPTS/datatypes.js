let num=1;  //number
let user="sandeep";  //op->string
//primitive types
/*1.number,2.string,3.boolean,4.undefined,5.symbol,6.null
maximum safe value for number is
9007199254740991
*/
console.log(typeof user);
//typeof tells the data_type
let num1=0xff;//0x is prefix -ff is 255 we are giving hexadecimal value
console.log(num1);//op->255
let num2=2e3;//2*10cube->2*1000 e is expontential
console.log(num2);//op->2000
let num3=5/0;
console.log(num3);//op->Infinity
let num4=-5/0;
console.log(num4);//op->-Infinity
//-----------
console.log(Number.MAX_VALUE);//op->1.7976931348623157e+308
console.log(Number.MAX_VALUE*10);//op->Infinity
//------------
let num5=199339034985959678961;
console.log(num5);//199339034985959700000
let num6=199339034985959678961n;
//the same number as num5 added with n at last
console.log(num6);//199339034985959678961n
//console.log(num6+2);
//Cannot mix BigInt and other types, use explicit conversions
//when we mention n at last itmeans it is bigInt
//so we need to change the adding number to type bigInt
console.log(num6+2n);//199339034985959678963n

//--------------------
