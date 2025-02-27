function arithmetic() {
    const randomNum = () => Math.floor(Math.random() * 10 + 1);
    const firstNum = randomNum();
    const secondNum = randomNum();
    
    const Operators = ["+", "-", "*", "/"];
    const RandomOperator = () => Math.floor(Math.random() * 4);
    const Operator = Operators[RandomOperator()];

    let result = null;

    if (Operator === Operators[0]) {
        result = firstNum + secondNum;
    } else if (Operator === Operators[1]) {
        result = firstNum - secondNum;
    } else if (Operator === Operators[2]) {
        result = Math.floor(firstNum * secondNum);
    } else {
        result = Math.floor(firstNum / secondNum);
    }

    
    Question = `Введите ответ: ${firstNum} ${Operator} ${secondNum}?`;
    Answer = Number(prompt(Question));
   
    if (result === Answer) {
        alert("Верный ответ!")
    } else {
        alert("Упс, ошибка!");
    }
}