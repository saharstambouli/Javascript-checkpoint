

//Reverse String option 2

function ReverseString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str.charAt(i)

    }

    return reversed;

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

    str1 = upperCase(str.charAt(0))
    for (var i = 1; i < str1.length; i++) {
        if (str1.charAt(i) = " ") {
            result = upperCase(str1.charAt(i + 1))
        }
    }
    return result;
}



//   ***********************************************************//

//Array functions

// maximum and minimum aray

function minMax(arr) {
    if (arr.length == 0) {

        return []
    }
    var min = arr[0]
    var max = arr[0]

    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return [min, max];
}



//sum of array

function sumtableau(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;

    }
    return sum

}

// Filter  array

function filterarray(array, condition) {
    for (let i = 0; i < array.length; i++) {

        if (condition === true) {

            return array[i];
        }

    }

}

//   ***********************************************************//



//Mathematical Functions:

//factorial 

function factorialnumber(num) {
    var factorial = 1
    for (let i = num; i > 1; i--) {

        factorial = factorial * i;

    }
    return factorial
}

// Prime number

function Prime(number) {
    if (number <= 1) {

        return false;
    }
    else {

        for (let i = 2; i < number; i++)
            if (number % i === 0) {
                return false;
            }
    }

    return true
}

//Fibonacci Sequence

function fibonacci(number) {

    if (number <= 1) {

        return true
    }

    else if (number > 1) {

        for (i = 0; i < number; i++) {
            for (j = 1; j < number - 1; j++) {
                if (number = i + j) {
                    return true
                }

            }
        }


    }
    return false
}




