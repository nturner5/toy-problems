// WHO LIKES IT


// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For more than 4 names, the number in and 2 others simply increases.

// function likes(names) {
//     console.log(names.length)
//     if (names.length === 0) {

//         return 'no one likes this';
//     } else if (names.length === 1) {
//         return names[0] + ' likes this';
//     } else if (names.length === 2) {
//         return names[0] + ' and ' + names[1] + ' like this';
//     } else if (names.length === 3) {
//         return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//     } else if (names.length > 3) {
//         return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
//     }

// }

// likes(['Peter', 'John', 'Max', 'clyde']);


// that takes in a string str and cumulatively appends its midpoints

const midPoint = str => {
   //code me
   var results = []
   var spl = str.split(' ')
   for(var i = 0; i<spl.length; i++){
       var spl2 = spl[i].split('');
    //    console.log(spl2)
    //    console.log(spl2.length%2)
       if (spl2.length%2==0){
        //    console.log(spl2[(spl2.length/2)-1] + spl2[(spl2.length/2)] )
           results.push(spl2[(spl2.length/2)-1] + spl2[(spl2.length/2)])
       }
       else {
        //    console.log(spl2[Math.round(spl2.length/2)])
           results.push(spl2[Math.round(spl2.length/2 -1 )])
       }
    //    console.log(spl2)
    //    for (var j = 0; j < spl2.length; j++){
        //    console.log(spl2[j])
    //    }
   }
//    console.log(spl2)
//    console.log(results)
   return results;
}

console.log(midPoint('hello howw are'))