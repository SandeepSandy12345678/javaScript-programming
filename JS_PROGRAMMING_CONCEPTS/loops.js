//while,do-while,for loop
//while loop cheks for condition and then enters execution block
//1.intialize
let i=1;
//2.condition
while(i<=5){
    console.log("hi");
     i++; //3.increment
}
/*hi
hi
hi
hi
hi*/


//do while  enters execution block and then cheks for condition
do{
console.log("hiiii");
i++;
}while (i<=5); 
//hiiii the condition is false still it prints one time that is do loop


//for loop
for(let i=1;i<=100;i++){
    if(i%2===0)
    console.log(i);
}

let num=123456;
while(num>0){
    console.log(num%10);  //6   5   4  3  2   1
    num=parseInt(num/10);
}