let number = prompt("Which number do you want to calculate the factorial ?"); 
let result = 1 ;
for(let count = 1; count <= Number(number); count++){
    result = result * count ;
  }
console.log(`Result is : ${result}!`);