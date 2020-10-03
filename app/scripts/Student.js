"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
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
var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed();
var someValue = 'this is a string';
var strLength = someValue.length;
var mySum = function (x, y) {
    return x + y;
};
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
var foo = /** @class */ (function () {
    function foo() {
        this.bar = 'hello';
        this.baz = 'world';
        // ...
    }
    return foo;
}());
