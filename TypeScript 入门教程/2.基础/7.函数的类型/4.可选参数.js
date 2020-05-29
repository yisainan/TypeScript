// function buildName(firstName: string, lastName?: string) {
//     if (lastName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return firstName;
//     }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');
// 1
function test01(params1, params2) {
    if (params2) {
        return params1 + params2;
    }
    else {
        return params1;
    }
}
console.log(test01('abc', 'ddd'));
console.log(test01('abc'));
