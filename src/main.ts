function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == null || toUpper == true) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
};
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];


console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return [].concat(...arrays);

}

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));



class Vehicle {
    public id: number;
    private make: string;
    private year: number;

    constructor(id: number, make: string, year: number) {
        this.id = id;
        this.make = make;
        this.year = year;
    }

    public getInfo(): string {
        return `ID:${this.id} Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(id: number, make: string, year: number, model: string) {
        super(id, make, year);
        this.model = model;
    }

    public getModel(): string {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car(1, "Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());



function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}
console.log(processValue("Sumsul Arifin "));
console.log(processValue(11));

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    let highestPrice = products[0];
    for (const product of products) {
        if (product.price > highestPrice.price) {
            highestPrice = product;
        }
    }
    return highestPrice;
}


const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Friday));


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}

squareAsync(32)
    .then(console.log)
    .catch(console.error);

squareAsync(-3)
    .then(console.log)
    .catch(console.error);     