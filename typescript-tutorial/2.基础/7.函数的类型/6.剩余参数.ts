// function push(array, ...items) {
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }

// let a: any[] = [];
// push(a, 1, 2, 3);
// console.log(a)

// 1
function test01(array, ...items) {
    items.forEach(function (item) {
        array.push(item)
    })
}
let a: number[] = [1,2,3]
test01(a,4,5,6)
console.log(a) // [1, 2, 3, 4, 5, 6]
