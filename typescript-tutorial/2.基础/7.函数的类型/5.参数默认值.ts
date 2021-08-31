// function buildName(firstName: string, lastName: string = 'Cat') {
//     return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');

// 1
function test01(params1: string, params2: number = 2) {
    return params1 + params2
}
console.log('tomcat', test01('tomcat', 66))
console.log('tom', test01('tomcat'))