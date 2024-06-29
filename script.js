//Reverse String  option 1

function ReverseString(str) {

    let reversed = str.split('').reverse().join('');
    console.log(reversed);

}


//Reverse String option 2

function ReverseString(str) {

    var reversed = "";
    for (var i = str.length; i >= 0; i--) {
        reversed += str.charAt(i)

    }

}
// Count caracters  

function Countcaracters(str) {

    if (str = "") {
        return 0;
    }

    else return str.length;

}


// Capitalize function 

function CapitalizeWords(str) {

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) = "") {
            result = upperCase(str.charAt(i + 1))

        }
    }
}





//   ***********************************************************//

//Array functions

// maximum and minimum aray
function maximumarray(array) {
    var maximum = array[0];
    var minimum = array[0];
    for (let i = 0; i <= array.length; i++) {

        if (array[i] >= array[i + 1]) {
            maximum = array[i];
        }

        else {
            maximum = array[i + 1];
        }


        if (array[i] <= array[i + 1]) {
            minimum = array[i];
        }
        else {
            maximum = array[i + 1]
        }

    }
}


//sum of array

function sumtableau(array) {
    var sum = 0;
    for (let i = 0; i <= array.length; i ++) {
        sum = array[i] + sum ; 

    }
    return sum

}

// Filter  array

function filterarray(array) {
    for (let i = 0; i <= array.length; i ++ ) {

        if (condition = true) {

            return array[i];
        }


    }

}

//   ***********************************************************//



//Mathematical Functions:

//factorial 

function factorialnumber(num) {
    factorial = 1
    for (let i = num; i>= 1; i-1 ) {

        factorial = factorial * i;

    }
    console.log('The factorial of ${num} is ${factorial}.');
}

// Prime number

function Prime(number) {
    if (number <= 1) {

        return false
    }

    for (let i = 2; i < number; i ++ )
        if (number % i === 0) {
            return false

        }
    return true
}

//Fibonacci Sequence

function fibonacci(number) {

    if (number <= 1) {

        return true
    }

    else {

        for (i = 0; i < number; i++) {
            for (j = 1; j < number; j++) {
                if (number = i + j) {

                    return true

                }

                else return false

            }
        }

    }
}




