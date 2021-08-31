// function push(array, ...items) {
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }
// let a: any[] = [];
// push(a, 1, 2, 3);
// console.log(a)
// 1
function test01(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [1, 2, 3];
test01(a, 4, 5, 6);
console.log(a);
