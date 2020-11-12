/**
 * 
 *  Matching Brackets * 
 * 
 * 1. function - take Any string * 
 * 2. Iterate over the string * 
 * 3. Return whether the string is a valid string with 
        correct matching brackets 
        string w/ no brackets is fine *
 * 4. Use a stack! 
 *      const stack = []; * 
 *      stack.push('{') * 
 *      stack.pop(); * 
 * 5. for loop up here w/ idx iterator 
 *      let char = str.charAt(idx); 
 *      str[idx]
 * 1. Declare a character stack which will hold an 
 * array of all the opening parenthesis.
 * 
2. Now traverse the expression string exp.

3. If the current character is a starting 
bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.

4. If the current character is a closing 
bracket (‘)’ or ‘}’ or ‘]’) then pop from 
stack and if the popped character is the matching 
starting bracket then fine else parenthesis are not balanced.

5. After complete traversal, if there is some 
starting bracket left in stack then “not balanced”
 * 
 * 
 * 
 */


 

 const matchingBrackets = str => {
     let stack = [];
     let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
            console.log(stack);
        }else if (str[i] === ')' || str[i] === '}' || str[i] === ']' ){
            let last = stack.pop();
            if (str[i] !== map[last]) {console.log(str[i]); return false; };
        }
        console.log(stack);
    }
    if (stack.length !== 0) {return false};

    return true;
 }

 console.log(matchingBrackets("this is a string"));
 console.log(matchingBrackets("this(is){a}string")); // returns true
console.log(matchingBrackets("[{()()}this]({})((is(({})a)[string]{{{}}}))[][][]")); // returns true
console.log(matchingBrackets("this({(is({a))}string)}"));  // returns false