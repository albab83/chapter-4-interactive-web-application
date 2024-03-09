// function myDisplay(some) {
//     console.log(some)
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplay(sum);
// }

// myCalculator(54, 90)

// // =======================================================================\\

// function myDisplay(some) {
//     console.log(some)
// }

// function myCalculator(num1, num2, callback) {
//     let sum = num1 + num2;
//     callback(sum);
// }

// myCalculator(54, 90, myDisplay)

// // =======================================================================\\

// const myNumber = [4, 7, 8, 9, 10, -20, 8, -4]
// const postNumber = removeNeg(myNumber, (x) => x <= 0)

// console.log(postNumber)

// function removeNeg(numbers, callback) {
//     const myArray = []
//     for (const x of numbers) {
//         if(callback(x)) {
//             myArray.push(x);
//         }

//     }

//     return myArray;
// }

// // =======================================================================\\

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  

//   console.log(person.fullName.call(person1, "manchester", "london"))

// // =======================================================================\\


