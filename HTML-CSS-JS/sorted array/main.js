function sortedArray(array , mode = 1){
    /**
     * Sort an Array of elements.
     * @param array The Array to sort.
     * @param mode a positive number if you want an increasing sort and negative for decreasing.
     * @returns A sorted Array.
     **/
	let sortedArray = array
	for(let i = 0 ; i < array.length ; i++){
		for(let j = i+1 ; j < array.length ; j++){
			if (mode*(sortedArray[j] - sortedArray[i]) < 0 ){
				[sortedArray[i] , sortedArray[j]] = [sortedArray[j] , sortedArray[i]]
			}
		}
	}
	return sortedArray
}

/////////////TEST
let my_list = [1,2,-5,0,8,-9]
console.log(sortedArray(my_list , 1));
console.log(sortedArray(my_list , -1));

////////////OUTPUT
//[ -9, -5, 0, 1, 2, 8 ]
//[ 8, 2, 1, 0, -5, -9 ]