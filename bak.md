
## 笔记
```js
1. 在构造函数的参数上使用public等同于创建了同名的成员变量。
TS:
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
JS:
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());

2. TypeScript支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

3. 在TypeScript里，只在两个类型内部的结构兼容，那么这两个类型就是兼容的。
这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。

interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };
// 正常接收
greeter(user);
```
