//object literal
let alien={}
console.log( typeof alien);//object

let alein={
name:'sandeep',
tech:'java',
exp:4
}
console.log(alein);//{ name: 'sandeep', tech: 'java', exp: '4' }
//only name 
console.log(alein.name);//sandeep
//or by another way to fetch is by
console.log(alein['tech']);//java
let input='name';
console.log(alein.index);//undefined
console.log(alein[input]);//sandeep
