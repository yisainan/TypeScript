function toBoolean(something: any): boolean {
    return something as boolean;
}

toBoolean(1);
// 返回值为 1

// function toBoolean(something: any): boolean {
//     return Boolean(something);
// }

// toBoolean(1);
// // 返回值为 true