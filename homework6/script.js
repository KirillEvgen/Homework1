// Задание 1 
const array = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === 10) {
        break;
    }
}

// Задание 2 
const prod = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < prod.length; i++) {
    if (prod[i] === 4) {
        console.log(i);
        break;
    }
}

// Задание 3
const product = [1, 3, 5, 10, 20]
console.log(product.join(' '));

// Задание 4
const arr = []
const arr2 = []
for (let i = 0; i < 3; i++) {
    const arr2 = []
    for (let i = 0; i < 3; i++) {
    arr2.push(1)
    }
    arr.push(arr2)
}
console.log(arr);

// Задание 5
const newProd = [1, 1, 1]
newProd.push(2, 2, 2);
console.log(newProd);

// Задание 6
const newProduct = [9, 8, 7, 'a', 6, 5]
newProduct.sort();
console.log(newProduct.pop());
console.log(newProduct);

// Задание 7
const a = [9, 8, 7, 6, 5]
const userNum = +prompt('Введите число');
if (a.includes(userNum)) {
    alert('Угадал');
} else {
    alert('Не угадал')
}

// Задание 8
let text = 'abcdef'
text = text.split('');
text.reverse();
text = text.join('')
console.log(text);

// Задание 9
const b = [[1, 2, 3],[4, 5, 6]]
console.log(b.flat());

// Задание 10
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < num.length; i++) {
    if (num[i + 1]) {
        console.log(num[i] + num[i +1]);
    }
}

// Задание 11
function square(c) {
    return c.map(item => item ** 2);
}
console.log(square([3, 5, 8]));

// Задание 12
function getLength(newArr) {
    return newArr.map(item => item.length)
}
console.log(getLength(['my', 'test']));

// Задание 13
function negativeNumbers(array) {
    return array.filter(item => item <0);
}
console.log(negativeNumbers([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]));

// Задание 14
function randomNumb() {
    return Math.floor(Math.random() * 10);
}
const arr5 = []

for (let i = 0; i < 10; i++) {
    arr5.push(randomNumb());
}

console.log(arr5);

const evenArr = [];
 for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) {
        evenArr.push(arr5[i]);
    }
 }
 console.log(evenArr);

// Задание 15
function newRandomNumb() {
    return Math.floor(Math.random() * 10);
}
const arr6 = []

for (let i = 0; i < 3; i++) {
    arr6.push(newRandomNumb());
}

console.log(arr6);
console.log(arr6.reduce((a, b) => a+ b) / arr.length);
