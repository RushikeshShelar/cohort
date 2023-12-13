let counter = 0;

function incrementCounter(){
    counter++;
    console.log(counter);
}

setInterval(incrementCounter, 1000)