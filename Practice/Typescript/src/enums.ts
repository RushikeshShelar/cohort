enum Direction {
    Up,
    Down,
    Left,
    Right
}
function doSomething(key: Direction) {
    // do something.
    console.log(key);
}

doSomething(Direction.Up);
doSomething(Direction.Down);


