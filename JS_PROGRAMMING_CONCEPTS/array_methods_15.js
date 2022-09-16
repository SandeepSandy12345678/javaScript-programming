//forEach()
let nums=[42,51,34,76,87,90];
//console.log(nums);//[ 42, 51, 34, 76, 87, 90 ]

//  we need to get values one by one 
//forEach is amethod it will give one by one value 
nums.forEach((n)=>{
    console.log(n );
}) /*o/p-
42
51
34
76
87
90*/

//we can perform some operations also
nums.forEach((n)=>{
    console.log(n +1 );
})  /*o/p-
43 
52
35
77
88
91 */


//we can use it print indiviual index and array as well
nums.forEach((n,i,nums)=>{
    console.log(n,i,nums);
})/*o/p
42 0 [ 42, 51, 34, 76, 87, 90 ]
51 1 [ 42, 51, 34, 76, 87, 90 ]
34 2 [ 42, 51, 34, 76, 87, 90 ]
76 3 [ 42, 51, 34, 76, 87, 90 ]
87 4 [ 42, 51, 34, 76, 87, 90 ]
90 5 [ 42, 51, 34, 76, 87, 90 ]  */
