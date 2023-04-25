
Array.prototype.myEach = function(callback){
    
    for( let i = 0; i < this.length; i++){
        callback(this[i]);
    }
    // return result
}

let p = function(n){
    console.log(n*n);
    // return n * n;
}

// let example = [1,2,3,4,5]
// example.myEach(p);



Array.prototype.myMap = function(callback){
    let result = [];
    // for( let i = 0; i < this.length; i++){
    //     result.push(callback(this[i]));
    // }
    return result;
}

// let sum = function(n){
//     return n + n;
// }

let example = [1,2,3,4,5]
// console.log(example.myMap(sum));


Array.prototype.myReduce = function(callback, acc){

    // let j = 0;
    // if (acc === undefined ){
    //     acc = this[0];
    //     j = 1;
    // }

    // for( let i = j; i < this.length; i++){
    //     acc = callback(this[i], acc)

    // }


    return acc;
}

let sum = function(n, m){
    return n + m;
}

console.log(example.myMap(sum, 20));