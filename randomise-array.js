function shuffleArray (arr){
    // shuffles the array in place
    for (var i = arr.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rand]]=[arr[rand], arr[i]]
    }
}

function getShuffledArray (arr){
    let newArr = arr.slice()
    for (var i = newArr.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]]=[newArr[rand], newArr[i]]
    }
    return newArr
}

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

    const n = 5000
    for (var i=0 ; i<n ; i++){
        // We'll call getShuffledArrayFun for n times. And for each time we'll increment the counter.  At the end we'll print the results so we can verify that the function actually randomises the array.
        var shuffledArr = getShuffledArrayFun(arr)
        shuffledArr.forEach(
            (value,key)=>{countArr[key][value]++}
        )
    }
    console.log(`CountARR is [ ${countArr} ]`)

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

testShuffledArrayFun(getShuffledArray)
// console.log(getShuffledArray1(['a','b','c','d']))
