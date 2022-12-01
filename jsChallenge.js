const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album',
 price:10}, {name: 'Book', price:5}, {name: 'Phone',
  price:500}, {name: 'Computer', price:1000} ]
  //first Question ---cheap products---
  const cheapProducts = item.filter(product => product.price < 100);
  console.log(cheapProducts);
  //second Question ---expensive products---
  const expensiveProducts = item.filter(product => product.price > 200);
  console.log(expensiveProducts);
  //ThirdQuestion -----Sum of All prices---
  let sumOfPrice = 0;
  for(let i = 0; i < item.length; i++){
    sumOfPrice += item[i].price;
  }
  console.log(sumOfPrice)
// fourthQuestion ----sum of prices except less than 10-----
let newSumOfPrice = 0;
for(let k = 0; k < item.length; k++){
    if(item[k].price >=10){
        newSumOfPrice += item[k]['price'];
    }
}
console.log(newSumOfPrice);