
const arr = [1, 2, 3, 4, 5]

//Creates a new array concatenating array with any additional arrays and/or values.
function concatArr(arr, ...elements) {
    const newArr = [...arr]
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].length > 1) {
            for (j = i; j < elements[i].length; j++) {
                newArr.push(elements[i][j])
            }
        } else {
            newArr.push(elements[i])
        }
    }
    return newArr;
}

//Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
function arrayCompact(arr) {
    const newTrueArray = [];
    arr.forEach((value) => {
        if (!!value) {
            newTrueArray.push(value)
        }
    })
    return newTrueArray
}



//Creates a slice of array with n elements dropped from the beginning.
function arrayDrop(arr, n = 1) {
    const newArr = [];
    if (arr.length >= n) {
        for (let i = n; i < arr.length; i++) {
            newArr.push(arr[i])
        }
    }
    return newArr
}


//Creates a slice of array with n elements dropped from the end.

function dropRight(arr, n = 0) {
    const newArr = [];
    for (let i = arr.length - (n + 1); i >= 0; i--) {
        newArr.push(arr[i])
    }
    const sortedArray = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        sortedArray.push(newArr[i])
    }
    return sortedArray
}



//Fills elements of array with value from start up to, but not including, end.
// This will work in a muteable way
function fillArray(arr, value, start = 0, end = 0) {
    if (start == 0) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = value
        }
    } else if (end == 0) {
        for (let i = start; i <= (start + end); i++) {
            arr[i] = value;
        }
    } else {
        for (let i = start; i < (start + end) - 1; i++) {
            arr[i] = value
        }
    }
    return arr
}


//This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
// This is basically for iterating
var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true },
    { 'user': 'alex', 'active': false },
    { 'user': 'afost', 'active': true }
];

function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}


findIndex(users, (user, index) => {
    if (user.active == true) {
        // console.log(`${user.user} is on ${index}`)
    }
})



//Flattens array a single level deep.

function flattenArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 1) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j].length >= 1) {
                    for (let k = 0; k < arr[i][j].length; k++) {
                        if (arr[i][j][k].length >= 1) {
                            for (let l = 0; l < arr[i][j][k].length; l++) {
                                newArr.push(arr[i][j][k][l])
                            }
                        } else {
                            newArr.push(arr[i][j][k])
                        }
                    }
                } else {
                    newArr.push(arr[i][j])
                }
            }
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}



//Array flatten with recursive number

function flattenWithNumber(arr, num){
    const newArr = [];
    if(num == 1){
        for (let i = 0; i < arr.length; i++){
            newArr.push(arr[i])
        }
    }else if(num == 2){
        for (let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                newArr.push(arr[i][j])
            }
        }
    }
    return newArr
}


//Gets the first element of array.
function arrayHead(arr){
    if(arr.length >= 1){
        return arr[0]
    }else{
        return 'undefined'
    }
}



//Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
function indexOf(arr, value, indexfrom=0){
    for(let i=indexfrom; i<arr.length; i++){
        if(arr[i] == value){
            return `${value} is found on index: ${i}`
        }
    }
}

//Gets all but the last element of array.
function initial(arr){
    const newArr = []
    for(let i=0; i<arr.length-1; i++){
        newArr.push(arr[i])
    }
    return newArr
}



// /Converts all elements in array into a string separated by separator.

function join(arr, separator){
    const newArr =  [];
    for(let i=0; i<arr.length; i++){
        if(i < arr.length-1){
            newArr.push(`${arr[i]}${separator}`)
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr.toString()
}


//Gets the element at index n of array. If n is negative, the nth element from the end is returned.
function nthElement(arr, nth){
    if(nth > 0){
        return arr[nth]
    }else if( nth < 0){
        return arr[arr.length-nth]
    }else{
        return arr[0]
    }
}

console.log(nthElement(['a', 'b', 'c', 'd'], 0))