# TS 学习

## 参考教程
<https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html>

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

3. 在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。

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

## 基础类型-注意点
#### 类型断言
类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。

类型断言有两种形式:
```ts
// 方式1
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 方式2,as 形式,在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

#### 接口
```ts
interface SquareConfig {
    // 可选属性,接口里的属性不全都是必需的,可选属性的好处:可以对可能存在的属性进行预定义，可以做提示
    color?: string;
    // 只读属性，只能在对象刚刚创建的时候修改其值，其他情况不允许修改
    readonly x: number;
}

// TypeScript具有ReadonlyArray<T>类型，确保数组创建后再也不能被修改。
// ro元素及属性都不能被秀爱
let ro: ReadonlyArray<number> = a;

```