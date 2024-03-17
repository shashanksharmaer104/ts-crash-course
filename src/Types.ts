// Baisc types
let i: number = 5;
let company: string = 'XYZ company';
let isVisible: boolean = true;
let anyVar: any = 'HEllo'; // any type of value can be added

// Arrays
let numArray: number[] = [1,2,3,4,5];
let stringArray: string[] = ["a", "b", "c"];
let anyArray: any[] = [1, "Shashank", true];

// Tuple
let person: [number, string, boolean] = [1, "Person", false];
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
