// return the total number of smiling faces in the array
// function countSmileys(arr) {
//     var count = 0;
// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i][0])
//     if (arr[i][0] === ':' || arr[i][0] === ';'){
//         console.log(arr[i][1])
//          if (arr[i][1] == ')'||arr[i][1] == 'D' ){
//             count += 1;
//             console.log(arr[i])
//          }
//          else if (arr[i][1] == '-' ||arr[i][1] == '~'){
//              if (arr[i][2] == ')'||arr[i][2] == 'D' ){
//                  count += 1
//              }
//          }

//     }
// }
// return(count)
// }
// countSmileys([':)', ';(', ';}', ':-D']);


// Regex validate PIN code

function validatePIN(pin) {
    var x = pin.split('')
    var y = []
    //return true or false


    for (var i = 0; i < x.length; i++) {
        if (parseInt(x[i]) == 0 || parseInt(x[i])) {
            y.push(parseInt(x[i]))
        } else {
            return false;
        }
    }
    console.log(y)
    if (y.length == 4 || y.length == 6) {
        console.log(y.length)
        return true;
    } else {
        return false
    }
    //   for (var i = 0; i < pin.length; i++){
    //       if 
    //   }

}

console.log(validatePIN("000004"))