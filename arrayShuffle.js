function shuffleArray (array){
    // shuffles the array in place
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]]=[array[rand], array[i]]
    }
}

function getShuffledArray (array){
    var shuffledArr=[]
    while (array.length){
        var randInt = Math.floor(Math.random()*(array.length))
        shuffledArr.push(array.splice(randInt,1)[0])
    }
    return shuffledArr
}

var initArr= arr => ['a','b','c','d','e']
var arr=initArr(arr)

console.log('Testing shuffleArray')
console.log('before')
console.log(arr)

shuffleArray(arr)
console.log('after')
console.log(arr)

arr=initArr(arr)
console.log('Testing getShuffledArray')
console.log('Before')
console.log(arr)

arr=getShuffledArray(arr)
console.log('after')
console.log(arr)
