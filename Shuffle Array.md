Some of the answers could be shortened with the latest ES6. I would like to provide a comprehensive updated answer.

## Shuffle Array In place
function shuffleArray (array){
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]]=[array[rand], array[i]]
    }
}

## Leave original Array intact and return a shuffled array
If we want to make a more pure function, and leave the original array intact, we can simply duplicate the array and then run the same algorithm.  
function getShuffledArray (arr){
    let newArr = arr.slice()
    for (var i = newArr.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]]=[newArr[rand], newArr[i]]
    }
    return newArr
}

## Test that the solution is actually random
This function can test the reliability of our randomizing function.
function testShuffledArrayFun(getShuffledArrayFun){
    let arr = [0,1,2,3,4]
    var length = arr.length

    var countArr = [] // for for each possible position in the shuffledArr, for each possible value, we'll create a counter. the counter of element 0 in position 0 will be countArr[0][0]
    for (var i=0 ; i<length ; i++){
        let positionArr= []
        for (var j=0 ; j<length ; j++){
            positionArr.push(0) // Set Counter To 0
        }
        countArr.push(positionArr)
    }

    const n = 2000
    for (var i=0 ; i<n ; i++){
        // We'll call getShuffledArrayFun for n times. And for each time we'll increment the counter.  At the end we'll print the results so we can verify that the function actually randomises the array.
        var shuffledArr = getShuffledArrayFun(arr)
        shuffledArr.forEach(
            (value,key)=>{countArr[key][value]++}
        )
    }

    countArr.forEach(
        (positionArr,key)=>{
            console.log(`Position ${key}:`)
            positionArr.forEach(
                (count,originalValue)=>{
                    console.log(`The Value ${originalValue} appeared ${count*100/n}% `)
                }
            )
        }
    )
}
