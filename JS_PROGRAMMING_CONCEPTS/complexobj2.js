//complex object and delete properities of object
//complex object an object inside another object
let alien={
    name:'sandeep',
    tech:'java',
    //complex object
    laptop:{
        cpu:'i7',
        ram:4,
        brand:'asus'
    }

}
console.log(alien);
/*{
  name: 'sandeep',
  tech: 'java',
  laptop: { cpu: 'i7', ram: 4, brand: 'asus' }
}*/
console.log(alien.laptop.brand);//asus
console.log(alien.laptop.brand1?.length);//undefined
console.log(alien.laptop.brand?.length);//4

//to delete properities from object
delete alien.laptop;
console.log(alien);//{ name: 'sandeep', tech: 'java' }



