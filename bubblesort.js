// Sorting an Array of Numbers


const bubbleSort = (arr) =>  {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3,5,2,1,4,23,9]))