function writeCards(array, eventName) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
}

// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(integer) {
    let countdown = integer;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}