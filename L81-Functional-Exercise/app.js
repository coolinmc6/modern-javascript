// Create a function that will take the array and a student id (any number you want) as 
// parameters. Use map to create a new array that stores each score in an object that includes 
// the activity ID (first score is 0, second score 1, etc.) as well as the student ID. 

// Create a function that will create a new array with the lowest score removed. 
// (For this exercise if both 0s are removed that is OK.)

// Create a function that will Sum the scores.

// Create a function that will compute the average from an array passed in.

// Create a function that will create a new array of score objects that have a 0 score.

// Using the functions you have created, generate a new array with full data. Compute 
// the average once the lowest score has been removed. And create an array of zero scores 
// with the full data that could be provided to the learner.

const array = [10, 0, 90, 80, 50, 0, 60];

// const student = (array, id) => {
// 	let obj = {};

// 	obj.id = id;
// 	obj.scores = array;
// 	return obj;
// }

// const sum = (arr) => {
// 	return arr.reduce((acc, elem) => {
// 		return acc + elem;
// 	}, 0);
// }

// const average = (arr) => {
// 	let count = arr.length;

// 	return (sum(arr) / count);
// }

// console.log(sum(array));
// console.log(average(array));

// const removeZeros = (arr) => {
// 	return arr.filter((val) => val > 0);
// }

// console.log(removeZeros(array));


const mapStudentData = function(array, sID) {
	return array.map(function(val, index) {
		return {
			studentID: sID,
			activityID: index + 1,
			score: val
		};
	})
}

const removeLowScore = (arr) => {
	const min = Math.min(...arr.map(val => val.score));
	console.log('Min: ', min)
	// return arr.filter(elem => elem.score !== min);
	return arr.filter((elem) => {
		console.log(elem);
		return elem.score !== min;
	})
}

// This works because we've gone through the elements already and found the min
// So when the score does not equal the min, we know it's greater
// When it does equal the min, we "neutralize" the min by setting it to null...no element
//    will ever equal null so only one low score (as opposed to ALL low scores) is removed
const removeOneLowScore = function(arr) {
	let min = Math.min(...arr.map(val => val.score));
	let count = 1;
	return arr.reduce(function(result, elem, index) {
		console.log('Iteration #', count, ':  ************************************');
		if(elem.score !== min) {
			console.log('Iteration #', count, ':=> elem.score !== min');
			console.log('Min: ', min, ' Elem.score: ', elem.score)
			count++;
			return [...result, elem]
		}
		if(elem.score === min) {
			min = null;
			console.log('Iteration #', count, ':=> elem.score == min; min is now set to null');
			console.log('Min: ', min, ' Elem.score: ', elem.score)
			count++;
			return result;
		}
	}, []);
}

const sumScoreAttribute = function(arr) {
	return arr.reduce((result, elem) => {
		return result + elem.score;
	}, 0);	
	
};

const pipe = function(...fns) {
	return function(x) {
		return fns.reduce(function(v, f) {
			return f(v);
		}, x);
	}
};

const computeAverage = function(arr) {
	return sumScoreAttribute(arr) / arr.length;
}

const filterZeroScores = function(arr) {
	return arr.filter(elem => elem.score === 0);
}

const fullData = mapStudentData(array, 1001);
console.log(fullData);

const lowValueRemoved = removeLowScore(fullData);
console.log(lowValueRemoved);

const lowOneValueRemove = removeOneLowScore(fullData);
console.log('Remove One Value: ', lowOneValueRemove);

const total = sumScoreAttribute(fullData);
console.log(total);

const highAverage = computeAverage(lowValueRemoved);

const lowAverage = computeAverage(fullData);


const highAverage2 = pipe(removeOneLowScore, computeAverage);

console.log(highAverage2(fullData));




