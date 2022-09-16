let nums=[];
nums[0]=5;
nums[99]=9;
console.log(nums);//[ 5, <98 empty items>, 9 ]


//we can use for in key but for its best to use for of loop
// for(let key in nums){
//     console.log(nums[key]);//5  9
// }
//because for arrays we dont need work with keys and fetch the array we can simply fetch the value

for(let n of nums)
{
    console.log(n);//5 98 times undedfined 9
}
