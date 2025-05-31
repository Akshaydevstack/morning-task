function largest(num){
    let big=num[0];
    for(let i=0;i<num.length;i++){
    if(big<num[i]){
        big=num[i]
    }
    }
    return big;
}


console.log(largest([2,5,7,8,0,3]));
