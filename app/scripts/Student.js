"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorEnum = exports.foo = exports.Student = void 0;
/**
 * [Student description]
 */
var Student = /** @class */ (function () {
    /**
     * [constructor description]
     *
     * @param   {[type]}  publicfirstName      [publicfirstName description]
     * @param   {[type]}  publicmiddleInitial  [publicmiddleInitial description]
     * @param   {[type]}  publiclastName       [publiclastName description]
     *
     * @return  {[type]}                       [return description]
     */
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    /**
     * [hello description]
     *
     * @param   {SquareConfig}  test  [test description]
     *
     * @return  {[type]}              [return description]
     */
    Student.prototype.hello = function (test) {
    };
    return Student;
}());
exports.Student = Student;
var ColorEnum;
(function (ColorEnum) {
    ColorEnum[ColorEnum["Red"] = 2] = "Red";
    ColorEnum[ColorEnum["Green"] = 3] = "Green";
    ColorEnum[ColorEnum["Blue"] = 3] = "Blue";
    ColorEnum["yellow"] = "rrr";
})(ColorEnum || (ColorEnum = {}));
exports.ColorEnum = ColorEnum;
var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed();
var someValue = 'this is a string';
var strLength = someValue.length;
console.log(strLength);
var mySum = function (x, y) {
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
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse);
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
console.log(directions);
/**
 * [Point description]
 */
var Point = /** @class */ (function () {
    /**
     * [constructor description]
     *
     * @param   {number}  x  [x description]
     * @param   {number}  y  [y description]
     *
     * @return  {[type]}     [return description]
     */
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);
/**
 * foo
 */
var foo = /** @class */ (function () {
    /**
     * [constructor description]
     *
     * @return  {[type]}  [return description]
     */
    function foo() {
        this.bar = 'hello';
        this.baz = 'world';
        // ...
    }
    return foo;
}());
exports.foo = foo;
