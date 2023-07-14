"use strict";
// --- start Difference between extending interface and intersecting type alias ---
const bdConvert = {
    convert: (value) => {
        return (typeof value === 'string' ? Number(value) : String(value)); // type assertion is an unfortunately necessary hack.
    }
};
const zeroString = bdConvert.convert(0); // `convert`'s call signature comes from `Converter`
const oneNumber = bdConvert.convert('0'); // `convert`'s call signature comes from `BDConverter`
const size = {
    s: 1,
    m: 2,
    l: 3
};
const size1 = {
    s: 1,
    m: 2,
    l: 3
};
const foo = () => ({
    hello: 'hello-value',
    id: 1
});
class Owner {
    constructor(name) {
    }
}
class Car {
    constructor(name) {
    }
}
// TODO not understood
function deletable(Base) {
    return class extends Base {
        delete() {
            this.deleted = true;
        }
    };
}
const DeletableOwner = deletable(Owner);
const DeletableCar = deletable(Car);
class Profile {
}
const profile = new Profile();
profile.owner = new DeletableOwner('John');
profile.car = new DeletableCar('Ferrari');
const myObject = {
    sayHello() {
        return this.helloWorld();
    }
};
function makeObjAndMove() {
    function makeObject(desc) {
        let data = desc.data || {};
        let methods = desc.methods || {};
        return Object.assign(Object.assign({}, data), methods);
    }
    let obj = makeObject({
        data: { x: 0, y: 0 },
        methods: {
            moveBy(dx, dy) {
                this.x += dx; // Strongly typed this
                this.y += dy; // Strongly typed this
            },
        },
    });
    obj.x = 10;
    obj.y = 20;
    obj.moveBy(5, 5);
    console.log('---obj', obj);
    obj.moveBy(5, 5);
    console.log('---obj', obj);
}
makeObjAndMove();
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        console.log('player', this);
    }
    introduce() {
        console.log(`Hi my name is ${this.name}, i'm a ${this.type}`);
    }
}
class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`Working as a ${this.type}`);
    }
}
let wizard1 = new Wizard('Polly', 'Healer');
var CREATURES;
(function (CREATURES) {
    CREATURES[CREATURES["TIGER"] = 0] = "TIGER";
    CREATURES[CREATURES["SHEEP"] = 1] = "SHEEP";
    CREATURES[CREATURES["WOLF"] = 2] = "WOLF";
})(CREATURES || (CREATURES = {}));
for (let CREATURE in CREATURES) {
    // hasOwnProperties
    console.log(CREATURE);
    console.log('---');
}
const creatures = {
    tiger: 0,
    sheep: 1,
    wolf: 2
};
for (let creature in creatures) {
    // not hasOwnProperties
    console.log(creature);
    console.log('---');
}
setTimeout(() => {
    console.log(3);
}, 2000);
