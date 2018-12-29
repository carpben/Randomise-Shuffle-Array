### ES6 Pure Recursive
```js    
    const getShuffledArr = arr => {
        if (arr.length === 1) {return arr};
        const rand = Math.floor(Math.random() * arr.length);
        return [arr[rand], ...getShuffledArr(arr.filter((_, i) => i != rand))];
    };
```

### ES6 Pure Efficient
```js    
    const getShuffledArr = arr => {
    let newArr = arr.slice()
    for (var i = newArr.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]]=[newArr[rand], newArr[i]];
    }
    return newArr
    };
```

### Typescript Pure Function Type
```ts
    type GetShuffledArr= <T>(arr:ReadonlyArray<T>) => ReadonlyArray<T> 
    interface IGetShuffledArr{
        <T>(arr:ReadonlyArray<T>): ReadonlyArray<T>
    }
```
You can use either. 

----------------------------------------------------

### Test Reliability and Performance
As you can see in this page, the community has used incorrect solutions in the past. I used this function to test the reliability and performance of array randomizing functions (build for pure functions).
```js    
    function testShuffledArrayFun(getShuffledArrayFun){
        let arr = [0,1,2,3,4]

        var countArr = arr.map(el=>{
            return arr.map(
                el=> 0
            )
        }) // for for each possible position in the shuffledArr, for each possible value, we'll create a counter. 
        const t0 = performance.now()
        const n = 1000000
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
```

### Shuffle Array In place (Mutable)
```js
function shuffleArray (array){
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]]=[array[rand], array[i]]
    }
}
 ```













































### ES6 Pure Recursive

```js
    const getShuffledArr = arr => {
        if (arr.length === 1) {return arr};
        const rand = Math.floor(Math.random() * arr.length);
        return [arr[rand], ...getShuffledArr(arr.filter((_, i) => i != rand))];
    };
```

### Typescript Pure Recursive 

```ts 
    const getShuffledArr:<T> (arr:ReadonlyArray<T>) => ReadonlyArray<T> = 
        (arr) => {
            if (arr.length === 1) {return arr};
            const rand = Math.floor(Math.random() * arr.length);
            return [arr[rand], ...getShuffledArr(arr.filter((_, i) => i != rand))]
        } 
```

-----------------------------------------

### Shuffle Array In place
```js
    function shuffleArray (array){
        for (var i = array.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            [array[i], array[rand]]=[array[rand], array[i]]
        }
    }
```

----

### Test Reliability
I use this function to test the reliability randomizing functions.
```js
    function testShuffledArrayFun(getShuffledArrayFun){
        let arr = [0,1,2,3,4]

        var countArr = arr.map(el=>{
            return arr.map(
                el=> 0
            )
        }) // for for each possible position in the shuffledArr, for each possible value, we'll create a counter. the counter of element 0 in position 0 will be countArr[0][0]

        const n = 100000
        for (var i=0 ; i<n ; i++){
            // We'll call getShuffledArrayFun for n times. And for each time we'll increment the counter. 
            var shuffledArr = getShuffledArrayFun(arr)
            shuffledArr.forEach(
                (value,key)=>{countArr[key][value]++}
            )
        }
        console.log(`Count Values in position`)
        console.table(countArr)

        const frequencyArr = countArr.map( positionArr => (
            positionArr.map(  
                count => count/n
            )
        )) 

        console.log("Frequency of value in position")
        console.table(frequencyArr)
    }
```
