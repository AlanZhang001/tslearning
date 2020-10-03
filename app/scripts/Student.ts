interface SquareConfig {
    Enum?: string;
    width?: number;
    [propName: string]: any;
}

/**
 * [Student description]
 */
class Student {
    fullName: string;
    /**
     * [constructor description]
     *
     * @param   {[type]}  publicfirstName      [publicfirstName description]
     * @param   {[type]}  publicmiddleInitial  [publicmiddleInitial description]
     * @param   {[type]}  publiclastName       [publiclastName description]
     *
     * @return  {[type]}                       [return description]
     */
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    /**
     * [hello description]
     *
     * @param   {SquareConfig}  test  [test description]
     *
     * @return  {[type]}              [return description]
     */
    hello(test: SquareConfig) {

    }
}

enum ColorEnum {
    Red = 2,
    Green,
    Blue = 3,
    yellow = 'rrr'
}

let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed();
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
console.log(strLength);

interface IMySum {
    (x: number, y: number): number
}
let mySum: IMySum = function (x: number, y: number): number {
    return x + y;
};
console.log(mySum);

/**
 * [reverse description]
 *
 * @param   {[type]}  x:      [x: description]
 * @param   {[type]}  number  [number description]
 * @param   {[type]}  |       [| description]
 * @param   {[type]}  string  [string description]
 *
 * @return  {number}          [return description]
 */
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse);
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions);
/**
 * [Point description]
 */
class Point {
    x: number;
    y: number;
    /**
     * [constructor description]
     *
     * @param   {number}  x  [x description]
     * @param   {number}  y  [y description]
     *
     * @return  {[type]}     [return description]
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };

console.log(point3d);

/**
 * foo
 */
class foo {
    bar = 'hello';
    baz = 'world';
    /**
     * [constructor description]
     *
     * @return  {[type]}  [return description]
     */
    constructor() {
        // ...
    }
}


export {
    Student,
    foo,
    ColorEnum
};
