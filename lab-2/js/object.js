const output = document.getElementById('output');

function Car(name, category, numModel, color, numCategory, numSeries, year, madeIn, material, minAge, brand, language, numRegister, website) {
    this.name = name;
    this.category = category;
    this.numModel = numModel;
    this.color = color;
    this.numCategory = numCategory;
    this.numSeries = numSeries;
    this.year = year;        
    this.madeIn = madeIn;
    this.material = material;        
    this.minAge = minAge;
    this.brand = brand;  
    this.language = language;
    this.numRegister = numRegister;
    this.website = website;
    this.describe = function() {
        let description = `The ${this.name} car is a ${this.category}. This model, identified by ${this.numModel}, is available in a ${this.color} color and belongs to the ${this.numCategory} category within the ${this.numSeries} series. Manufactured in ${this.year} at ${this.madeIn}, this car is crafted from ${this.material} making it easier to recycle.It is suitable for individuals aged ${this.minAge} and above. The brand is ${this.brand} and the languages on the package are ${this.language}. The car is registered under the number ${this.numRegister} and more information can be found on the website ${this.website}.`;
        return description;
    };
};

const car1 = new Car("Brick Rides", "Bricking Speed", "128/250", "red, yellow, blue, black and white", "5/5","HKJ89-N7C5", 2021, "Malaysia", "plastic and paper", 3, "Mega", "English, French, Spanish and Russian", "004644/2021", "hotwheels.com"); 

const car2 = new Car("Brick Rides", "Bricking Speed", "128/250", "red, yellow, blue, black and white", "5/5","HKJ89-N7C5", 2021, "Malaysia", "plastic and paper", 3, "Mega", "English, French, Spanish and Russian", "004644/2021", "hotwheels.com"); 

const car3 = new Car("Brick Rides", "Bricking Speed", "128/250", "red, yellow, blue, black and white", "5/5","HKJ89-N7C5", 2021, "Malaysia", "plastic and paper", 3, "Mega", "English, French, Spanish and Russian", "004644/2021", "hotwheels.com"); 