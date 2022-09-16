//array methods are push pop - shift unshift -splice

//push method
//push adds to the last 
let data=[5,6,7,8];
console.log(data.push(2));//5 //5 because it has has been added to length 5 (length_of_the_array)
//push is a method it will add at the end of array 
console.log(data);//[ 5, 6, 7, 8, 2 ]

//pop method
//pop delete the last element
console.log(data.pop());//2 //return the element which has been deleted
console.log(data);//[ 5, 6, 7, 8 ]

//shift method
// shift delete the data from first
console.log(data.shift());//5 //return the element which has been deleted
console.log(data);//[ 6, 7, 8 ]

//unshift method
//unshift add elemnent to the first
console.log(data.unshift(2));//4 //return current array length after adding element to the array
console.log(data);//[ 2, 6, 7, 8 ]

//its better to use push and pop because it will add to the last
//but shift and unshift will delete and add from first it will move the entire array
//because push and pop doesnt change the index of other elements

//splice method
//it will delete element in middle not like push pop or shift unshift
//splice(index,no of values we need to remove)
console.log(data.splice(2,1));//[ 7 ]  //2 defines index and 1 defines only 1 element if we had mention 2,2 it would be deleted 7 ,8
console.log(data);//[ 2, 6, 8 ]
//we can add values in between
console.log(data.splice(1,2,11,15));//[ 6, 8 ] deleted and replaced with 11 and 15 
console.log(data);//.[ 2, 11, 15 ]
