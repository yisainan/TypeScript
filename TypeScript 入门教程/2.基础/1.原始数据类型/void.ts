// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('My name is Tom');
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;

// 1
function fun1(): void {
    alert(1111)
}