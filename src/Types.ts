// Baisc types
let i: number = 5;
let company: string = 'XYZ company';
let isVisible: boolean = true;
let anyVar: any = 'HEllo'; // any type of value can be added

// Arrays
let numArray: number[] = [1,2,3,4,5];
let stringArray: string[] = ["a", "b", "c"];
let anyArray: any[] = [1, "Shashank", true];
let mixArray = [1, 'A', false, [1,2,3,'B',true]];

// Tuple
let person: [number, string, boolean] = [1, "Person", false];
console.log("Tuple value: " + person[1]);
let personArray: [number, string, boolean][];

personArray = [
    [1, "Person", false],
    [2, "Person1", true],
    [3, "Person3", true]
]

// Union
let pid: string | number = '22';

// Enums of type number
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1.Left);

// Enums of type string
enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

console.log(Direction2.Right);

// Object
type User = {
    id: number,
    name: string
}

let user: User = {
    id: 1,
    name: 'Shashank'
};

console.log("Object values:", user.name);

// Type Assertion
let cid: any = 99;
//let customerId = <number>cid; //first way
let customerId = cid as number;
console.log("CID:", customerId)
