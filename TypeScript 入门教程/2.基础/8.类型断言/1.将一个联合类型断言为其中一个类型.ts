interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name;
}

// 1
let animal = {
    name: 'xiao',
    run(){

    },
    swim(){

    }
}
console.log(getName(animal))

// 2
