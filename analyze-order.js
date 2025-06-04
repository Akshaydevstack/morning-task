const order=[200,450,130,50,1000,20]

let print=order.forEach((value)=>console.log(value))

console.log(print);


let greater=order.filter((value)=>value>100)

console.log(greater);

let disc= order.map((value)=>value-10)
console.log(disc);

let total=disc.reduce((a,b)=>sum =a+b)
console.log(total);
