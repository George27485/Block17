const coffeeMenu = require("./coffee_data");

module.import = coffeeMenu

//*2. Print an array of all the drinks on the menu.

const allDrinks= coffeeMenu.map(coffeeMenu => coffeeMenu.name);
console.log(allDrinks)

//3. Print an array of drinks that cost 5 and under.
const underFive= coffeeMenu.filter(coffeeMenu => coffeeMenu.price <=5).map(coffeeMenu=>coffeeMenu.name);
console.log(underFive)

//4. Print an array of drinks that are priced at an even number.
const evenDrinks= coffeeMenu.filter(coffeeMenu => coffeeMenu.price %2 ===0).map(coffeeMenu=>coffeeMenu.name);
console.log(evenDrinks)

//5. Print the total if you were to order one of every drink.

let totalSum= 0;
    for(let i = 0; i < coffeeMenu.length; i++){
       totalSum += coffeeMenu[i].price;
    }
    console.log("total sum of all drinks: $" + totalSum)


//6. Print an array with all the drinks that are seasonal.
const seasonDrinks = coffeeMenu.filter(coffeeMenu=> coffeeMenu.seasonal === true).map(coffeeMenu => coffeeMenu.name);
console.log(seasonDrinks);



//7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".*/
console.log(` ${seasonDrinks} with imported beans`)
