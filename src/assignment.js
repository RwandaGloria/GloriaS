// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================
let sum=0; //this is the variable to hold the sum of all numbers
//in the array.

let  countofEvenNumbers = 0; 
//This will hold the number of even numbers 

/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

function sumOfNumbers (arrayOfNumbers) {
    for(let i =0; i <= arrayOfNumbers.length - 1; i++)
    {
      sum += arrayOfNumbers[i];
    //sum = sum + arrayOfNumbers
    }
   return sum;
}




function countEvenNumbers(arrayOfNumbers) {
 
  for(let i=0; i<=arrayOfNumbers.length - 1; i++)
  {
    if(arrayOfNumbers[i] % 2 == 0) //If each item in the array is divided by 2
      //and the remainder is 0, then it is even. 
    {
      countofEvenNumbers = countofEvenNumbers + 1;
    }
    else{
        countofEvenNumbers = countofEvenNumbers + 0;
    }
    
  }

  return countofEvenNumbers;
}




// assignment.countEvenNumbers = countEvenNumbers;


function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

