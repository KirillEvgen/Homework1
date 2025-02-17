function goGame() {
    const hiddenNumber = Math.floor(Math.random() * 100) + 1; 
    let guess;
    alert('Угадай число');
    
    while (true) {
        const input = prompt('Попробуй угадать число от 1 до 100');
        
        if (input === null) {
            alert('Попробуй вновь!');
            return;
        }  

        guess = Number(input);
        
        if (guess === hiddenNumber) {
            alert(`Вы угадали число ${hiddenNumber}!`); 
            break;
        } else if (guess < hiddenNumber) {
            alert('Число должно быть больше!');
        } else {
            alert('Число должно быть меньше!');
        }
    }
}

