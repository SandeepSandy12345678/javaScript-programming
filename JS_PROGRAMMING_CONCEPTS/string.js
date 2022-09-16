let first_name="sandeep";
let last_name="kaniyar";
console.log(first_name +" "+ last_name);//sandeep kaniyar
//when we need to have double quote in a string console
let user='sanndeep works at"Nichi-in"';
console.log(user);//sanndeep works at"Nichi-in"
let user1="sanndeep works at \"Nichi-in\"";
// '\' is called as escape character and tells this double doesnt have meaning of js string
console.log(user1);//sanndeep works at "Nichi-in"
let user2="sandeep \n kaniyar";
console.log(user2);/*sandeep 
kaniyar
after \n the data will be presented in the next line*/
let user3="san\tdeep kaniyar";
//\t is used for tab space
console.log(user3);//san	deep kaniyar
let user4="sandee\bep kaniyar";
console.log(user4);//sandeep kaniyar
// \b will delete the extra character 
let user5="sandee\tep kaniyar";
console.log(user5);//sandee  ep kaniyar
// \v is for vertical