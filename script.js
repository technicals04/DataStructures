//  PROBLEM 1

// 1: Initialize a variable "sum" to 0.
//  2:Iterate over each element "num" in Set 1. a. Check if "num" is not present in Set 2. - If not present, add "num" to "sum".
// 3: Iterate over each element "num" in Set 2. a. Check if "num" is not present in Set 1. - If not present, add "num" to "sum".
// 4: Print or return the value of "sum" as the output.



function findDistinctSum(set1, set2) {
    let sum = 0;

    for (let i = 0; i < set1.length; i++) {
        let num = set1[i];
        if (!set2.includes(num)) {
        sum += num;
        }
    }

    for (let i = 0; i < set2.length; i++) {
        let num = set2[i];
        if (!set1.includes(num)) {
        sum += num;
        }
    }

    return sum;
}

// Example usage
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(findDistinctSum(set1, set2));  // Output: 13

// CODE EXPLAINATION
// This algorithm iterates over each element in Set 1 and compares it with Set 2. 
// If an element is not present in Set 2, it adds the element to the sum. 
// It then performs the same process for Set 2 by iterating over each element 
// and checking if it is present in Set 1. By only adding elements that are not 
// present in the other set, it ensures that only distinct elements 
// are considered while calculating the sum.


// PROBLEM 2


function dotProduct(v1, v2) {
    let product = 0;
  
    for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
    }
  
    return product;
  }
  
  function areOrthogonal(pairs1, pairs2) {
    for (let i = 0; i < pairs1.length; i++) {
      let v1 = pairs1[i];
      let v2 = pairs2[i];
  
      if (dotProduct(v1, v2) !== 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  let pairs1 = [[1, 0], [3, 4], [-2, 5]]; // Vectors for pairs 1
  let pairs2 = [[0, 2], [-4, 3], [5, 2]]; // Vectors for pairs 2
  
  console.log(areOrthogonal(pairs1, pairs2)); // Output: true (vectors are orthogonal)

//   In this algorithm, the "dotProduct" function takes two vector arrays, v1 and v2, as parameters. 
// It calculates the dot product of the vectors by multiplying the corresponding elements at each index and summing them up.
// The "areOrthogonal" function takes two arrays of vectors, pairs1 and pairs2, as parameters. 
// It iterates over each pair of vectors and checks if the dot product of the pair is equal to 0. 
// If any dot product is not equal to 0, it returns false. Otherwise, it returns true.
// We define two sets of vectors, pairs1 and pairs2, and call the "areOrthogonal" function 
// with these vectors as arguments to determine if they are orthogonal.
  