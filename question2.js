const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200},
 {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ];
/*1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one
2 . Filter and show the product that will be expensive in the array
3 . Calculate the full price of all product combined
4 . Calculate the full price of all product combined and remove product that are under the 10 dollar*/
const cheapProducts = item.filter(product => product.price <100);
 console.log(cheapProducts);
const expensiveProducts = item.filter(product => product['price'] > 200);
 console.log(expensiveProducts);
var sum = 0;
const sumOfPrice = item.map(elem => sum += elem['price']);
 console.log(sum);
const bigSum = item.filter(prod => prod.price >= 10 ? sum +=prod.price: undefined);
console.log(sum);