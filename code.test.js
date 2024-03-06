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
    [0,1,2,3,4],
    [
        [0,2],
        [2,4],
        [4,1],
        [1,3],
        [3,0]
    ]
];
if (!are_isomorphic(pentagon,star)) throw new Error('Failed for pentagon & star'); // pentagon and star are isomorphic

let empty = [[],[]];
let line = [[0,1,2],[[0,1],[1,2]]];
if (are_isomorphic(empty,line)) throw new Error('Failed for empty and line'); // empty and line are not isomorphic

if (are_isomorphic(pentagon,line)) throw new Error('Failed for pentagon & line'); // pentagon and line are not isomorphic

let square = [
    [0,1,2,3],
    [
        [0,1],
        [1,2],
        [2,3],
        [3,0]
    ]
];
let hourglass = [
    [0,1,2,3],
    [
        [0,2],
        [2,3],
        [3,1],
        [1,0]
    ]
];
if (!are_isomorphic(square,hourglass)) throw new Error('Failed for square and cross'); // square and hourglass are isomorphic

if (are_isomorphic(square, pentagon)) throw new Error('Failed for square and pentagon'); // square and pentagon are not isomorphic

let pentaCross = [
    [0,1,2,3,4],
    [
        [0,1],
        [1,2],
        [2,3],
        [3,4],
        [4,2],
        [4,0]
    ]
];
let complex = [
    [0,1,2,3,4],
    [
        [0,1],
        [0,3],
        [1,2],
        [2,0],
        [2,3],
        [0,4]
    ]
];
if (are_isomorphic(pentaCross, complex)) throw new Error('Failed for pentaCross and complex'); //pentaCross and complex are not isomorphic
//Depicted in this image: https://slideplayer.com/slide/5756786/19/images/14/Isomorphism+of+Graphs+Example+9%3A+Show+that+graphs+displayed+in+below+are+not+isomorphic..jpg

// https://qph.cf2.quoracdn.net/main-qimg-16c40327f5a5eec560705ddf2e8eceb9
let G = [
    [0,1,2,3,4,5,6,7],
    [
        [0,1],
        [0,3],
        [0,5],
        [1,2],
        [1,4],
        [2,3],
        [2,7],
        [3,6],
        [4,5],
        [4,7],
        [5,6],
        [6,7]
    ]
];

let H = [
    [0,1,2,3,4,5,6,7],
    [
        [0,1],
        [1,2],
        [2,3],
        [3,0],
        [4,5],
        [5,6],
        [6,7],
        [7,4],
        [6,2],
        [1,5],
        [7,3],
        [4,0]
    ]
];
if (!are_isomorphic(G,H)) throw new Error('Failed for G and H'); // H and G are isomorphic
if (!are_isomorphic(G,G)) throw new Error('Failed for G, G'); // Any graph is isomorphic to itself