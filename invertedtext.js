function invertedtext() {
    let regexp = /^[a-zA-Zа-яА-Я]*$/;
    let userEnter;

    do {
        userEnter = prompt("Введите ваше слово!");
        if (regexp.test(userEnter)) {
            alert(userEnter.split('').reverse().join(''));
        } else {
            alert("Введите слово без цифр");
        }
    
    } while (!regexp.test(userEnter) || userEnter === '');

}