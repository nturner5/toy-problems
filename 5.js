// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// function prefill(n, v) {
//     var res = [];
//     var y = n;
//     var pusher = function () {
//         if (y > 0) {
//             res.push(v)
//             y--
//             if (y > 0) {
//                 pusher()
//             }
//         }
//     }
//     if (!Number.isInteger(y)) {
//         var y = parseFloat(y)
//     }
//     if (!Number.isInteger(y) || y < 0) {
//         throw new TypeError(n + ' is invalid')
//     }
//     if (!v) {
//         // res.push(undefined)
//         // return res;
//     }
//     if (y == 0) {
//         return [];
//     }
//     pusher();
//     return res;
// }


// console.log(prefill( 2.52, 'hi'))




// Alternate Solution

// function prefill(num, value) {
//   if(typeof num === 'boolean' || ~~num != num || +num < 0) throw new TypeError(num + ' is invalid')
//   return Array.apply(null, Array(+num)).map(function (d,i) { return value })
// }

// function prefill(n, v) {
//   if (/\D/g.test(n) || n < 0) {throw new TypeError(n + ' is invalid')}
//   return Array.apply(null, new Array(parseInt(n, 10))).map(function() {return v;});
// }

// Write a function that will find all the anagrams of a word from a list.
//  You will be given two inputs a word and an array with words.
//  You should return an array of all the anagrams or an empty array if there are none.

// function anagrams(word, words) {
//     var correct = [];
//     var sort = word.split('').sort().join('');
//     for (var i = 0; i < words.length; i++){
//        var sorted = words[i].split('').sort().join('');
//     if (sorted === sort){
//         correct.push(words[i])
//     }
//     // console.log(correct)
//     }
// return correct;
// }


function anagrams(word, words) {
  word = word.split('').sort().join('');
//   return words.filter(function(v) {return word == v.split('').sort().join('');});
return words.filter(function(v) { return word == v.split('').sort().join('');})
}


console.log(anagrams('carp', ['car', 'cra', 'capr', 'parc', 'carttttt', 'tump']))



