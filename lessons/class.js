/*
class - apraksta objektu ka vienu veselu, ka sablons nozime.
zem class ir objects
OOP
Object-oriented programming
 */

class Cat {
  //keyword tikai ar class//
    constructor(name) {
    this.name = name;
    }
}

let cat = new Cat("gob");//instance class string
let a = new Cat();
b = new Cat('Mo');
b.name;
c = new Cat('bob');
c.name;
//a ir objekts//instance

class Calculator{
    constructor() {
    }
    add (a,b){
    }
    sub(a,b){
    }
}
//var pievienot
c = new Calculator();
c.add(4,2);
