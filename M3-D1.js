/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/ function sumOfTwoNumbers(n1, n2) {
    if (n1 === n2) {
        sum = 3 * (n1 + n2)
    } else {
        sum = n1 + n2
    }
}
sumOfTwoNumbers(4, 4)
console.log(sum)

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function checkTwoNumbers(n1, n2) {
    if ((n1 || n2) === 50 || ((n1 + n2) === 50)) {
        return true
    }
    else {
        return false
    }
}
console.log(checkTwoNumbers(10, 31))


/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

let str = "Hallo World"
newStr = str.slice(0, 3) + str.slice(4)
console.log(newStr)
/*

4)
 Create a function to find the largest of three given integers.
*/
let largestInt = function (n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        largest = n1
    }
    else if (n2 >= n1 && n2 >= n3) {
        largest = n2
    }
    else {
        largest = n3
    }

}
largestInt(8, 10, 11)
console.log(largest)
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function range(a, b) {
    if ((a >= 40 && a <= 60 && b >= 40 && b <= 60)
        ||
        (a >= 70 && a <= 100 && b >= 70 && b <= 100)) {
        return true
    } else {
        return false
    }
}
console.log(range(40, 60))

/*
6)

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function stringCopies(str, n) {
    if (n < 0) {
        return false
    }

    else {
        return str.repeat(n)
    }
}
console.log(stringCopies("Bimal", 3))

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function displayCityName(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == "Los") || (str.substring(0, 3) == "New"))) {
        return str
    }
    return ''
}
console.log(displayCityName(" York"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
let array = [2, 5, 6]
function sumOfElementsInArray() {
    //for (let i = 0; i < array.length; i++) {
    return sum = array[0] + array[1] + array[2]
    //}
}
console.log(sumOfElementsInArray(sum))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3.
*/
function contains13(n) {
    if (n.indexOf(1) != -1 || n.indexOf(3) != -1) {
        return true
    }
    else {
        return false
    }
}
console.log(contains13([2, 3]))
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/
function doesNotContains13(n) {
    if (n.indexOf(1) === -1 || n.indexOf(3) === -1) {
        return true
    }
    else {
        return false
    }
}
console.log(doesNotContains13([1, 3]))

/*
11)

Create a function to find the longest string from a given array of strings.*/

function longestString(arr) {
    let longest_str = arr[0].length
    let longest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let long = arr[i].length
        if (long > longest_str) {
            longest = arr[0]
            longest_str = long
        }
    }
    return longest
}
console.log(longestString(["you are the best!", "Your are extra ordinary!!"]))
/*12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/
let typeOfAngles = function (angle) {
    if (angle < 90) {
        return "Acute angle"
    }
    if (angle === 90) {
        return "Right angle"
    }
    if (angle > 90 && angle < 180) {
        return "Obtuse angle"
    }
    else if (angle === 180) {
        return "Stright angle"
    }
}
console.log("It is " + typeOfAngles(170))

/*

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

15)

Create a function to check from two given integers, whether one is positive and another one is negative.

16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
