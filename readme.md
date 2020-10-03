# TS 学习

[TOC]

## 参考教程
- <https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html>
- <https://ts.xcatliu.com/>

## 为什么要使用TS
1. 静态类型检查。
    - 静态类型更有利于构建大型应用，静态类型检查可以更早的发现代码的错误，一旦类型不匹配，在代码运行前就能被发现。
    - 普通通过js开发大型系统，分支逻辑多，发现问题时，测试调试比较麻烦，因此应尽可能早的检测到代码存在的问题，静态类型检测有助于解决这个问题。
2. 完善的类型系统提供了更好的注释、IDE自动补全和提示，因此：
    - 代码更易阅读，减少认知开销。
    - 代码更可靠、更容易重构。
3. 静态类型检查，无形中增强了面向对象的开发，虽然JS本身支持面向对象的开发，但是几乎没有写法上的预算。
    - 通过将接口定义、重载重载前置定义的方式，让代码更加符合面向对象的规范
    - 同时提升自身代码设计的能力，避免JS随心所欲编写的问题。
4. 对于写过jave，C++同事，可以更快入手学习。TS的好处，更多是强类型语言相对于弱类型语言的好处。

## 一、语法

### 0. 变量申明

- es6中的二进制、八进制写法在编译成js时，会转换成10进制的写法。
- 字符串模板也会转换为字符串拼接
```js
// ts：
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;

// js:
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
```

### 1. 数据类型

#### 类型别名
- 类型别名用来给一个类型起个新名字。
- 别名写法建议用pascal写法(TS官方的写法)

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

#### 字符串字面量类型
字符串字面量类型用来约束取值只能是某几个字符串中的一个。
```ts
type EventNames = 'click' | 'scroll' | 'mousemove';
```

#### void
- 可以用 void 表示没有任何返回值的函数。
- 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null

### any

```ts
// 未声明类型，等价于：let anval: any;
let anval;
let notSure: any = 4;
// okay, ifItExists might exist at runtime
notSure.ifItExists();
// okay, toFixed exists (but the compiler doesn't check)
notSure.toFixed();
```

