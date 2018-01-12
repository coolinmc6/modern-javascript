str = 'Innovation distinguishes between a leader and a follower.';

const trim = str => str.replace(/^\s*|\s*$/g, '');

const noPunct = str => str.replace(/[?.,!]/g,'');

const capitalize = str => str.toUpperCase();

const breakout = str => str.split(" ");

const noArticles = str => (str !== "A" && str !== "AN" && str !== "THE");

const filterArticles = arr => arr.filter(noArticles);

//console.log(filterArticles(breakout(capitalize(noPunct(trim(str))))));

/*
Compose
- we use the spread operator to bring in all of these arguments into a single array
- compose is returning a function...so prepareString is a function
- reduceRight works on the right side of the array, reduce works on the left
-

*/
const compose = function(...fns) {
    return function(x) {
        let count = 1;
        return fns.reduceRight(function(v, f) {
            console.log('Iteration #' + count);
            console.log('f = ' + f.name + ' ==> ' + f)
            console.log('v = ' + v);
            count++
            return f(v);
        }, x);
    }
};



const prepareString = compose(
    filterArticles, 
    breakout, 
    capitalize, 
    noPunct, 
    trim);



const pipe = function(...fns) {
    return function(x) {
        return fns.reduce(function(v, f) {
            return f(v);
        }, x);
    }
};

// const prepareString = pipe(
//     trim,
//     noPunct,
//     capitalize,
//     breakout,
//     filterArticles);


console.log(prepareString(str));



