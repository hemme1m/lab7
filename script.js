var groceryList = [];
var total = 0;

var groceries = {
	banana: {name: "Banana", price: 0.2, quantity: 10},
	apple: {name: "Apple", price: 0.5, quantity: 5},
	hotDog: {name: "Koegel Hot Dogs", price: 3, quantity: 1},
	bread: {name: "Loaf of Bread", price: 2.5, quantity: 1},
	peanutButter: {name: "Peanut Butter", price: 3, quantity: 1},
	jam: {name: "Strawberry Jam", price: 3, quantity: 1},
	iceCream: {name: "Ben & Jerry's Ice Cream", price: 5, quantity: 2}
}

for (var key in groceries) {
	groceryList.push(groceries[key]);
}

for (var i = 0; i < groceryList.length; i++) {
  total += (groceryList[i].price * groceryList[i].quantity);
  console.log("Item: " + groceryList[i].quantity + "x" + " " + groceryList[i].name + ", Price: $" + groceryList[i].price.toFixed(2) + "/each");
}

console.log("");
console.log("The total for your basket is $" + total.toFixed(2));