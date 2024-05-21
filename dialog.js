function dialogWithUser() {

    var age;

    do {
        age = prompt("Скільки вам років?");
    } while (age === null || isNaN(age) || age.trim() === "");

    alert("Вам " + age + " років.");


    var animalInterest = confirm("Чи цікавлять вас тварини?");

    if (animalInterest) {
        alert("Чудово! Тварини - це чудові друзі та компаньйони.");
    } else {
        alert("Шкода, що ви не зацікавлені у тваринах. Але ви завжди можете дізнатися більше про них на нашому сайті!");
    }

    var favoriteAnimal = prompt("Яка ваша улюблена тварина?");
    
    if (favoriteAnimal !== null && favoriteAnimal !== "") {
        alert("Ваша улюблена тварина - " + favoriteAnimal + ". Дякуємо за участь!");
    } else {
        alert("Ви не ввели жодної тварини. Будь ласка, спробуйте знову.");
    }

}