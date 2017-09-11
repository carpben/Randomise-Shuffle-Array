function shuffleArray (array){
    // shuffles the array in place
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]]=[array[rand], array[i]]
    }
}

function getShuffledArray1 (array){
    // returns a shuffled array and leaves the original array intact
    var arrCopy = array.slice() // Preventing side effects from original array
    var shuffledArr=[]
    while (arrCopy.length){
        var randInt = Math.floor(Math.random()*(arrCopy.length))
        shuffledArr.push(arrCopy.splice(randInt,1)[0])
    }
    return shuffledArr
}

function getShuffledArray2 (arr){
    // returns a shuffled array and leaves the original array intact
    var locationArr=[...Array(arr.length).keys()] //[1,2, ... arr.length]
    var shuffledArr=Array(arr.length)
    arr.forEach(value=>{
        var randKey = Math.floor(Math.random()*(locationArr.length))
        var randlocation = locationArr.splice(randKey,1)[0]
        shuffledArr[randlocation]=value
    })
    return shuffledArr
}

function testShuffleArrayFun(randomArrayFun){
    var arr = []
    function arrInit(){
        arr = [0,1,2,3,4]
    }
    arrInit()
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
        console.log(`arr before ${arr}`)
        randomArrayFun(arr)
        console.log(`arr after ${arr}`)
        arr.forEach(
            (value,key)=>{countArr[key][value]++}
        )
        arrInit()
        console.log(`arr end ${arr}`)
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

function testShuffledArrayFun(randomArrayFun){
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
        var shuffledArr = randomArrayFun(arr)
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

testShuffleArrayFun(shuffleArray)
// console.log(getShuffledArray1(['a','b','c','d']))
