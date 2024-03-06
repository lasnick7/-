
let names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
names.forEach(function(name) {
    console.log('Привет, ' + name);
});



let numbers = [1, 4, 9];
const tens = numbers.map((num) => num * 10);
console.log(tens);



function isBigEnough(value) {
    return value >= 10;
  }
let notFiltered = [5, 12, 8, 130, 44];
let filtered = notFiltered.filter(isBigEnough);
console.log(filtered);



let people = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}];
let adults = people.filter(function(person) {
    return person.age > 18;
});
let newPeople = adults.map(function(person) {
    return person.name + ' (' + person.age + ' лет)';
});
console.log(newPeople);



let sales = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}];
let totalCost = sales.reduce(function(start, sale) {
    return start + (sale.price * sale.quantity);
}, 0);
console.log('Общая стоимость продаж: ' + totalCost); 
