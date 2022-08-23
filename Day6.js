///task6
//3.Write a “person” class to hold all the details.

class Person {
    constructor(name, age, city, hobby) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.hobby = hobby;

    }

    Info() {
        let data = `
        name:${this.name}
        age:${this.age}
        city:${this.city}
        hobby:${this.hobby}`
        return data;
    }

}
let person1 = new Person('manish', 21, 'jaipur', 'coding')
console.log(person1.Info());




//4.write a class to calculate the uber price.


class uberprice {
    constructor(baseprice, kilometre, tax) {
        this.baseprice = baseprice;
        this.kilometre = kilometre;
        this.tax = tax;
    }
}

const price = new uberprice(100, 10, 200);

console.log(price);
//output: