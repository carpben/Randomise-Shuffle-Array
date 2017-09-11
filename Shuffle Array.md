Some of the answers could be shortened with the latest ES6. I would like to provide a comprehensive updated answer.

## Shuffle Array In place
function shuffleArray (array){
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]]=[array[rand], array[i]]
    }
}

## Leave original Array intact and return a shuffled array
function getShuffledArray (array){
    var shuffledArr=[]
    while (array.length){
        var randInt = Math.floor(Math.random()*(array.length))
        shuffledArr.push(array.splice(randInt,1)[0])
    }
    return shuffledArr
}
