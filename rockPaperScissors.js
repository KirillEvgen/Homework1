function rockPaperScissors() {
    const items = ['камень', 'ножницы', 'бумага'];
    const getItems = () => Math.floor(Math.random() * items.length);
    let playerEnter;
    const computerChoice = items[getItems()];

    switch (computerChoice) {
        case 'камень':
            
            break;
        case 'бумага':
           
            break;
        default: 'ножницы'
            break;
    }
    const regexp = /^[а-яА-Я]*$/;

    do {
            playerEnter = prompt("Введите, пожалуйста, любое из слов: 'камень', 'ножницы' или 'бумага'");
        if (regexp.test(playerEnter)) {
            if (playerEnter.toLowerCase() === computerChoice.toLowerCase()) {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Выбор игрока: ${playerEnter}`);
                    alert('Ничья!');
                } else if (playerEnter.toLowerCase() === 'бумага' && computerChoice.toLowerCase() === 'ножницы') {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Выбор игрока: ${playerEnter}`);
                    alert("Выиграл компьютер!");

                } else if (playerEnter.toLowerCase() === 'камень' && computerChoice.toLowerCase() === 'бумага') {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Player chose: ${playerEnter}`);
                    alert("Выиграл компьютер");
                } else if (playerEnter.toLowerCase() === 'ножницы' && computerChoice.toLowerCase() === 'камень') {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Выбор игрока: ${playerEnter}`);
                    alert("Выиграл компьютер!");
                } else {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Выбор игрока: ${playerEnter}`);
                    alert("Вы победили!");
                }
        } else {
            alert("Введите один из вариантов!");
        }
                        
    } while (!regexp.test(playerEnter));
}