export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = "loud noise") {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`
    }

    static return10() {
        return 10;
    }
}

// example using super()
export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
}

// extends
export class Cat extends Animal {
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}

// sames as the function from parent class
// makeNoise(sound = "loud noise") {
//     console.log(sound);
// }