function processArray(arrayOfNumbers) {
    var processedArray = [] //creating an empty array for processed values to be pushed into.
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        if(arrayOfNumbers[i] % 2 === 0){ //check whether number is even or odd
            processedArray.push(arrayOfNumbers[i]**2)
        }else{
            processedArray.push(arrayOfNumbers[i]**3)
        }
    }
    return processedArray
}
let a = processArray([1,2,3,4,5])
// console.log(a)

function formatArrayStrings(arrayOfStrings, processedArray) {
    let formattedArrayStrings = []
    for (var i = 0; i < arrayOfStrings.length; i++){
        if(processedArray[i] % 2 === 0){
            formattedArrayStrings.push(arrayOfStrings[i].toUpperCase())
        }else {
            formattedArrayStrings.push(arrayOfStrings[i].toLowerCase())
        }
    }
    return formattedArrayStrings
}

// console.log(formatArrayStrings(['Boy', 'Girl', 'man', 'womAN'], a))

export {processArray, formatArrayStrings};