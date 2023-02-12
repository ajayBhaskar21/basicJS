console.log("Hello js");


var num = 5;
// comments.

console.log(num);


// data types.
/*
string, number, undefined, null, boolean, symbol,
object
*/

var myName = "jyoshna";

myName = 100;
console.log(myName);

//  var will be global.
// let will be within some scope.
// const. 

const a1 = 10;
console.log(a1);
// a1 = "Hello"; will cause error.

let bname = 'Hhello';
console.log(bname);



var a;
var b = 2;

a = 7;
b = a;

console.log(a);
b = 200;
console.log(a);


var cpp1;
console.log(cpp1);


var myFirst = "hello";

var myStr = "I am a \"double\" string inside string. ";
console.log(myStr);


console.log("hello \n hi");

let str1 = "hello";
let str2 = " world";
console.log(str1 + str2);


console.log(str1.length);


var ourAr = ['john', 50];


console.log(ourAr);

var two = [[1,2,3], [2,3,4,'Lana Blakely']]

console.log(two[1]);

two[1][0] = 'hi';

console.log(two);



if (1 == 1){
    console.log("if statement\n");
}


var arr1 = [1,2,3];

arr1.push('Lana Blakely');

console.log(arr1);

arr1.push(['Lana', 'jyoshna']);

console.log(arr1);

console.log(arr1.pop());

console.log(arr1);
console.log(arr1.pop(1));
console.log(arr1);
console.log(arr1);

console.log(arr1.shift()); // shift removes first element.
console.log(arr1);


arr1.unshift('lana blakely'); // unshift pushes element at first.

console.log(arr1);




var myList = [['cereal', 3], ['milk', 2], ['bananas', 3], ['juice', 2], ['eggs', 4]];



function show1(){

    console.log('hi! jyoshna, how was your day?');
}

show1();

function hello(){
    console.log('hey hi Lana Blakely, big fan!!');
}

hello();

function add(a, b){

    console.log('after adding',a + b);
}

add(1, 2);

function concatenation(a, b){

    a = a + b;
    console.log('this is 1st =',a);

    console.log('this is 1st= ', a+=b);

}
console.log('between');
function concatenation(c, d){
    console.log('c = ', c);
    console.log('d = ', d);
}

concatenation('hello ', 'world');
console.log('var of a = ', a);



function tes1(){
    var mopp = 1;
    console.log('first call');
}

var mopp = 1;
console.log(mopp);


function add(a, b){
    return a + b;
}

console.log(add(10, 7));



var sum = 0;

function addThree(){
    sum += 3;
}


console.log(sum);


// stand in line



function nextInLine(arr, item){

    arr.push(item);
    item = arr.shift();
    return item;
}

var testArr = [1,2,3,4,5];

console.log('before =', testArr);
nextInLine(testArr, 6);
console.log(testArr);

console.log('After: ' + JSON.stringify(testArr));

console.log(typeof(JSON.stringify(testArr)));

// JSON.stringfy() converts list into string.




var check1 = true;

if (check1 == true){
    console.log('this is boolean true, Lana!');
}

console.log(typeof(check1));


/*
3 == 3       --> true
3 == '3'     --> true   // because '3' this is converted into integer and then compared...

3 === 3      --> true
3 === '3'    --> false

*/


console.log(3 == 3);
console.log(3 == '3');
console.log(3 === 3);
console.log(3 === '3');


