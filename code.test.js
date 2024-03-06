const fs = require('fs');
const jsc = require('jsverify');
const path = require('path');
const { start } = require('repl');

eval(fs.readFileSync('code.js')+'');

pentagon = 
[
    [0,1,2,3,4],
    [
        [0,1],
        [1,2],
        [2,3],
        [3,4],
        [4,0]
    ]
];

star = 
[
    [5,6,7,8,9],
    [
        [5,7],
        [7,9],
        [9,6],
        [6,8],
        [8,5]
    ]
];
if (!are_isomorphic(pentagon,star)) throw new Error('Failed for pentagon & star'); // pentagon and star are isomorphic

let empty = [[],[]]; // empty graph
let line = [[1,2,3],[[1,2],[2,3]]]; // line
if (are_isomorphic(empty,line)) throw new Error('Failed for empty and line'); // empty and line are not isomorphic

if (are_isomorphic(pentagon,line)) throw new Error('Failed for pentagon & line'); // pentagon and line are not isomorphic

let square = [
    [1,2,3,4],
    [
        [1,2],
        [2,3],
        [3,4],
        [4,1]
    ]
];
let cross = [
    [1,2,3,4],
    [
        [1,3],
        [3,4],
        [4,2],
        [2,1]
    ]
];
if (!are_isomorphic(square,cross)) throw new Error('Failed for square and cross'); // square and cross are isomorphic

if (are_isomorphic(square, pentagon)) throw new Error('Failed for square and pentagon'); // square and pentagon are not isomorphic

let pentaCross = [
    [1,2,3,4,5],
    [
        [1,2],
        [2,3],
        [3,4],
        [4,5],
        [5,3],
        [5,1]
    ]
];
let complex = [
    [1,2,3,4,5],
    [
        [1,2],
        [1,4],
        [2,3],
        [3,1],
        [3,4],
        [1,5]
    ]
];
if (are_isomorphic(pentaCross, complex)) throw new Error('Failed for pentaCross and complex'); //pentaCross and complex are not isomorphic
//Depicted in this image: https://slideplayer.com/slide/5756786/19/images/14/Isomorphism+of+Graphs+Example+9%3A+Show+that+graphs+displayed+in+below+are+not+isomorphic..jpg