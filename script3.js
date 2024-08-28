//1 Создание объектов с помощью литерала объекта
//1
// let person = {
//     name: "John",
//     age: 25,
//     job: "developer"
// }
// console.log(person)

// 2
// let car = {
//         brand: "Toyota",
//         model: "Camry",
//         year: 2020
//     }
// console.log(car)

//2 Создание объекта с использованием конструктора объекта
//1
// function person (name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// let person1 = new person ("John", 25, "developer")
// console.log(person1)

//2
// function car (brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }
// let car1 = new car ("Toyota", "Camry", 2020)
// console.log(car1)

//3 Изменение свойств объекта

// const person = {
//     name: "John",
//     age: 25,
//     job: "developer"
// }
// person.name = "Muharbik"
// person["age"] = 30
// console.log(person)

//4 Добавление новых свойств в объект

// const person = {
//     name: "John",
//     age: 25,
//     job: "developer"
// }
// person.name = "Muharbik"
// person["age"] = 30
// person["his new job"] = "cleaner"
// console.log(person)

//5 Удаление свойств из объекта

// const person = {
//     name: "John",
//     age: 25,
//     job: "developer"
// }
// person.name = "Muharbik"
// person["age"] = 30
// person["his new job"] = "cleaner"
// delete person["job"]
// console.log(person)

//Методы объектов
//1
// let person = {
//     name: "John",
//     age: 25,
//     sayHello: function () {
//         console.log ("Hello, my name is " + this.name + " and I'm " + this.age + " years old");
//     }
// }
// person.sayHello ();

//2
// let calculator = {
//     add: function (x, y) {
//         return console.log(x+y)
//     },
//     subtract: function (x, y) {
//         return console.log(x-y)
//     },
//     multiply: function (x, y) {
//         return console.log(x*y)
//     },
//     divide: function (x, y) {
//         return console.log(x/y)
//     },
// }
// calculator.add (4, 2);
// calculator.subtract (4, 2);
// calculator.multiply (4, 2);
// calculator.divide (4, 2);

//3
// let car = {
//     start: function (x, y) {
//         if (x<y) {
//             return console.log("Машина запущена")
//         } else {
//             console.log("Машина остановлена")
//         }
//     }
// }
// car.start (0, 1)
//ТОЛЬКО ТАК)))

//Прототипы объекта
//1
// let person = {
//     name: "",
//     age: 0,
//     sayHello: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// }
// let person1 = Object.create(person);
// person1.name = "john";
// person1.age = 25;
// person1.sayHello();

//2
// const animal = {
//     eat: function() {
//         console.log("Животное ест")
//     }
// }
// const dog = Object.create(animal);
// dog.eat()

//3
// const shape = {
//     draw: function() {
//         console.log("Фигура рисуется")
//     }
// }
// const rectangle = Object.create(shape);
// rectangle.draw()

//Массивы
//1
// const fruits = ["apple","banana","orange"];
// console.log(fruits)

// 2 a
// const dontEmptyArray = new Array(2000);
// console.log(dontEmptyArray)

// 2 b
// const arrraytrpr = new Array ();
// console.log(arrraytrpr)

// 3
// const a = "Hi don";
// const b = Array.from(a)
// console.log(b)

// 4
// const nekiyArray = {
//     length: 6,
//     0: "a",
//     1: "b",
//     2: "c",
//     3: 4,
// }
// const d = Array.from(nekiyArray);
// console.log(d)

    //Методы массивов
// const vaya = [1,2,3,4,5,6,7];
// vaya.pop()
// vaya.push(8)
// vaya.shift()
// vaya.unshift("vaya")
// console.log(vaya)

    //другие методы помимо стандартных
    //Slice()
//1
// const newVaya = [100,33,36,999,8]
// // console.log(newVaya)
// const shaChetoBudet = newVaya.slice(0, 3)
// console.log(shaChetoBudet)

//2
// const vacha = ["Встать", "и", "добраться", "сидя", "до", "дома"]
// // console.log(vacha)
// const shasha = vacha.slice(0, 3)
// console.log(shasha)

