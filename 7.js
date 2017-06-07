// Even or Odd - Which is Greater?

// Given a string of numbers confirm whether the total of all the individual even numbers are greater than the total of all the indiviudal odd numbers. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return:

// 'Even is greater than Odd'

// If the sum of odd numbers is greater than the sum of even numbers return:

// 'Odd is greater than Even'

// If the total of both even and odd numbers are identical return:

// 'Even and Odd are the same'

// Solution

function evenOrOdd(str) {
    var x = str.split('')
    var even = 0;
    var odd = null;
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            even += parseInt(x[i], 10)
        } else {
            odd += parseInt(x[i], 10)
        }
    }
    if (even > odd) {
        return 'Even is greater than Odd'
    } else if (odd > even) {
        return 'Odd is greater than Even'
    } else if (odd === even) {
        return 'Even and Odd are the same'
    }
}



// **************************************************************


// ######################Complete the solution so that it reverses the string value passed into it.##########################

// function solution(str) {
//     var final = [];
//     var spl = str.split('');
//     for (var i = spl.length - 1; i >= 0; i--) {
//         final.push(spl[i])
//     }
//     return final.join('')
// }
var solution = str => {
    return str.split('').reverse().join('')
}

console.log(solution('world')); // returns 'dlrow'

// function solution(str) {
//     return str.split('').reverse().join('')
// }

// console.log(solution('world')); // returns 'dlrow'


// hoisting examples

// var is hoisted, const and let are not

// console.log(x)
// var x = 'hi'



// console.log(func('hi'))

// function func(y){
//     return y
// }

// console.log(funct('yep'))
// var funct = function(z){
//     return z
// }


// ###########################Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

// For example, when an array is passed like [19,5,42,2,77], the output should be 7.

// [10,343445353,3453445,3453545353453] should return 3453455.

// Hint: Do not modify the original array. #####################################

// function sumTwoSmallestNumbers(numbers) {
//     //Code hereretur
//     numbers.sort(function (a, b) {
//         return a - b;
//     })
//     return numbers[0] + numbers[1]
// };

// console.log(sumTwoSmallestNumbers([19, 42, 2, 77]))



// ###########################Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"###########################


// function flattenAndSort(array) {
//     var spl = []
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array[i].length; j++) {
//             spl.push(array[i][j])
//         }
//     }
//     return spl.sort(function (a, b) {
//         return a - b;
//     });
//     // Good luck, brave code warrior!

// }


// console.log(flattenAndSort([
//     [3, 2, 1],
//     [5, 4],
//     [15, 27]
// ]))




// function typer(x){
//     var message;
//     TypeError = x + "is invalid";
//     // message.innerHTML = "";
//     // x = document.getElementById("demo").value;
//    if(x==5){
//        throw new Error(x + ' is invalid')
//    }
//    else {
//        return x;
//    }
// }

// console.log(typer(5));


function numberCheck(y) {
    // return s;
    if (Number.isInteger(y)) {
        return y
    } else {
        var y = parseInt(y)
    }
    return y;
}

console.log(numberCheck('hi'))



// function howManyPizzas(numberofGuests, SlicesPerPerson, Soda) {
// 	var slicesPerPizza = 8;
// 	var litersPerPerson=0.5;
// 	var totalSlices = numberofGuests * SlicesPerPerson
// 	var totalPizzas = totalSlices/ slicesPerPizza;

// 	return totalPizzas;
// };


// var TurnerParty = 72;
// var perPerson = 2;
// var secondOption = 4;


// console.log(howManyPizzas(TurnerParty, perPerson));

// function howMuchFood(numberOfPeople, slicesPerPerson){
// var slicesPerPizza = 8;
// var sodaPerPerson = .5;
// var totalSlices = numberOfPeople * slicesPerPerson;
// var totalPizzas = totalSlices / slicesPerPizza;
// var totalSoda = numberOfPeople * sodaPerPerson;

// return "we need to make " + totalPizzas + " pizzas and " + totalSoda + " sodas.";
// }

// var turnerFamily = 7;
// var knightFamily = 6;
// var piecesPerPerson = 5;


// console.log(howMuchFood((knightFamily), piecesPerPerson))
// console.log(howMuchFood(turnerFamily, piecesPerPerson))