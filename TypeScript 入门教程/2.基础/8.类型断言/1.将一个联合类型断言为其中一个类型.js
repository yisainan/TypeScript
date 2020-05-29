function getName(animal) {
    return animal.name;
}
// 1
var animal = {
    name: 'xiao',
    run: function () {
    },
    swim: function () {
    }
};
console.log(getName(animal));
