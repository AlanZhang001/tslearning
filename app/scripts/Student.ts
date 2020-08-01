class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
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