/*
function switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

function test1(){
    if (0 != 1){
        return undefined;
    }
}
console.log(test1());



// javaScript objects....


// 1) similar to dictionary in python.
// 2) similar to array, with indexes as properties..


var Dog = {
    'name' : 'Puppy',
    'legs' : 4,
    'tails' : 1,
    'friends' : ['everything!']
};


console.log(Dog);

console.log(Dog.name);

console.log(Dog['friends']);

Dog.name = 'quincy';
console.log(Dog);

Dog.bark = 'bow-wow';
console.log(Dog);

Dog['trust'] = true;
console.log(Dog);

delete Dog.bark;
console.log(Dog);


function phoneticLookup(val){

    var result = '';

    var lookup = {
        'alpha' : 'Adams',
        'bravo' : 'Boston',
        'charlie' : 'Chicago',
        'delta' : 'Denver',
        'echo' : 'Easy',
        'foxtrot' : 'frank'
    };

    result = lookup[val];
    return result;

}

console.log(phoneticLookup('charlie'));







var myObj = {
    gift : 'pony',
    pet : 'kitten',
    bed : 'sleigh'

};

console.log(myObj.hasOwnProperty('gift'));



var myMusic = [
    {
        'artist': 'Billy',
        'title': 'Piano',
        'release_year': 1981,

        'gold': true

    },

    {
        'artist': 'Bones',
        'title' : 'Cereal',
        'release_year': 1950,
        'gold': false
    }
    
    
]


// Accessing nested objects...

var myStorage = {

    'car' : {
        'inside' : {
            'glove box' : 'maps',
            'passenger_seat': 'crumbs'
        },
        'outside': {
            'trunk' : 'jack'
        }
    }

};

console.log(myStorage.car.inside["glove box"]);  // if space we need to use bracket notation only..
console.log(myStorage.car.inside.passenger_seat);


var myPlants = [
    {
        type : 'flowers',
        list : [
            'rose',
            'jasmine',
            'lavander'
        ]
    },
    {
        type : 'trees',
        list : [
            'neem',
            'apple',
            'pine'
        ]
    }
];

console.log(myPlants[1].list[1]);


// Record collection.... 
// we need to create a function which takes id, property, value to update in the record.


var collection = {

    '10' : {
        'name' : 'bot1',
        'age' : 18,
        'hobbies': [
            'gaming',
            'reading'
        ]
    },
    '123' : {
        'name' : 'nuh',
        'age' : 40,
        'hobbies' : [
            'watering',
            'cooking'
        ]
    },
    '1234' : {
        'age' : 25,
        'hobbie' : []
    },
    '12345' : {
        'name' : 'rachel'
    }

};
// keep a copy of this initial data

var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecord(id, property, value){

    if (value === ''){
        delete collection.id.property;
    }
    else if (property === 'hobbies'){
        collection[id][property] = collection[id][property] || [];
        collection[id][property].push(value);
    }
    else{
        collection[id][property] = value;
    }
    return collection;
}

console.log(updateRecord(123, 'hobbies', 'test'));




var myArray = [];
var i = 0;
while (i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);


for(var i = 0; i < 5; i++){
    myArray.push(i);
}
console.log(myArray);

var j = 100;
do{
    console.log(j);
    j = j - 10;
}while(j != 0);





// random decimals between 0 and 1.

function generateRandom(){

    return Math.random();
}

console.log(generateRandom());
// random whole numbers
console.log(Math.round(generateRandom() * 100));
console.log(Math.floor(generateRandom() * 100));



function strToInt(s){
    return parseInt(s);
}
console.log(strToInt('10111'));

console.log(strToInt('a1'));

function numberSystem(str){

    return parseInt(str, 2); // returns binary...
}

console.log(numberSystem('100'));


// ternary operator...

function testTernary(){

    var a = '10';
    var b = 10;
    var c = a === b ? 1 : 0;
    console.log(c);
}
testTernary();


function checkSign(num){

    num > 0 ? console.log('+ve') : num < 0 ? console.log('-ve') : console.log('zero');
}
checkSign(-0);


// let cannot be redeclared ..
// var can..
// generally let and const are used..

function checkScopeVar(){

    var po = 'function scope';
    if (true){
        po = 'block scope';
        console.log('block scope: ', po);

    }

    console.log('function scope : ',po);
}
checkScopeVar();

function checkScopeLet() {

    let po = 'function scope';
    if (true) {
        let po = 'block scope';
        console.log('block scope: ', po);

    }

    console.log('function scope : ', po);
}
checkScopeLet();




const sl = [5, 7, 2];

function editPlace(sl){

    // sl = [2, 5, 7] error. because of const.

    sl[0] = 2;
    sl[1] = 5;
    sl[2] = 7;
    return sl;
}
console.log(sl);

console.log(editPlace(sl));


function freezeObj(){

    const MATH_CONSTANTS = {
        PI : 3.14,
    };

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;

}
const PI = freezeObj();
console.log(PI);

// anonymous function, Arrow function...

/*

var magic = function (){           // var magic = () => new Date();
    return new Date();                  
};                                  

*/
const magic = () => new Date();
console.log(magic());

var myConcat = function(arr1, arr2){

    return arr1.concat(arr2);
}
console.log(myConcat([1, 2], [9, 8]));

var myConcat2 = (a1, a2) => a1.concat(a2);
console.log(myConcat2([1, 4], [8, 9]));