//3
// const vacha = ["Встать", "и", "добраться", "сидя", "пятый"]
// // console.log(vacha)
// const shasha = vacha.slice(2, 5)
// console.log(shasha)

//4
// const vacha = ["!", "%", "&", "?", "}"]
// // console.log(vacha)
// const shasha = vacha.slice(1, 4)
// console.log(shasha)

//5
// let users = [
// 	{name: 'name1',},
// 	{name: 'name2',},
// 	{name: 'name3',},
//     {name: 'name4',},
// 	{name: 'name5',},
// ];
// for (let user of users) {
// 	// console.log(user.name);
// }
// for (let user of users.slice (0, 2)) {
//     console.log(user.name);
// }

    //Splice()
//1
// const newVaya = [100,33,36,999,8]
// // console.log(newVaya)
// const shaChetoBudet = newVaya.splice(1, 4)
// console.log(shaChetoBudet)

//2
// const vacha = ["Встать", "и", "добраться", "сидя", "до", "дома"]
// // console.log(vacha)
// vacha.splice(0, 1)
// console.log(vacha)

//3
// const vacha = ["Встать", "и", "добраться", "сидя", "пятый"]
// // console.log(vacha)
// vacha.splice(1, 1)
// console.log(vacha)

//4
// const vacha = ["!", "%", "&", "?", "}"]
// // console.log(vacha)
// vacha.splice(0, 3)
// console.log(vacha)

//5
// let users = [
// 	{name: 'name1',},
// 	{name: 'name2',},
// 	{name: 'name3',},
//     {name: 'name4',},
// 	{name: 'name5',},
// ];
// for (let user of users) {
// 	// console.log(user.name);
// }
// for (let user of users.splice (1, 5)) {
//     console.log(user.name);
// }

    //Concat()
//1
// let massOne = [1, 2, 3, 4, 5]
// // console.log(massOne)
// let massTwo = [6, 7, 8, 9, 10]
// // console.log(massTwo)
// let combine = massOne.concat(massTwo)
// console.log(combine)

//2
// let lineOne = ['Жила была']
// let lineTwo = ['Красная шапочка']
// let combine = lineOne.concat(lineTwo)
// console.log(combine)

//3
// let lineOne = ['первое','слово','дороже','второго']
// let lineTwo = ['второе','слово','дороже','третьего']
// let combine = lineOne.concat(lineTwo)
// console.log(combine)

//4
// const vacha = ["!", "%", "&", "?", "}"]
// const vaya = ["#", "$", "^", "*", "@"]
// const combine = vacha.concat(vaya)
// console.log(combine)

//5
// let massOne = ["...", "Кому", 2, "кому", 3]
// console.log(massOne)
// let newMass = [4, 5, 6]
// let booldozer = massOne.concat(newMass)
// console.log(booldozer)

    //Map()
//1
// const mass1 = [1,2,3,4,5]
// console.log(mass1)
// const mass2 = mass1.map(function(number) {
//     return number + 1;
// })
// console.log(mass2)

//2
// const arr = ['hello', 'usman', 'abbaz', 'kerim'];

// arr.map((el) => {
//   console.log(el.toUpperCase())
// })

//3
// const adamash = [
//     {name: 'Хасан', age: 25},
//     {name: 'Хусейн', age: 30},
//     {name: 'Малика', age: 18}
//   ];
//   console.log(adamash)
//   const adamashWithFullName = adamash.map(person => {
//     return {
//         name: person.name,
//         age: person.age,
//         fullName: person.name
//     };
//   });
//   console.log(adamashWithFullName)

//4
// const mass1 = [1,2,3,4,5]
// const mass2 = mass1.map (function(number){
//     return number ** 2;
// })
// console.log(mass2)

//5
// const arr = ['HelLo', 'UsmAn', 'AbBaz', 'KeRim'];

// arr.map((el) => {
//   console.log(el.toLowerCase())
// })

    //filter()
