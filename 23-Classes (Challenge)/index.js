class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    get metaData() {
        return `${this.name} was born in ${this.country}`;
    }
}

const player = new Player("Messi", "Argentina");

console.log((player.metaData));

class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }

    get metaData() {
        return `${this.name} is ${this.age} and knows how to play Tennis`;
    }
}

const nadal = new TennisPlayer("Rafael Nadal", "Spain", 34);

console.log((nadal.metaData));