// --- start Difference between extending interface and intersecting type alias ---

// interface IConverter {
//     convert: (value: number) => string;
// }
//
// interface IBDConverter extends IConverter {
//     convert: (value: string) => number;
// }

type Converter = {
    convert: (value: number) => string;
}

type BDConverter = Converter & {
    convert: (value: string) => number;
}

const bdConvert: BDConverter = {
    convert: (value: string | number) => {
        return (typeof value === 'string' ? Number(value) : String(value)) as string & number; // type assertion is an unfortunately necessary hack.
    }
};

const zeroString = bdConvert.convert(0); // `convert`'s call signature comes from `Converter`

const oneNumber = bdConvert.convert('0'); // `convert`'s call signature comes from `BDConverter`

// --- end Difference between extending interface and intersecting type alias ---


// --- start How to understand syntax([key: string]) in TypeScript interface and type alias

interface IFormattingOptions {
    tabSize: number;
    insertSpaces: boolean;

    [key: string]: boolean | number | string;
}

type FormattingOptions = {
    tabSize: number;
    insertSpaces: boolean;
    [key: string]: boolean | number | string;
}

interface Size {
    s: number;
    m: number;
    l: number;
}

type Size1 = {
    [key in (keyof Size)]: number
}

const size: Size = {
    s: 1,
    m: 2,
    l: 3
};

const size1: Size1 = {
    s: 1,
    m: 2,
    l: 3
};

// interface Size2 {
//     [key: (keyof Size)]: number
// }

// --- end How to understand syntax([key: string]) in TypeScript interface and type alias

type KeyofAny = keyof any;

type ReadonlySize = Readonly<Size>;

type PickMFromSize = Pick<Size, 'm' | 's'>;

type RecordSize = Record<'a' | 'b', Size>;

type OmitSize = Omit<Size, 'm' | 's'>;

type ABC = 'a' | 'b' | 'c';
type ExcludeABC = Exclude<ABC, 'a'>;

type ExtractABC = Extract<ABC, 'a' | 'b'>;

type ABCWithNullAndUndefined = ABC | null | undefined;
type NonNullABCWithNullAndUndefined = NonNullable<ABCWithNullAndUndefined>;

const foo = () => ({
    hello: 'hello-value',
    id: 1
});

type ReturnTypeFoo = ReturnType<typeof foo>;

class User {
    constructor(name: string) {
    }
}

class Car {
    constructor(name: string) {
    }
}

// TODO not understood
type Constructable<I> = new (...args: any[]) => I;

// TODO not understood
function deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
    return class extends Base {
        deleted?: boolean;

        delete() {
            this.deleted = true;
        }
    };
}

const DeletableUser = deletable(User);
const DeletableCar = deletable(Car);


class Profile {
    user?: InstanceType<typeof DeletableUser>;
    car?: InstanceType<typeof DeletableCar>;
}

const profile = new Profile();
profile.user = new DeletableUser('John');
profile.car = new DeletableCar('Ferrari');


interface MyObject {
    sayHello(): void;
}

interface MyObjectThis {
    helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello() {
        return this.helloWorld();
    }
};


// TODO not understood
// @noImplicitThis: false
type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObjAndMove() {
    function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
        let data: object = desc.data || {};
        let methods: object = desc.methods || {};
        return {...data, ...methods} as D & M;
    }

    let obj = makeObject({
        data: {x: 0, y: 0},
        methods: {
            moveBy(dx: number, dy: number) {
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
