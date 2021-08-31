1.TypeScript 的两个最重要的特性——类型系统、适用于任何规模。
2.TypeScript 是静态类型。TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查，所以 TypeScript 是静态类型，这段 TypeScript 代码在编译阶段就会报错了：

```js
let foo = 1;
foo.split(' ');
// Property 'split' does not exist on type 'number'.
// 编译时会报错（数字没有 split 方法），无法通过编译
```

3.JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：

```js
let foo = 1;
foo.split(' ');
// Uncaught TypeError: foo.split is not a function
// 运行时会报错（foo.split 不是一个函数），造成线上 bug
```

4.TypeScript 是弱类型

5.总结--什么是 TypeScript？

* TypeScript 是添加了类型系统的 JavaScript，适用于任何规模的项目。
* TypeScript 是一门静态类型、弱类型的语言。
* TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性。
* TypeScript 可以编译为 JavaScript，然后运行在浏览器、Node.js 等任何能运行JavaScript的环境中。
* TypeScript 拥有很多编译选项，类型检查的严格程度由你决定。
* TypeScript 可以和 JavaScript 共存，这意味着 JavaScript 项目能够渐进式的迁移到TypeScript。
* TypeScript 增强了编辑器（IDE）的功能，提供了代码补全、接口提示、跳转到定义、代码重构等能力。
* TypeScript 拥有活跃的社区，大多数常用的第三方库都提供了类型声明。
* TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）。

