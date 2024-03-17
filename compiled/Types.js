"use strict";
// Baisc types
let i = 5;
let company = 'XYZ company';
let isVisible = true;
let anyVar = 'HEllo'; // any type of value can be added
// Arrays
let numArray = [1, 2, 3, 4, 5];
let stringArray = ["a", "b", "c"];
let anyArray = [1, "Shashank", true];
// Tuple
let person = [1, "Person", false];
let personArray;
personArray = [
    [1, "Person", false],
    [2, "Person1", true],
    [3, "Person3", true]
];
// Union
let pid = '22';
// Enums of type number
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
// Enums of type string
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Right);
