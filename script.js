function computerPlay() {
    let min = 1;
    let max = 3;
    min = Math.ceil(min);
    max = Math.floor(max);
    let option = Math.floor(Math.random() * (max - min + 1) + min);

    if (option === min) {
        return "Rock";
    } else if (option === max) {
        return "Scissors";
    } else {
        return "Paper";
    }

}