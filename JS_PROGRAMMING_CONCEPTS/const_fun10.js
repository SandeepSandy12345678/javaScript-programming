function Alien(name,tech) {//when we give first character upper case it will consider it as constructor
this.name=name;
this.tech=tech;
this.work=function(){
    console.log("solving bugs from 8hrs");
}

//we can see it has default line return this;
}  
let alien1=new Alien('sandeep','java'); //this is a constructor function because we are using 'new' keyword
console.log(alien1);//Alien { name: 'sandeep', tech: 'java' }
let alien2=new Alien('sagar','js');
console.log(alien2);//Alien { name: 'sagar', tech: 'js' }
alien1.work();//solving bugs from 8hrs