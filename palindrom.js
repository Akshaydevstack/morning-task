function palinrom(num) {
   let revesr=[];
    if(num<0){
    return false
    }else{
     let strnum = String(num).split('')
     for(let i=strnum.length-1;i>=0;i--){
        revesr.push(strnum[i])
     }
     if(strnum.join("")==revesr.join(""))
        return true
     }
    }


console.log(palinrom(121));


