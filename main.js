const menu = {
    _courses: {
        appetisers: [],
        mains: [],
        desserts: []
    },
    get appetisers() {
        return this._courses.appetisers;
    },
    set appetisers(appetiser) {
        return this._courses.appetisers.push(appetiser);
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(main) {
        return this._courses.mains.push(main);
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessert) {
        return this._courses.desserts.push(dessert);
    },
    get courses() {
        return {
            appetisers: this.appetisers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        if (courseName === 'appetiser') {
            this.appetisers = dish;
        } else if (courseName === 'main') {
            this.mains = dish;
        } else if (courseName === 'dessert') {
            this.desserts = dish;
        } else {
            console.log(`Wrong course name!`);
        }
    },
    getRandomDishFromCourse(courseName) {
        let dishes;
        if (courseName === 'appetiser') {
            dishes = this.appetisers;
        } else if (courseName === 'main') {
            dishes = this.mains;
        } else if (courseName === 'dessert') {
            dishes = this.desserts;
        } else {
            console.log(`Wrong course name!`);
        };
        return dishes[Math.floor(Math.random() * dishes.length)];
    },
    generateRandomMeal() {
        let appetiser = this.getRandomDishFromCourse('appetiser');
        let main = this.getRandomDishFromCourse('main');
        let dessert = this.getRandomDishFromCourse('dessert');
        return `Appetiser: ${appetiser.name}, main: ${main.name}, dessert ${dessert.name}. Total price: £${appetiser.price + main.price + dessert.price} including VAT.`;
    }
};

const menuAppetisers = ['Beef Carpaccio', 'Mushroom Soup', 'Tomato Soup', 'Caesar Salad', 'Loaded Potato Skins', 'Gazpacho', 'Gumbo'];
const pricesAppetisers = [3.25, 4.50, 3.50, 5.85, 6.15, 4.20, 5.95];
const menuMains = ['Monster Burger And Fries', 'Spaghetti Alla Putanesca', 'Sirloin Steak With All The Trimmings', 'Jambalaya', 'Mushroom Risotto', 'Chicken Kiev And Mash'];
const pricesMains = [13.25, 9.95, 19.95, 12.30, 7.85, 8.20];
const menuDesserts = ['Vanilla Ice Cream', 'Rice Pudding', 'Victoria Sponge', 'Smoothie Tutti Frutti', 'Cheese Platter'];
const pricesDesserts = [5, 4.50, 4.50, 3.60, 7];

for (let i = 0; i < menuAppetisers.length; i++) {
    menu.addDishToCourse('appetiser', menuAppetisers[i], pricesAppetisers[i]);
};
for (let i = 0; i < menuMains.length; i++) {
    menu.addDishToCourse('main', menuMains[i], pricesMains[i]);
};
for (let i = 0; i < menuDesserts.length; i++) {
    menu.addDishToCourse('dessert', menuDesserts[i], pricesDesserts[i]);
}; 
console.log(menu.courses);
console.log();
console.log(menu.generateRandomMeal());
console.log();