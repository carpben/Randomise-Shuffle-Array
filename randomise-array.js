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
        [newArr[i], newArr[rand]]=[newArr[rand], newArr[i]];
    }
    return newArr
}

function getShuffledArray15 (arr){
    let newArr = [...arr]
    for (var i = newArr.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]]=[newArr[rand], newArr[i]];
    }
    return newArr
}


function getShuffledArray2 (arr){
    let newArr = arr.slice()
    for (let i = 0; i < newArr.length ; i++) {
        var rand = (i + ( Math.floor( Math.random() * (newArr.length - i) ) ));
        [newArr[i], newArr[rand]]=[newArr[rand], newArr[i]];
    }
    return newArr
}

// function getShuffledArray3(arr) {
//     let array = arr.slice()
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]]=[array[j],array[i]]
//     }
//     return array;
// }

function getShuffledArray4(list){
	// const newArray = [];
    console.log('4 started')
	for ( let i = 0; i < list.length; i++ ) {
		// console.log( newArray.push(list[i]) );
		var rand = Math.floor( Math.random() * (i + 1) ); // explain
        // console.log("i is ", i, " rand is ", rand);
        // console.log(list)
		[ list[i], list[rand] ] = [ list[rand], list[i] ]; // explain
	}
	return list;
	// shouldn't this function return something?
}

function testShuffledArrayFun(getShuffledArrayFun){
    let arr = [0,1,2,3,4]

    var countArr = arr.map(el=>{
        return arr.map(
            el=> 0
        )
    }) // for for each possible position in the shuffledArr, for each possible value, we'll create a counter. the counter of element 0 in position 0 will be countArr[0][0]
    const t0 = performance.now()
    const n = 1000
    for (var i=0 ; i<n ; i++){
        // We'll call getShuffledArrayFun for n times. And for each time we'll increment the counter. 
        var shuffledArr = getShuffledArrayFun(arr)
        shuffledArr.forEach(
            (value,key)=>{countArr[key][value]++}
        )
    }
    const t1 = performance.now()
    console.log(`Count Values in position`)
    console.table(countArr)

    const frequencyArr = countArr.map( positionArr => (
        positionArr.map(  
            count => count/n
        )
    )) 

    console.log("Frequency of value in position")
    console.table(frequencyArr)
    console.log(`total time: ${t1-t0}`)
}



const getShuffledArr = arr => {
    if (arr.length === 1) {return arr};
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...getShuffledArr(arr.filter((_, i) => i != rand))];
};

function iFilter (_, i){
    console.log(this)
    return (i != this)
}

const getShuffledArr2 = arr => {
    if (arr.length === 1) {return arr};
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...getShuffledArr2(arr.filter(iFilter, rand))];
};


testShuffledArrayFun(getShuffledArr)

testShuffledArrayFun(getShuffledArray)

testShuffledArrayFun(getShuffledArr2)


