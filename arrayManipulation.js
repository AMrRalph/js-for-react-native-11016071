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