// Задание 1
let q = 1;
while (q <= 2) {
    console.log('Привет');
    q++;
}

// Задание 2
let w =1;
while (w <= 5) {
    console.log(w);
    w++;
    
}
// Задание 3
let e =7;
while (e <= 22) {
    console.log(e);
    e++;
}

// Задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}
// Задание 5
let n = 1000;
let number = 0;

while (n >= 50) {
    n /= 2;
    number++;
}
console.log("Результат:", n);
console.log("Количество интераций:", number);

// Задание 6
const friday = 3;
const daysmonth = 31;

for (let day = friday; day < daysmonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. необходимо подготовить отчет.`);
     
}