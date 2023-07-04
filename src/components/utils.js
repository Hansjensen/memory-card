function arrayShuffle(arr) {
    const length = arr.length

    for(let i = length - 1; i > 0; i--){
        let index = Math.floor(Math.random() * length)
        let temp = arr[index]
        arr[index] = arr[i]
        arr[i] = temp;
    }
    return arr;
}

function selectedCheck() {
    
}

export {arrayShuffle}
