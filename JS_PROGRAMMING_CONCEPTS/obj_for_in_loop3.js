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
for(let key in alien){
    //console.log(key);//name tech laptop
    console.log(key,alien[key]);//name sandeep   tech java    laptop { cpu: 'i7', ram: 4, brand: 'asus' }

}

