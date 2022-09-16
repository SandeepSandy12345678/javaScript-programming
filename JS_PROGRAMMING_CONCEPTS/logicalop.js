/* And operator &&  .dot
Or operator || +
not operator  !  ~  */

//in or even one condition is true we get true 
let x=7,y=8,z=9;
let result=x>y || y<z;  //or operator
console.log(result);//true


//in and operator if anyone condition is false we get false
result=x>y && y<z; //and operator
console.log(result);//false


//in not operator if its true we get false and vice versa
result=!(y<z);
console.log(result);//false

