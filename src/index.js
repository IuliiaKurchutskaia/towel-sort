
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
  if(matrix==""){
    return [];
    }
  if(matrix===undefined){
    return [];
  }
return matrix.reduce((first,second, i,arr)=>(i % 2 === 0) ? first.concat(second) : first.concat(second.reverse()), []);

//use simple command like thise:
// let arr=[].concat(...matrix);

 //return arr.reduce((a,b)=>...);

}
