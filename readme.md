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

```js
// 取值默认为：0,1,2
enum Color {Red, Green, Blue}

// green 的值为3，ywello 为4
enum Color {Red  = 2, Green, Blue = 3, yellow};

enum Color {Red  = 2, Green, Blue=3, yellow = 'yellow'};

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

#### 函数

其他原始数据类型都比较好理解。 

### 2. 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型。

```js
// 未指定类型，会根据其赋值推断出一个类型
let myFavoriteNumber = 'seven';
// 编写代码时报错
myFavoriteNumber = 7;
```

### 3. 类型断言
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

这里的意思是说，
1. 也许变量申明的时候any类型，但是在调用的时候可以加上类型断言，表示这个变量就是某种类型，如果实际不是就报错(这就是断言)

### 5. 声明文件

### 5. 内置对象
- JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。
- ECMAScript 标准提供的内置对象有：Boolean、Error、Date、RegExp 等
- DOM 和 BOM 提供的内置对象有： Document、HTMLElement、Event、NodeList 等。
- TypeScript 核心库的[定义文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib)中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。
- Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
```sh
npm install @types/node --save-dev
```

## 二、工程化

## 三、tsconfig.json
- 假设我们包含了index.ts，那么index.d.ts和index.js会被排除在外。 通常来讲，不推荐只有扩展名的不同来区分同目录下的文件。

```json
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