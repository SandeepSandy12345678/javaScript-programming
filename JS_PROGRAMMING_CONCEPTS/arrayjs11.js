//creating arrays and fetching elements in javaScript
let values=new Array();//this is a constructor function because we are using 'new' keyword
//or another way of creating array is by
let values1=[1,2,3,4,5];//insidde array we can string number objects functions also
console.log(values1);//[ 1, 2, 3, 4, 5 ]
console.log(values1.length);//5  //it tells the length of the array
//how to assign values later to a array
let values2=[];
values2.push("sandeep");//array is an object we can add elements ny using push 
values2.push(7);
console.log(values2);//[ 'sandeep', 7 ]

//how to fetch a particular value
console.log(values2[1]);//7
values2[2]=8;
console.log(values2);//[ 'sandeep', 7, 8 ]

//insidde array we can string number objects functions also
let data=['sandeep',5,{tech:'js'},function(){console.log("hello world");}];
console.log(data);//[ 'sandeep', 5, { tech: 'js' }, [Function (anonymous)] ]
data[3]();//hello world
