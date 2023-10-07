console.log(2==1);
console.log(2>"1");

console.log(null > 0);
console.log(null ==0); //Nan
console.log(null >= 0);
//the reason is that the equality check == and comparasion < > >= <= is work differently
//comparasion converts null to number, treating it as 0 thats why null>=0 is true and null>0 is false