interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    hello(test: SquareConfig){

    }
}

enum Color {Red  = 2, Green, Blue=3, yellow = 'rrr'}


let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed();
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

export {
    Student
};
interface IMySum{
    (x:number,y:number): number
}
let mySum: IMySum = function (x: number, y: number): number {
    return x + y;
};

function push(array: any[], ...items: any[]) {

}

function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

