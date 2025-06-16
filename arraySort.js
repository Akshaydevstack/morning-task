function sortarray(array) {
let sortarr= array.sort((a,b)=>a.price-b.price)
     return sortarr
}

function total(array) {
    let total=array.reduce((acc,value)=>acc+value.price,acc=0)
    return total
}




console.log(
  sortarray([
    { name: "A", price: 200 },
    { name: "B", price: 100 },
    { name: "C", price: 150 },
    { name: "D", price: 200 },
  ])
);



console.log(
  total([
    { name: "A", price: 200 },
    { name: "B", price: 100 },
    { name: "C", price: 150 },
    { name: "D", price: 200 },
  ])
);