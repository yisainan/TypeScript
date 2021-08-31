// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//     return x + y;
// };

// let mySum = function (x: number, y: number): number {
//     return x + y;
// };

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// 在 ES6 中，=> 叫做箭头函数，应用十分广泛

// 1
const mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}
console.log(mySum(1, 2))