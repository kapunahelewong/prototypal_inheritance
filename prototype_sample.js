// Setting up a prototype

// first, make the constructor
function Tea(name, color, leaf) {
	this.name = name;
	this.color = color;
	this.leaf = leaf;
}
//create a species property in the prototype
Tea.prototype.species = "Camellia sinensis";

///create a boil method in the prototype based on the color
Tea.prototype.boil = function() {
	if (this.color === "green") {
		console.log(this.name + " is a " + this.color + " tea. Bring the water to just under a boil.");
	} else if (this.color === "black") {
		console.log("This is a black tea. You can bring the water to a boil.");
	} else {
		console.log("This is neither a green nor a black tea. Follow directions for water temperature.");
	}
};

Tea.prototype.steep = function() {
	if (this.color === "green") {
		console.log("Steep for 3 minutes.");
	} else if (this.color === "black") {
		console.log("Steep for 5-7 minutes.");
	} else {
		console.log("I don't know how long to steep " + this.color + " tea.");
	}
};

var dragons_well = new Tea("Dragon's Well", "green", "loose");
var yunnan = new Tea("Yunnan", "black", "loose");

console.log(dragons_well.name);
dragons_well.boil();
dragons_well.steep();

console.log(yunnan.name);
yunnan.boil();
yunnan.steep();


//Now, let's make a prototype for hot steeped drinks that are not of the Camellia sinensis species.
//It will inherit from the Tea prototype but will have some other characteristics.
// use the call() method to call properties from the Tea prototype so you can keep it DRY

function NonTeaDrink (name, color, leaf, species, country) {
	Tea.call(this, name, color, leaf);
	this.species = species;
	this.country = country;
}

//set the prototype that the NonTeaDrink prototype should inherit from.
NonTeaDrink.prototype = new Tea();

// Set up NonTeaDrink's constructor property to be NonTeaDrink, otherwise it will default to Tea.
NonTeaDrink.prototype.constructor = NonTeaDrink;

//Give the NonTeaDrink prototype a method called origin()
NonTeaDrink.prototype.origin = function () {
	console.log("This drink is from " + this.country + ".");
}

//create an instance of NonTeaDrink
var rooibos = new NonTeaDrink("Rooibos", "red", "loose", "Aspalathus linearis", "South Africa");

console.log(rooibos.name);
rooibos.boil();
rooibos.steep();
rooibos.origin();
console.log(rooibos.species);


//Let's console.log which prototypes our objects are instances of


	if (rooibos instanceof NonTeaDrink) {
		console.log("Rooibos is an instance of NonTeaDrink.");
	};

// If this returns Tea instead of NonTeaDrink, you need to configure the rooibos.contructor property. 
// It doesn't happen automatically. You have to do it as above.
console.log("rooibos constructor is " + rooibos.constructor);