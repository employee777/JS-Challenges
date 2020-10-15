function sumPositiveNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number) {
        if (number >= 0){
            sum += number;
        }
    })
    return sum;
}

function sumOddNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number) {
        if (number % 2 !== 0){
            sum += number;
        }})
    return sum;
}

Object.keys(language).forEach(key => {
    console.log(key); // the key for example "creator"
    console.log(language[key]); // the value of that key, for example "Brendan Eich"
});

// .forEach as the forEach method does not work on objects (it works on arrays).
function getAverageOfElementsAtProperty(obj, key) 
    {
    // your code here
      let num = 0;
      let average = 0;
      console.log(num);
        if (Array.isArray(obj.key))
            { 
              obj.key.forEach(function(addup)
                {
                  num += addup;
                  console.log(num);
                });
                average = num / (obj.key.length);
                } 
                if (average === Number.NaN) {
                return null;
                }
                if (isNaN(average)) {
                return 0;
                }
                return average;
    }

let obj = {
  key: []
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

//-------------------------------------------------------------------------


const double = x => x * 2;

// a function within a function within a function
//const function = nameOfFunction => returns nameOfFunstion.filter(anotherName => anotherName in boolean statement)
const getFreezingTemperatures = temperatures => {
    return temperatures.filter(temp => temp <=0);
}

//sample usage
console.log(getFreezingTemperatures([5, -20, 37]));

// .includes for returning/checking/throwing if the arguments are true/false
const containsAmsterdam = cities => {
    return cities.includes("Amsterdam");
}
console.log(containsAmsterdam(["Brussels", "Amsterdam", "Oslo"]));



//Splits a string into an array.
const splitBySemiColon = string => {
    return string.split(";");
}

console.log(splitBySemiColon("John;Jennifer;Liham"));



//Joins array elements into a string
const getNamesString = people => {
    return people.join(", ");
}

console.log(getNamesString(["John", "Jennifer", "Liham"]));



//Applies a function to every element in an array. Map is used to transform an array into another one.

const namesInUpperCase = names => {
    return names.map(name => name.toUpperCase());
}

console.log(namesInUpperCase(["John", "Jennifer", "Liham"]));

//----------------------------------------------------------------------------


// To define an object, you use the curly braces {}

const language = {
    name: "JavaScript",
    creator: "Brendan Eich",
    is_popular: true
}


language.name; //"JavaScript";
language.is_popular; //true


function getPersonObject(){
    const person ={
        age : 9,
        first_name : "t",
        last_name : "h"
    }
    
     return person;
 }
 
 //sample usage
 console.log(getPersonObject());
 

 function getPersonFullName(person){
    return person.name.first +" "+ person.name.last ;
}

//sample usage
const person = {
    age: 18,
    name: {
        first: "Jennifer",
        last: "Doe"
    }
}
console.log(getPersonFullName(person));



//------------------------------------------------------------------------------------
const language = {
    name: "JavaScript",
    creator: "Brendan Eich",
    is_popular: true
}

//You can get them using Object.keys(your_object) which returns an array of those keys:
Object.keys(language); //["name", "creator", "is_popular"]

//You can also get the values using Object.values(your_object) which returns an array of the values:
Object.values(language); //["JavaScript", "Brendan Eich", true]

//------------------------------------------------------------------------------------

//Concatenate objects

//In some scenarios, you'd like to merge 2 objects together. You can do that using the ... spread operator.
const firstPerson = {
    name: "John",
    age: 18
}

const secondPerson = {
    age: 25
}

const mergedObjects = {...firstPerson, ...secondPerson};

//Destructuring

//

const person = {
    first_name: "Jennifer",
    last_name: "Doe",
    age: 24
}
//and you're interested in creating 2 variables, one for the first_name and the other one for the last name:

const first_name = person.first_name;
const last_name = person.last_name;
//You could do all of that in one line using the destructuring syntax below:

const {first_name, last_name} = person;

// Destructuring is just a nicer syntax that lets you extract multiple properties from an object.

// You could also provide a default value for a variable, in case it did not exist in the object. Example:


const {first_name, last_name, status = 'single'} = person;
// In our case, status will default to "single" because it does not exist on the person object.


/**
* @param Concatenate objects
* Complete the function such that it returns an object which merges the options with the defaultOptions. 
* If a key is defined in the options, it should override the option provided in the defaultOptions.
*/

/**
 * @param {object} options
 * @param {object} defaultOptions
 */
const mergeOptions = (options, defaultOptions) => {
    
    return {...defaultOptions, ...options};
}

//sample usage
const options = {
    tabSize: 4,
};
const defaultOptions = {
    indentation: 'tab',
    tabSize: 2,
    language: 'javascript',
};
console.log(mergeOptions(options, defaultOptions));


/**
 * @param {object} userLocation
 */
const getLatLng = userLocation => {
    //destructure into 2 variables: lat & lng
const {lat, lng} = userLocation;
    return `The latitude is ${lat} and the longitude is ${lng}`;
}

//sample usage
const userLocation = {
    lat: 24.235235,
    lng: 2.5734,
};
console.log(getLatLng(userLocation));

const getLatLngElevation = userLocation => {
    //destructure into 3 variables: lat, lng & elevation (defaulting to 0)
const {lat, lng, elevation = 0}=userLocation;
    return `The latitude is ${lat}, the longitude is ${lng} and the elevation is ${elevation} meters`;
}

//sample usage
const userLocation = {
    lat: 24.235235,
    lng: 2.5734,
};
console.log(getLatLngElevation(userLocation));


/**
 * @param {object} person
 */
const getFullName = person => {
    return `${person.first_name} ${person.parents.father.last_name}`;
}

//sample usage
const person = {
    first_name: "Jennifer",
    grades: [10, 6, 14, 3, 18],
    age: 17,
    parents: {
        father: {
            last_name: "Doe"
        },
        mother: {
            last_name: "Doe"
        }
    }
};
console.log(getFullName(person));


const getNumberOfTestsTaken = grades => {
    let tests = 0;
        grades.forEach(grades => tests++);
    return tests;
};

const getNumberOfTestsTaken = grades => {  
    return grades.length;
};

//sample usage
const grades = [{
    date: "2018-12-13",
    grade: 14
}, {
    date: "2018-12-15",
    grade: 18
}]
console.log(getNumberOfTestsTaken(grades));

/**
 * @param {object[]} grades
 */
const getSumOfGrades = results => {
    let sum = 0;
            results.forEach(result => sum += result.grade);
        return sum;
    };
    
//sample usage
    const results = [{
        date: "2018-12-13",
        grade: 14
    }, {
        date: "2018-12-15",
        grade: 18
    }]
    console.log(getSumOfGrades(results));

    const getAverageAge = users => {
        let sum = 0;
            users.forEach(user => sum += user.age);
            return sum / users.length;
        };
        
//sample usage
        const users = [{
            joined_on: "2018-12-13",
            age: 14
        }, {
            joined_on: "2018-12-15",
            age: 18
        }]
        console.log(getAverageAge(users));
        

///You can empty an array, by setting its length to 0:

        const items = ["Pen", "Paper"];
        items.length = 0;

//array.splice
//You can also delete specific elements by using the splice(start[, deleteCount]) method.

        const items = ["Pen", "Paper", "Staples"];
        const deletedItem = items.splice(0, 1); // removes one element at index 0
        console.log(deletedItem); // ["Pen"]

        console.log(items); // ["Paper", "Staples"]

//From a string, you can create an array of its characters:
        const name = "Jad";
        const characters = [...name]; //["J", "a", "d"]

        // Destructure from array

        const dimensions = [20, 5]
        const width = dimensions[0];
        const height = dimensions[1];
        console.log(width); //20
        console.log(height); //5


        const dimensions = [20, 5]
// destructure first array item into "width"
// and 2nd array item into "height"
        const [width, height] = dimensions;
        console.log(width); //20
        console.log(height); //5

//Concatenate arrays
//Concatenating arrays lets you merge 2 arrays together into a new array that contains the elements of both arrays.

        const lat = [5.234];
        const lng = [1.412];
        const point = [...lat, ...lng]; //[5.234, 1.412];

        /**
         * @param {string} string
         */
        
        
         const splitStringIntoChars = string => {
            const cutString = [...string];
            return cutString;
        }

        //sample usage
        console.log(splitStringIntoChars("Hello World!"));




        function getEvenLengthWordsAtProperty(obj, key) {
            const arr = [];
            if (Array.isArray(obj.key)){
           for(let i=0; i< obj.key.length;i++){
               if (obj.key[i].length %2 !== 1){
                 arr.push(obj.key[i]);
               }
             }}
              return arr;
             }
             
             
         function getELWAP(obj, key) {
            const arr = [];
            if (Array.isArray(obj.key)){
                   obj.key.forEach(keys => { 
                     if(keys.length %2 !== 1){
                     arr.push(keys);
                   }});}
              return arr;
             }    
             
             
         
         var obj = {
           key: ['a', 'long', 'game']
         };
         var output = getEvenLengthWordsAtProperty(obj, 'key');
         var output2 = getELWAP(obj, 'key');
         console.log(output); // --> ['long', 'game']
         console.log(output2);


         /**
 * @param {array} location
 */
        const getLatLng = location => {
            //destructure into 2 variables: lat & lng
        const [lat, lng] = location;
            return `The latitude is ${lat} and the longitude is ${lng}`;
        }

        //sample usage
        const location = [24.235235, 2.5734];
        console.log(getLatLng(location));