//1
// const mass1 = [1,2,3,4,5,6]
// const mass2 = mass1.filter (function(number){
//     return number % 2 === 0;
// })
// console.log(mass2)

//2
// const arr = ['HelLow', 'Usmn', 'AbBaz', 'KeR'];
// const arr2 = arr.filter(function(str){
//     return str.length >= 5;
// })
// console.log(arr2)

//3
// const products = [
//     { name: 'apple', price: 700},
//     { name: 'Manana', price: 2700},
//     { name: 'orange', price: 400},
//     { name: 'Horbaz', price: 1200},
// ];
// // console.log(products)
// const products2 = products.filter(function(numbers){
//     return numbers.price > 1000;
// })
// console.log(products2)

    //reduce()
//1
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum);

//2
// const numbers = ["Ma ", "ond ", "dvizh ", "yu ", "yar"];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(sum);

//3
// const numbers = [1, 2, 3, 4, 5];
// const product = numbers.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
// }, 1);
// console.log(product);

//4
// const fruit = [
//     { name: 'apple', age: 2},
//     { name: 'Manana', age: 4},
//     { name: 'orange', age: 6},
//     { name: 'Horbaz', age: 8},
// ];
// console.log(fruit)
// const itogoAge = fruit.reduce((accumulator, currentValue) => {
//      return accumulator + currentValue.age;
// }, 0); fruit.length
// console.log(itogoAge)

    //sort()
//1
// const numbers = [7, 2, 9, 4, 1, 6, 3, 8, 5]
// numbers.sort ()
// console.log(numbers)

//2
// const noNumbers = ["diana", "eliza", "berlant", "Anya", "sharpuddi"]
// noNumbers.sort ()
// console.log(noNumbers)

//3
// const fruit = [
//     { name: 'apple', age: 2},
//     { name: 'Manana', age: 8},
//     { name: 'orange', age: 6},
//     { name: 'Horbaz', age: 4},
// ];
// fruit.sort (function(a,b) {
//     return a.age-b.age;
// })
// console.log(fruit)

//4
// const numbers = [7, 2, 9, 4, 1, 6, 3, 8, 5]
// numbers.sort (function(a,b) {
//     return b-a
// })
// console.log(numbers)

    //forEach()
//1
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach (function(number) {
//     console.log(number)
// })

//2
// const noNumbers = ["diana", "eliza", "berlant", "Anya", "sharpuddi"]
// noNumbers.forEach (function(string) {
//         console.log(string)
// })

//3
// const fruit = [
//     { name: 'apple', age: 2},
//     { name: 'Manana', age: 8},
//     { name: 'orange', age: 6},
//     { name: 'Horbaz', age: 4},
// ];
// fruit.forEach (function(object) {
//     console.log(object)
// })

// 4
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0;
// numbers.forEach (function(number) {
//     console.log(sum += number)
// })

//5
// let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// fruits.forEach(fruit => {
//     console.log(fruit.length);
// });

    //find()
//1
// const numbers = [16, 2, 13, 8, 15]
// const numberMore0 = numbers.find (function(number) {
//     return number > 10;
// })
// console.log(numberMore0)

//2
// const strings = ["diune", "elizu", "berlant", "mery", "sherpuddi"]
// const strA = strings.find (function(string) {
//     return string.includes("a");
// })
// console.log(strA)

//3
// const fruits = [
//     { name: 'apple', age: 22},
//     { name: 'Manana', age: 38},
//     { name: 'orange', age: 16},
//     { name: 'Horbaz', age: 34},
// ];
// const fruit = fruits.find (function(object) {
//     return object.age > 30;
// })
// console.log(fruit)

//4
// const numbers = [16, 2, 13, 8, 15]
// const numberChet = numbers.find (function(number) {
//     return number % 2 === 0;
// })
// console.log(numberChet)

//5
// const strings = ["diune", "alizu", "berlant", "mery", "sherpuddi"]
// const strA = strings.find (function(string) {
//     return string.startsWith("a");
// })
// console.log(strA)