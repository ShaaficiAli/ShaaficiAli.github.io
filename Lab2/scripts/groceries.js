// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "BurgerHelper",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 12.00
	},
	{
		name: "cheeto",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 8.00
	},
	{
		name: "celery",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 7.00
	},
	{
		name: "FreeMeet",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 12.00
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 15.00
	},
	{
		name: "Candy",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.00
	},
	{
		name: "Jericho",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.99
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var Veg = false;
	var Glut = false;
	var Org = false;

	if (restriction.includes("Vegetarian")){
		Veg = true;
	}
	if (restriction.includes("GlutenFree")){
		Glut = true;
	}
	if(restriction.includes("Organic")) {
		Org = true;
	}
	for (let i=0; i<prods.length; i+=1) {

		if (restriction.includes("None")){
			product_names.push({name:prods[i].name,price:prods[i].price});
		}
		else if ((Veg == prods[i].vegetarian) && (Org == prods[i].organic) && (Glut == prods[i].glutenFree)){
			product_names.push({name:prods[i].name,price:prods[i].price});
		}
		
		
	}
	
	product_names.sort(function(a, b){return a.price-b.price;});
	console.log(product_names);
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}