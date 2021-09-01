// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something;
something = 'seven';
something = 7;

something.setName('Tom');

// 等价于

// let something: any;
// something = 'seven';
// something = 7;

// something.setName('Tom');