let laptop={
    cpu:'i9',
    ram:5,
    brand:'Hp',
    greet:function(){
        console.log("hello world");
    },
    compare:function(other){
        if(this.cpu>other.cpu)
console.log(this);
else
console.log(other);

    }
}   
laptop.greet();//hello world


//this keyword
let lap={
    cpu:'i7',
    ram:5,
    brand:'Hp',
    getConfig:function(){
       console.log(this.brand);
    }
}   
lap.getConfig();//Hp

laptop.compare(lap);

//the object properties in js is key and value pair