

// Array.prototype.unique = function(num){
//     for (let i = 0; i < this.length; i++){

//     }
//     const result = [];
//     this.forEach(function(ele){
//        result.push(num+ele)
//     })
//     return result;
    // };




Array.prototype.unique = function(){
    const result = []

    this.forEach(function(ele){
        if(!result.includes(ele)){
            result.push(ele)
        }
    })
    return result
};

// let something = [1,2,3,3,4,4]
// console.log(something.unique(2))



Array.prototype.twoSum = function(){

    const result =[]

    for(let i = 0; i < this.length; i++){
        for(let j = i+1; j < this.length; j++){
            if (this[i] + this[j] === 0){
                result.push([i,j])
            }
    }
}
return result
}

// let sumExamp = [1,-1,2,3,4,-3,-2]
// console.log(sumExamp.twoSum())

Array.prototype.transpose = function(){
    const tmp = []
    for(let i = 0; i < this[0].length; i++){
        tmp.push([])
    }
        for(let i = 0; i < this.length; i++){ //2
            for(let j = 0; j < this[0].length; j++){ //3
             tmp[j][i]= this[i][j]
            }
        }
        return tmp
        
};

let trn = [[1,2],[4,5],[6,7]]
console.log(trn.transpose())
