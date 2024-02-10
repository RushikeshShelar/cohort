// Generics in Typescript

type Input = number | string;


function identity<T>(arg: T): T {//T
    return arg;
}

const opt1 = identity<string>("Rushi");
const opt2 = identity<number>(100);

console.log(opt1);
console.log(opt2);