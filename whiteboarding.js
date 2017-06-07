// Palindrome

// function palin(phrase){
// var x = phrase.toLowerCase().split('')
// console.log(x)
// for (var i = 0; i < x.length; i++){
//     console.log(x[i])
//     console.log(x[(x.length-1)-i])
//     if (x[i] !== x[(x.length-1)-i]){
//         return false
//     }
// }
// return true;
// }

// console.log(palin('race car')) 
// true

// var str = "B I O S T A L L"  
// str = str.replace(/ /g,'');
// str = str.replace(//g,'');

// var str = "B I O S. T, A, L L"  
// str = str.replace(/\,/g,''); 

// console.log(str)


// Hoisting
// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();
// console.log(text)


var name = "Richard";
​
​function showName () {
	var name = "Jack"; // local variable; only accessible in this showName function​
	console.log (name); // Jack​
}
console.log (name);