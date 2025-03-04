//Задание 1
function min (a, b) {
    return Math.min(a, b);
  }
  console.log(min(8, 4));
  
  //Задание 2
  function isEven(number) {
    if (number % 2 === 0) {
        return 'Четное число';
        
    } else {
        return 'Нечетное число';
        
    }
  }
  console.log(isEven(36));
  console.log(isEven(7));
  console.log(isEven(82))
  //Задание 3
  function printSquare(q) {
    const square = q * q; 
    console.log(square); 
  }
  
  function getSquare(q) {
    return q * q; }
  const result = getSquare(5); 
  console.log(result);
  
  //Задание 4
  function checkAge() {
    const age = prompt('Сколько вам лет?'); 
  
    const ageNumber = parseInt(age);
  
    if (isNaN(ageNumber)) {
        alert('Вы ввели неправильное значение');}
         else if (ageNumber < 0) {
        alert('Вы ввели неправильное значение');}
         else if (ageNumber >= 0 && ageNumber <= 12) {
        alert('Привет, друг!');}
         else {
        alert('Добро пожаловать!'); 
  }
  }
  
  //Задание 5
  function correctNumbers(n1, n2) {
  
    let num1 = Number(n1);
    let num2 = Number(n2);
  
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
  
    } else {
        return num1 * num2;
    }
  }
  console.log(correctNumbers(5, 2));
  
  //Задание 6
  function cubeNumber() {
    const input = prompt('Введите число:'); 
  
    if (input === null) {
        console.log('Вы отменили ввод.'); 
        return; 
    }
  
    const number = Number(input);
  
    if (isNaN(number)) {
        console.log('Переданный параметр не является числом'); 
        return; 
    }
  
    const cubedValue = Math.pow(number, 3);
    console.log(`${number} в кубе равняется ${cubedValue}`);
  }
  cubeNumber();
  //Задание 7 
  function createCircle(radius) {
    return {
        radius: 4,
        getArea() {
            return Math.PI * Math.pow(this.radius, 8); 
        },
        getPerimeter() {
            return 2 * Math.PI * this.radius; 
        }
    };
  }
  const circle1 = createCircle(5); 
  const circle2 = createCircle(10);
  console.log(circle1.getArea());
  console.log(circle1.getPerimeter());
  console.log(circle2.getArea());
  console.log(circle2.getPerimeter());
  