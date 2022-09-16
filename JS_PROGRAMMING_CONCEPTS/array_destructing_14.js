//Destructure Array
let nums=[5,7,9,4];
console.log(nums);//[ 5, 7, 9, 4 ]
let[a,b,c,d]=nums;
console.log(d);//4
let[e,f,,h]=nums
//it will skip g and it wil have only 3varibales
//if we remove empty comma then h will be 3rd element and not 4th element
console.log(h);//4
//after removing comma
let[i,j,l]=nums;//there is no empty comma for k now only 3 variables we cannot the 4th elemtn of the array
console.log(l);//9

let x=5;
let y=6;
[x,y]=[y,x];
//[5,6]=[6,5]=>[x,y]=[6,5] x is getting assigned to y and y is getting assigned to x
console.log(x,y);//6 5

let words="my name is Sandeep kaniyar from bangalore".split(' ');
//here the split convert that into array we are teeling to split the array when a space appears
let[m,n,,...p]=words;
//three dots specifies rest of the elements must stored to p 
console.log(p);//[ 'Sandeep', 'kaniyar', 'from', 'bangalore' ]
