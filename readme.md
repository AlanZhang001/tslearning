# TS 学习

### 参考教程
<https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html>

### 笔记
```
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
```