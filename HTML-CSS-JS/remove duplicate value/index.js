function removeIndex(array , index){
    let New = []
    for(let i = 0 ; i < array.length ; i++){
        if(i !== index) New.push(array[i])
    }
    return New
}

function RemoveDuplicate(array){
    let isDuplicated, New = []
    for(let i = 0 ; i < array.length ; i++){
        isDuplicated = false
        for(let j = i+1 ; j < array.length ; j++){
            if(array[i] === array[j]) isDuplicated = true
        }
        if(!isDuplicated) New.push(array[i])
    }
    return New
}