1. any类型的变量，在调用方法时，会忽略类型检查，即便值没有对应方法，编译时也不会报错。因为可能在运行时存在某个方法(比如在运行时给Number.prototype加上ifItExists方法。
2. 上面方法，在运行时才会报错，因为Number 4的确不存在ifItExists方法
3. 变量如果在声明的时候，未指定其类型,默认为any。

#### 枚举类

普通枚举
```js
// 取值默认为：0,1,2
enum Color {Red, Green, Blue}
// green 的值为3，ywello 为4
enum Color {Red  = 2, Green, Blue = 3, yellow};
// 允许自定义
enum Color {Red  = 2, Green, Blue=3, yellow = 'yellow'};
// 允许计算成员，但是必须在最后或则其后的元素有赋值
enum Color {Red  = 2, Green, Blue=3, yellow = 'yellow'.length};
// 允许重复Wed===3
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

// 这类枚举编译后的结果：
var Days;
(function (Days) {
    Days[Days["Sun"] = 3] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
```

常数枚举: 通过const enum申明的枚举类型
```js
const enum Directions {
    Up,
    Down,
    Left,
    Right,
    // 常量枚举不能存在计算成员
    // ESC = 'blue'.lenght
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 编译结果:
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```

1. 默认情况下，从0开始为第一个元素编号。后面的元素自加1, 默认是数字。也可以主动为每个元素指定其他类型的值
2. 如果第一个元素有指定值，后面为主动指定值的元素自加1。如果元素已经指定了值，则忽略该元素，继续为下一个为指定值的元素自加1

#### 联合类型（Union Types）
```ts
let myType: string | number;
```
- 表示取值可以为多种类型中的一种。
- 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
- 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型,此后调用方法时会更具推断出来的类型做检查

#### 接口
```ts
// 定义对象类型
interface ISquareConfig {
    // 可选属性,接口里的属性不全都是必需的,可选属性的好处:可以对可能存在的属性进行预定义，可以做提示
    // 但是仍然不允许添加未定义的属性
    color?: string;
    // 只读属性，只能在对象刚刚创建的时候修改其值，其他情况不允许修改
    readonly width: number;
    // 如果除了带有定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：
    // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集，所以可以把任意属性定义为any
    // 一个接口中只能定义一个任意属性
    [propName: string]: any;
    // 定义一个具名函数
    setTime(d: Date);

}

// 单独定义函数类型，只要函数参数和返回值符合就行
interface ISearchFunc {
    // 定义function，（）中的为参数列表，：后的值为返回值
    (source: string, subString: string): boolean;
}

// TypeScript具有ReadonlyArray<T>类型，确保数组创建后再也不能被修改。
// ro元素及属性都不能被修改
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// error!
ro[0] = 12;
```

- 建议接口的名称加上 I 前缀。

#### 数组

```ts
// 「类型 + 方括号」表示：
let arr: number[] = [1,2,3];
// 数组泛型：
let arr: Array<number> = [1,2,3];
// 用接口表示数字，相当于描述一个负责的数据类型,一般不会这么做
interface NumberArray {
    [index: number]: number;
}
let arr: NumberArray = [1, 1, 2, 3, 5];
```

使用接口的方式来描述数组，一般是在用于类数组的定义
```ts
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
// 等同于
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
function sum() {
    let args: IArguments = arguments;
}
```

#### 元组

- 数组中每个元素可以由不同类型组成，但是每个元素的类型需要符合 类型定义。

```js
// good
let tom: [string, number] = ['Tom', 25];
// good
let tom: [string, number];
tom[0] = 'Tom';
// bad,数组和类型定义不一致
let tom: [string, number] = ['tom'];
// 越界的数组类型，需要，会被限制为元组中每个类型的联合类型
// good
tom.push(1);
// bad,必须为string | number
tom.push(true);
// 不会报错，但是不太明白为什么
tom.push(null);
```


#### 函数

```ts
// 函数声明
function sum(x: number, y: number): number {
    return x + y;
}

// 函数表达式
// 这里的(x: number, y: number) => number用于形容mySum的类型
// =>用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。不是ES6的兼容函数
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 通过接口的形式来定义函数
interface IMySum{
    (x:number,y:number): number
}
let mySum: IMySum = function (x: number, y: number): number {
    return x + y;
};

// 函数可选参数通过?定义
// 函数剩余参数通过 ...rest: any[]定义即可
function push(array: any[], ...items: any[]) {

}
```

#### 函数重载

- 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
- 重载只是TS层面的定义，在JS层面没有重载一说
- js本身没有重载，那ts为什么要提供重载的写法？
    - ts的重载只是重载函数声明，而不是传统Java，c++的重载，只是告诉调用者我可以有这几种调用方式。
    - 通过重载的函数声明，可以根据调用方式作出正确的代码提示和类型约束

```ts
function reverse(x: number): number;
function reverse(x: string): string;
// 前面是重载的类型
// 最后是具体方法的实现
// TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

### 2. 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型。

```ts
// 未指定类型，会根据其赋值推断出一个类型
let myFavoriteNumber = 'seven';
// 编写代码时报错
myFavoriteNumber = 7;
```

### 3. 类型断言
类型断言好比其它语言里的类型转换（实际不会做类型转换），但是不进行特殊的数据检查和解构。

类型断言有两种形式:
```ts
// 方式1
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 方式2,as 形式,在TypeScript里使用JSX时，只有 as语法断言是被允许的。
// 建议用这一种写法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

```

类型断言可以绕过ts编译器，在联合类型推断时有用。
```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    // animal为联合类型，只能防伪Cat和Fish共有属性。如果直接写成typeof animal.swim === 'function' 会报错
    // 通过类型断言，可以绕过类型检测
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
```

类型断言和类型声明的区别：
```js
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
// 正确执行
// animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可
// TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系，所以这里cat是兼容Animal的
let tom = animal as Cat;

// 报错
// animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行
// 类型声明是比类型断言更加严格
let tom: Cat = animal;
```

在TypeScript里，只在两个类型内部的结构兼容，那么这两个类型就是兼容的。
这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。
```ts
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

关于类型断言：
1. 也许变量申明的时候any类型，但是在调用的时候可以加上类型断言，表示这个变量就是某种类型，如果实际不是就报错(这就是断言)
2. 滥用类型断言可能会导致运行时错误
3. 可以将一个父类断言为更加具体的子类
4. 可以将任何一个类型断言为 any
5. 可以将 any 断言为一个具体的类型
6. 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可。或者说，A和B可以用继承的关系来描述就可以在A和B之间做断言

### 4. 声明文件

### 5. 内置对象
- JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。
- ECMAScript 标准提供的内置对象有：Boolean、Error、Date、RegExp 等
- DOM 和 BOM 提供的内置对象有： Document、HTMLElement、Event、NodeList 等。
- TypeScript 核心库的[定义文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib)中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。
- Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
    ```sh
    npm install @types/node --save-dev
    ```

### 6. 类

在构造函数的参数上使用public等同于创建了同名的成员变量。
```TS
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
// JS:
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

详细的看这里：https://ts.xcatliu.com/advanced/class.html，基本就是java的一套。

## 二、工程化

## 三、tsconfig.json
- 假设我们包含了index.ts，那么index.d.ts和index.js会被排除在外。 通常来讲，不推荐只有扩展名的不同来区分同目录下的文件。

```js
{
    "compilerOptions": {
        "allowJs": true,
        "target": "es5"
    },
    "include": [
        "./app/scripts/**/*.ts"
    ],
    // TypeScript 编译的时候即使报错了，还是会生成编译结果,noEmitOnError表示报错时是否产生编译结果
    "noEmitOnError": true
}
```

## node项目如何使用ts
