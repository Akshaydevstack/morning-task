 const items=[1,2,3,4,5,6,7,8,9,10]

 function mul3(array){
    let newarray=[];
    for(i=0;i<array.length;i++){
        if(array[i]%3!==0){
            newarray.push(array[i])
        }
    }
  return newarray;
 }

console.log(mul3(items))