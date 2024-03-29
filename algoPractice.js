// Day One  

// INTERVIEW CAKE - MERGING RANGES

// let HiCal = (startTime, endTime) => {
//     if (startTime[i] <= startTime[j])
// }
// function mergeRanges(meetings) {
// const meetingsCopy = JSON.parse(JSON.stringify(meetings));

// const sortedMeetings = meetingsCopy.sort((a, b) => {
//     return a.startTime - b.startTime;
// });

// const mergedMeetings = [sortedMeetings[0]];

// for (let i = 1; i < sortedMeetings.length; i++) {
//     const currentMeeting = sortedMeetings[i];
//     const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

//     if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
//         lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
//     } else {
//         mergedMeetings.push(currentMeeting);
//     }
// };
// return mergedMeetings;
// };

// console.log(mergeRanges(  [
//     { startTime: 0,  endTime: 1 },
//     { startTime: 3,  endTime: 5 },
//     { startTime: 4,  endTime: 8 },
//     { startTime: 10, endTime: 12 },
//     { startTime: 9,  endTime: 10 },
//   ]));

// LEET CODE - ADD TWO NUMBERS



/////////////////////////////////////////////
// Write a function that takes an array of characters and reverses the letters in place
/////////////////////////////////////////////

// function reverse(arrayOfChars) {
//     let leftIndex = 0;
//     let rightIndex = arrayOfChars.length-1;

//     while (leftIndex < rightIndex) {
//         const temp = arrayOfChars[leftIndex];
//         arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
//         arrayOfChars[rightIndex] = temp;

//         leftIndex++;
//         rightIndex--;
//     }
    
// };

////////////////////////////////////////////////////
// Write a function that reverses a string
////////////////////////////////////////////////////


// function reverseWords(message) {
    
//     reverseCharacters(message, 0, messsage.length-1);
    
//     let currentWordStartIndex = 0;
//     for (let i = 0; i <= message.length; i++) {
//       if (i === message.length || message[i] === ' ') {
//         reverseCharacters(message, currentWordStartIndex, i - 1);
//         currentWordStartIndex = i  - 1;
//       }
//     };
    
//     function reverseCharacters(message, leftIndex, rightIndex) {
//       while (leftIndex < rightIndex){
//         const temp = message[leftIndex];
//         message[leftIndex] = message[rightIndex];
//         message[rightIndex] = temp;
//         leftIndex++;
//         rightIndex--;
//       }
//     };
    
    
  
//   }
//   console.log(reverseWords("katie is cool"));
  
/////////////////////////////////////////
// Merging two arrays
/////////////////////////////////////////

// function mergeArrays(myArray, alicesArray) {
    
//     const mergedArray = [];
    
//     let currentIndexA = 0;
//     let currentIndexM = 0;
//     let currentIndexMerged = 0;
    
//     while (currentIndexMerged < (myArray.length + alicesArray.length)) {
//       const isMyArrayExhausted = currentIndexM >= myArray.length;
//       const isAliceArrayExhausted = currentIndexA >= alicesArray.length;
      
//       if (!isMyArrayExhausted && (isAliceArrayExhausted || (myArray[currentIndexM] < alicesArray[currentIndexA]))) {
//         mergedArray[currentIndexMerged] = myArray[currentIndexM];
//         currentIndexM++;
//       }
//       else {
//         mergedArray[currentIndexMerged] = alicesArray[currentIndexA];
//         currentIndexA++
//       }
//       currentIndexMerged++;
    
//     }
    
//     return mergedArray;
//   }


//////////////////////////////////////
// Given three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.
//////////////////////////////////////



/////////////////////////////////////
// Anagram Checker
/////////////////////////////////////
// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//         return false;
//     }

//     const lookup = {};

//     for (let i = 0; i < first.length; i++) {
//         let letter = first[i];
//         lookup[letter] ? lookup[lettter] += 1 : lookup[letter] = 1;
//     }
//     for (let i = 0; i < second.length; i++) {
//         let letter = second[i];
//         if (!lookup[letter]) {
//             return false;
//         }
//         else {
//             lookup[letter] -= 1;
//         }
//     }
//     return true;
// }

// console.log(validAnagram('katie', 'ktiea'));

//////////////////////////////////
// Two Sum
//////////////////////////////////

// function twoNumberSum(array, targetSum) {
//     // Write your code here.
//       const result = {};
//       for (let num of array) {
//           const match = targetSum - num;
//           if (match in result) {
//               return [match, num]
//           } else {
//               result[num] = true
//           }
//       }
//       return [];
//   };
// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

//////////////////////////////////
// Valid Subsequence
//////////////////////////////////

// function isValidSubsequence(array, sequence) {
//     // Write your code here.
//       let sequenceHolder = 0;
//       for (let i of array) {
//           if (sequenceHolder === sequence.length) break;
//           if (sequence[sequenceHolder] === i) sequenceHolder++;
//       }
//       return sequenceHolder === sequence.length;
//    };

/////////////////////////////////
// Binary Search Trees
////////////////////////////////

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
// }

// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree ... etc

////////////////////////////////
// BST Insert
///////////////////////////////

// class Node {
//         constructor(value) {
//             this.value = value;
//             this.left = null;
//             this.right = null;
//         }
//     }
    
// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
//     insert(value){
//         let newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         } else {
//             let current = this.root;
//             while(true) {
//                 if(value === current.value) return undefined;
//                 if (value < current.value){
//                     if(current.left === null){
//                         current.left = newNode;
//                         return this;
//                     } else current = current.left;
//                 }else if(value > current.value){
//                     current.right = newNode;
//                     return this;
//                 } else {
//                     current = current.right;
//                 }
//             }
//         }
//     }
// };

// var tree = new BinarySearchTree();
// console.log(tree.insert(10))
// console.log(tree.insert(5))
// console.log(tree.insert(13))
// console.log(tree.insert(11));


////////////////////////////////////////
// Find in BST
////////////////////////////////////////

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
//     find(value){
//         if(this.root === null) return false;
//         let current = this.root,
//             found = false;
//         while (current && !found){
//             if (value < current.value){
//                 current = current.left;
//             } else if (value > current.value){
//                 current = current.right;
//             } else {
//                 found = true;
//             }
//         }
//         if(!found) return false;
//         return current;
//     }
// };

///////////////////////////////
// Sum of Each Branch in Binary Tree
///////////////////////////////

// class BinaryTree {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function branchSums(root) {
//     const sums = [];
//     caluclateBranchSums(root, 0, sums);
//     return sums;
// }

// function caluclateBranchSums(node, runningSum, sums) {
//     if (!node) return;
//     const newRunningSum = runningSum +node.value;
//     if (!node.left && !node.right) {
//     sums.push(newRunningSum);
//     return;
//     }

//     caluclateBranchSums(node.left, newRunningSum, sums);
//     caluclateBranchSums(node.right, newRunningSum, sums);
// }

////////////////////////////////////////
// Count Unique Values
////////////////////////////////////////

// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0;
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//         // console.log(i,j);
//     }
//     return i + 1;
// };

// // countUniqueValues();
// console.log(countUniqueValues([1,1,2,3,4,5,5,6,7]));

///////////////////////////////
// Sliding Window Problems
///////////////////////////////

// Useful in keeping track of a subset in a larger array or string

// function maxSubarraySum(arr, num) {
//     if (num > arr.length){
//         return null;
//     }
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num +1; i++){
//         temp = 0;
//         for (let j = 0; j < num; j++){
//             temp += arr[i+j];
//         }
//         if (temp > max){
//             max = temp;
//         }
//     }
//     return max;
// }
// console.log(maxSubarraySum([2,5,6,9,2,1,8,5,6,3],3))
// // this method is very inefficient

// // SLIDING WINDOW

// function maxSubarray(arr, num){
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < num) return null;
//     for (let i = 0; i < num; i++){
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for (let i = num; i < arr.length; i++){
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
// }
// console.log(maxSubarray([2,5,6,9,2,1,8,5,6,3],3))

////////////////////////////////
// Node Depths
////////////////////////////////

// function nodeDepths(root, depth = 0) {
// 	let sumOfDepths = 0;
// 	if (root === null) return 0;
// 	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
// }

// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// exports.nodeDepths = nodeDepths;





/////////////////////////////////////
// Add Two Numbers - leetCode (linked lists)
/////////////////////////////////////

// var addTwoNumbers = function(l1, l2) {
//     let list = new ListNode(0);
//     let currentNode = list;
    
//     let sum = 0;
//     let carry = 0;
    
//     while (l1 !== null || l2 !== null || sum > 0) {
//         if (l1 !==null) {
//             sum += l1.val;
//             l1 = l1.next;
//         }
//         if (l2 !== null) {
//             sum += l2.val;
//             l2 = l2.next;
//         }
        
//         carry = Math.floor(sum / 10);
//         sum = sum % 10;
        
//         currentNode.next = new ListNode(sum);
//         currentNode = currentNode.next;
        
//         sum = carry;
//         carry = 0;
//     }
//     return list.next;
// };

//////////////////////////////////////
// occurences in array
//////////////////////////////////////

// function findNumberWithNOccurrences(numbers, n) {
//     let numCount = 0;
//     for (let i = 0; i < numbers.length; i++)
//         if (n === numbers[i]) numCount++;
//     console.log(numCount);
// } return findNumberWithNOccurrences([1,1,1,1,1,2,3,4,5,6], 1);

//////////////////////////////////////
// Depth-first search
//////////////////////////////////////

// class Node {
//     constructor(name) {
//       this.name = name;
//       this.children = [];
//     }
  
//     addChild(name) {
//       this.children.push(new Node(name));
//       return this;
//     }
  
//     depthFirstSearch(array) {
//       // Write your code here.
//           array.push(this.name)
//           for (const child of this.children) {
//               child.depthFirstSearch(array);
//           }
//           return array;
//       }
//   }
  

////////////////////////////////////
// Twitter Code Challenge
////////////////////////////////////
// function pthFactor(n, p){
//     let factorArray = [];
//     for (let i = 1; i <= n; i++){
//       if (n % i === 0) {
//         factorArray.push(i);
//       } else i++;
//     } console.log(factorArray[(p - 1)]);
//   } return pthFactor(20, 3);


////////////////////////////////////
// Minimum Waiting Time
////////////////////////////////////

// function minimumWaitingTime(queries) {
//    queries.sort((a, b) => a - b);

//    let totalWaitingTime = 0;
//    for (let idx = 0; idx < queries.length; idx++) {
//        const duration = queries[idx];
//        const queriesLeft = queries.length = (idx + 1);
//        totalWaitingTime += duration + queriesLeft;
//    }
//    return totalWaitingTime;
// }


////////////////////////////////////
// Better.com coding challenge
////////////////////////////////////

// function solution(N) {
//     let numArray = N.toString().split('');
//     console.log(numArray)
//     for (let i = 0; i >= numArray.length; i++) {
//         if (numArray[i] > 5) i++;
//         else if (numArray[i] < 5) {numArray.push(5).charAt(i)};
//         console.log(i);
//     }
//     // let newNum = parseInt(numArray);
//     // return newNum;
// }
// console.log(solution(268))

// function solution(S) {
//     let upperCase = [];
//     let lowerCase = [];
//     let stringArray = S.split('');
//     console.log(stringArray)
//     for (let i = 0; i <= stringArray.length-1; i++) {
//         if (stringArray[i] === stringArray[i].toUpperCase()) upperCase.push(stringArray[i]);
//         else if (stringArray[i] === stringArray[i].toLowerCase()) lowerCase.push(stringArray[i]);
//     }
//     let balancedFragment = 0;
//     for (let j = 0; j < upperCase.length; j++) {
//         for (let k = 0; k < lowerCase.length; k++) {
//             if (upperCase[j] === lowerCase[k].toUpperCase())
//             balancedFragment++;
            
//         }
//     }return balancedFragment;
// }
// console.log(solution('catCAT'))

// function solution(S, K) {
//     let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     if (K > 500) return undefined;
//     const dayIndex = daysOfWeek.indexOf(S);
//     const numIndex = (dayIndex + K) % daysOfWeek.length;
//     return daysOfWeek[numIndex]
// };
// console.log(solution('Sat', 23))

///////////////////////////////////
// Nth Fibonacci
///////////////////////////////////

// bad time complexity
// function getNthFib(n) {
//     if (n === 2) {
//         return 1;
//     } else if (n === 1) {
//         return 0;
//     } else {
//         return getNthFib(n - 1) + getNthFib(n - 2);
//     }
// }
// console.log(getNthFib(6));

// memoize hash table O(n) time and space complexity
// function getNthFib(n, memoize = {1: 0, 2: 1}) {
//     if (n in memoize) {
//         return memoize[n];
//     } else {
//         memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
//         return memoize[n];
//     }
// }
// console.log(getNthFib(6));

// o(n) time || o(1) space
// function getNthFib(n) {
//     const lastTwo = [0, 1];
//     let counter = 3;
//     while (counter <= n) {
//         const nextFib = lastTwo[0] + lastTwo[1];
//         lastTwo[0] = lastTwo[1];
//         lastTwo[1] = nextFib;
//         counter++;
//     }
//     return n > 1 ? lastTwo[1] : lastTwo[0];
// }
// console.log(getNthFib(6))

///////////////////////////
// Twitch coding challenge
//////////////////////////
// class PrefixTreeNode {
//     constructor(value) {
//         this.children = {};
//         this.endWord = null;
//         this.value = value;
//     }
// };

// class PrefixTree extends PrefixTreeNode {
//     constructor() {
//         super(null);
//     }
//     addStreamer(string) {
//         const addStreamerHelper = (node, str) => {
//             if (!node.children[str[0]]) {
//                 node.children[str[0]] = new PrefixTreeNode(str[0]);
//                 if (str.length === 1) {
//                     node.children[str[0]].endWord = 1;
//                 }
//             } else {

//             } if (str.length > 1) {
//                 addStreamerHelper(node.children[str[0]], str.slice(1));
//             }
//         };
//         addStreamerHelper(this, string);
//     }
// }
// predictStreamer = (string) => {
//     let getRemainingTree = function(string, tree) {
//         let node = tree;
//         while (string) {
//             node = node.children[string[0]];
//             string = string.substr(1);
//         }
//         return node;
//     };

//     let allStreamers = [];

//     let allStreamersHelper = function(stringSoFar, tree) {
//         for (let k in tree.children) {
//             const child = tree.children[k]
//             let newString = stringSoFar + child.value;
//             if (child.endWord) {
//                 allStreamers.push(newString);
//             }
//             allStreamersHelper(newString, child);
//         } 
//         };
//         let remainingTree = getRemainingTree(string, this);
//         if (remainingTree) {
//             allStreamersHelper(string, remainingTree);
//         }
//         return allStreamers;
//     }   
    
//////////////////////////////////
// Product Sum (algoExpert)
//////////////////////////////////

// function productSum(array, multiplier = 1) {
//       let sum = 0;
//       for (const element of array) {
//           if (Array.isArray(element)) {
//               sum += productSum(element, multiplier + 1);
//           } else { 
//           sum += element;
//           }
//       }
//       return sum * multiplier;
//   }

//////////////////////////////////
// Binary Search
//////////////////////////////////

// function binarySearch(array, target) {
//     // Write your code here.
//       return binarySearchHelper(array, target, 0, array.length - 1);
//   }
  
//   function binarySearchHelper(array, target, left, right) {
//       while (left <= right) {
//           const middle = Math.floor((left + right) / 2);
//           const potentialMatch = array[middle];
//           if (target === potentialMatch) {
//               return middle;
//           } else if (target < potentialMatch) {
//               right = middle - 1;
//           } else {
//               left = middle + 1;
//           }
//       }
//       return -1;
//   }


  //////////////////////////////////
  // Find Three Largest Numbers
  //////////////////////////////////

//   function findThreeLargestNumbers(array) {
//     // Write your code here.
//       let threeLargest = [null, null, null];
//       for (const num of array) {
//           updateLargest(threeLargest, num);
//       }
//       return threeLargest;
//   }
  
//   function updateLargest(threeLargest, num) {
//       if (threeLargest[2] === null || num > threeLargest[2]) {
//           shiftAndUpdate(threeLargest, num, 2);
//       } else if (threeLargest[1] === null || num > threeLargest[1]) {
//           shiftAndUpdate(threeLargest, num, 1);
//       } else if (threeLargest,[0] === null || num > threeLargest[0]) {
//           shiftAndUpdate(threeLargest, num, 0);
//       }
//   }
  
//   function shiftAndUpdate(array, num, idx) {
//       for (let i = 0; i <= idx; i++) {
//           if (i === idx) {
//               array[i] = num;
//           } else {
//               array[i] = array[i + 1];
//           }
//       }
//   }
  
  ///////////////////////////////
  // Bubble Sort
  ///////////////////////////////

  // function bubbleSort(array) {
  //     let isSorted = false;
  //     let counter = 0;
  //     while (!isSorted) {
  //       isSorted = true;
  //       for (let i = 0; i < array.length - 1 - counter; i++) {
  //           if (array[i] > array[i + 1]) {
  //               swap(i, i + 1, array);
  //               isSorted = false;
  //           }
  //       }
  //       counter++;
  //     }
  //     return array;
  // }

  // function swap(i, j, array) {
  //     const temp = array[j];
  //     array[j] = array[i];
  //     array[i] = temp;
  // }

//////////////////////////////
// Three Sum
//////////////////////////////

// function threeNumberSum(array, targetSum) {
// 	array.sort((a, b) => a - b);
// 	const triplets = [];
// 	for (let i = 0; i < array.length - 2; i++) {
// 		let left = i + 1;
// 		let right = array.length - 1;
// 		while (left < right) {
// 			const currentSum = array[i] + array[left] + array[right];
// 			if (currentSum === targetSum) {
// 				triplets.push([array[i], array[left], array[right]]);
// 				left++;
// 				right--;
// 			} else if (currentSum < targetSum) {
// 				left++;
// 			} else if (currentSum > targetSum) {
// 				right--;
// 			}
// 		}
// 	}
// 	return triplets;
// }

///////////////////////////////
// Smallest Difference in two arrays
///////////////////////////////

// function smallestDifference(arrayOne, arrayTwo) {
// 	arrayOne.sort((a, b) => a - b);
// 	arrayTwo.sort((a, b) => a - b);
// 	let idxOne = 0;
// 	let idxTwo = 0;
// 	let smallest = Infinity;
// 	let current = Infinity;
// 	let smallestPair = [];
// 	while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
// 		let firstNum = arrayOne[idxOne];
// 		let secondNum = arrayTwo[idxTwo];
// 		if (firstNum < secondNum) {
// 			current = secondNum - firstNum;
// 			idxOne++;
// 		} else if (secondNum < firstNum) {
// 			current = firstNum - secondNum;
// 			idxTwo++;
// 		} else {
// 			return [firstNum, secondNum];
// 		}
// 		if (smallest > current) {
// 			smallest = current;
// 			smallestPair = [firstNum, secondNum];
// 		}
// 	}
// 	return smallestPair;
// }

///////////////////////////////
// Move Element to End
///////////////////////////////

// function moveElementToEnd(array, toMove) {
// 	let i = 0;
// 	let j = array.length -1;
// 	while (i < j) {
// 		while (i < j && array[j] === toMove) j--;
// 		if (array[i] === toMove) swap(i, j, array);
// 		i++;
// 	}
// 	return array;
// }

// function swap(i, j, array) {
// 	const temp = array[j];
// 	array[j] = array[i];
// 	array[i] = temp;
// }

////////////////////////////////
// Monotonic Array
////////////////////////////////

// MY ANSWER

// function isMonotonic(array) {
// 	monotonicArray = false;
// 	array.sort((a, b) => a - b);
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] === array[i + 1])
// 			momontonicArray = true;
// 	}
// 	return monotonicArray;
// }

// // REAL ANSWER

// function isMonotonic(array) {
// 	if (array.length <= 2) return true;
	
// 	let direction = array[1] - array[0];
// 	for (let i = 2; i < array.length; i++) {
// 		if (direction === 0) {
// 			direction = array[i] - array[i - 1];
// 			continue;
// 		}
// 		if (breaksDirection(direction, array[i - 1], array[i])) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function breaksDirection(direction, previousInt, currentInt) {
// 	const difference = currentInt - previousInt;
// 	if (direction > 0) return difference < 0;
// 	return difference > 0;
// }


////////////////////////////////////////
// Spiral Traverse
///////////////////////////////////////

// function spiralTraverse(array) {
// 	const result = [];
// 	let startRow = 0,
// 			endRow = array.length -1;
// 	let startCol = 0,
// 			endCol = array[0].length -1;
	
// 	while (startRow <= endRow && startCol <= endCol) {
// 		for (let col = startCol; col <= endCol; col++) {
// 			result.push(array[startRow][col]);
// 		}
		
// 		for (let row = startRow + 1; row <= endRow; row++) {
// 			result.push(array[row][endCol]);
// 		}
		
// 		for (let col = endCol - 1; col >= startCol; col--) {
// 			if (startRow === endRow) break;
// 			result.push(array[endRow][col]);
// 		}
		
// 		for (let row = endRow - 1; row > startRow; row--) {
// 			if (startCol === endCol) break;
// 			result.push(array[row][startCol]);
// 		}
		
// 		startRow++;
// 		endRow--;
// 		startCol++;
// 		endCol--;
// 	}
// 	return result;
// }

///////////////////////////////////
// Longest Peak
///////////////////////////////////

// function longestPeak(array) {
// 	let longestPeakLength = 0;
// 	let i = 1;
// 	while (i < array.length -1) {
// 		const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
// 		if (!isPeak) {
// 			i++;
// 			continue;
// 		}
// 		let leftIdx = i - 2;
// 		while (leftIdx >= 0 && array[leftIdx] < array[leftIdx +1]) {
// 			leftIdx--;
// 		}
// 		let rightIdx = i+2;
// 		while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
// 			rightIdx++;
// 		}
// 			const currentPeakLength = rightIdx - leftIdx - 1;
// 			longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
// 			i = rightIdx;
// 	}
// 	return longestPeakLength;
// }

// ///////////////////////////////////
// // Array of Products
// ///////////////////////////////////

// function arrayOfProducts(array) {
// 	const products = new Array(array.length).fill(1);
	
// 	let leftRunningProduct = 1;
// 	for (let i = 0; i < array.length; i++) {
// 		products[i] = leftRunningProduct;
// 		leftRunningProduct *= array[i];
// 	}
	
// 	let rightRunningProduct = 1;
// 	for (let i = array.length - 1; i > -1; i--) {
// 		products[i] *= rightRunningProduct;
// 		rightRunningProduct *= array[i];
// 	}
// 	return products;
// }

// ////////////////////////////////
// // Remove Duplicates from Sorted Array (leetcode)
// ////////////////////////////////

// var removeDuplicates = function(nums) {
//   if (nums.length === 0) return 0;
//   i = 0;
//   for (let j = 1; j < nums.length; j++) {
//       if (nums[j] !== nums[i]) {
//           i++;
//           nums[i] = nums[j];
//       }
//   }
//   return i + 1;
// };

////////////////////////////////////
// Full BST Construction
////////////////////////////////////

// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(value) {
//     // Write your code here.
//     // Do not edit the return statement of this method.
// 			let current = this;
// 			while(true) {
// 				if(value < current.value){
// 					if(current.left === null){
// 						current.left = new BST(value);
// 						break;
// 						} else {
// 							current = current.left;
// 						}
// 					} else {
// 						if (current.right === null) {
// 							current.right = new BST(value);
// 							break;
// 						} else {
// 							current = current.right;
// 						}
// 				}
// 			}
//     return this;
// 	}

//   contains(value) {
//     // Write your code here.
// 		let current = this;
// 		while (current !== null) {
// 			if (value < current.value){
// 				current = current.left;
// 			} else if (value > current.value){
// 				current = current.right;
// 			} else {
// 				return true;
// 			}
// 		}
// 		return false;
//   }

//   remove(value, parentNode = null) {
//     // Write your code here.
//     // Do not edit the return statement of this method.
// 		let current = this;
// 		while (current !== null) {
// 			if (value < current.value) {
// 				parentNode = current;
// 				current = current.left;
// 			} else if (value > current.value) {
// 				parentNode = current;
// 				current = current.right;
// 			} else {
// 				if (current.left !== null && current.right !== null) {
// 					current.value = current.right.getMinValue();
// 					current.right.remove(current.value, current);
// 				} else if (parentNode === null) {
// 					if (current.left !== null) {
// 						current.value = current.left.value;
// 						current.right = current.left.right;
// 						current.left = current.left.left;
// 					} else if (current.right !== null) {
// 						current.value = current.right.value;
// 						current.left = current.right.left;
// 						current.right = current.right.right;
// 					} else {
						
// 					}
// 				} else if (parentNode.left === current) {
// 					parentNode.left = current.left !== null ? current.left : current.right;
// 				} else if (parentNode.right === current) {
// 					parentNode.right = current.left !== null ? current.left : current.right;
// 				}
// 				break;
// 			}
// 		}
//     return this;
//   }
// 	getMinValue() {
// 		let current = this;
// 		while (current.left !== null) {
// 			current = current.left;
// 		}
// 		return current.value;
// 	}
// }

////////////////////////////////
// Class Photos
////////////////////////////////

// function classPhotos(redShirtHeights, blueShirtHeights) {
	
// 	  redShirtHeights.sort((a, b) => b - a);
// 	  blueShirtHeights.sort((a, b) => b - a);
	  
// 	  const shirtColorFront = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
// 	  for (let i = 0; i < redShirtHeights.length; i++) {
// 		  const redShirtHeight = redShirtHeights[i];
// 		  const blueShirtHeight = blueShirtHeights[i];
		  
// 		  if (shirtColorFront === 'RED') {
// 			  if (redShirtHeight >= blueShirtHeight) return false;
// 		  } else if (blueShirtHeight >= redShirtHeight) return false;
// 	  }
	  
// 	return true;
//   }

// /////////////////////////////
// // Array - Shift Left
// /////////////////////////////

// function rotateLeft(a, d) {
//   let rotatedArray = a.concat();
//   for (let i = 0; i < d; i++) {
//     let frontItem = rotatedArray.shift();
//     rotatedArray.push(frontItem);
//   }
//   return rotatedArray;
// }

///////////////////////////////
// Linked List Practice (Colt Steele)
///////////////////////////////

// class Node{
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList{
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val){
//     let newNode = new Node(val);
//     if (!this.head){
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     } 
//     this.length++;
//     return this;
//   }
// }

// var list = new SinglyLinkedList()
// list.push("Hello")
// list.push("Goodbye")

// /////////////////////
// // Linked List - Pop
// /////////////////////

// class Node{
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList{
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   pop(val){
//     if(!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while(current.next){
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if(this.length === 0){
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
// }

///////////////////////////
// Linked List (shift)
///////////////////////////

// class Node{
//     constructor(val){
//       this.val = val;
//       this.next = null;
//     }
//   }
  
//   class SinglyLinkedList{
//     constructor(){
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//     }
//   shift(){
//     if(!this.head) return undefined;
//     let currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     if(this.length === 0) {
//       this.tail = null;
//     }
//     return currentHead;
//   }
// }

/////////////////////////////////
// Linked Lists (Unshift)
/////////////////////////////////

class Node{
      constructor(val){
        this.val = val;
        this.next = null;
      }
    }
    
    class SinglyLinkedList{
      constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
          this.head = newNode;
          this.tail = this.head;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
      }
      
    }

///////////////////////////
// Linked List - Get
///////////////////////////
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

///////////////////////////
// Linked List - Set
///////////////////////////
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value){ /*this needs the get function to work!*/
    let foundNode = this.get(index);
    if (foundNode){
      foundNode.value = value;
      return true;
    }
    return false
  }
}

/////////////////////////////
// Doubly Linked Lists
/////////////////////////////

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if (this.length ===0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift(){
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(){
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get()
}


////////////////////////
// is Palindrome
////////////////////////

// function isPalindrome(string) {
// 	const reversedString = [];
// 	for (let i = string.length - 1; i >= 0; i--) {
// 		reversedString.push(string[i]);
// 	}
// 	return string === reversedString.join('');
// }


//////////////////////////////////////////
// HackerRank Minimum Swaps 2
/////////////////////////////////////////

// function minimumSwaps(arr) {
//   let swapCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//       const currentIndex = arr[i];
//       const position = i + 1;
//       if (currentIndex !== position) {
//           let indexToSwap
//           for (let j = 0; j < arr.length; j++) {
//               if (arr[j] === position) {
//                   indexToSwap = j;
//                   break;
//               }
//           }
//           arr[indexToSwap] = currentIndex;
//           arr[i] = position;
//           swapCount = swapCount+1;
//       }
//   }
//   return swapCount;
// }

/////////////////////////////////////
// Divide Two Integers (leetcode)
/////////////////////////////////////

// var divide = function(dividend, divisor) {
//   const answer = Math.trunc(dividend / divisor);
//       if (answer > 2147483647) return 2147483647;
//   return answer;
// };

////////////////////////////////
// Sorted Squared Array
////////////////////////////////

// function sortedSquaredArray(array) {
// 	const sortedSquares = new Array(array.length).fill(0);
	
// 	for (let i = 0; i < array.length; i++) {
// 		const value = array[i];
// 		sortedSquares[i] = value * value;
// 	}
// 	sortedSquares.sort((a, b) => a - b);
//   return sortedSquares;
// }

///////////////////////////////
// Validate BST
///////////////////////////////

// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function validateBst(tree) {
// 	return validateBSTHelper(tree, -Infinity, Infinity);
// 	}

// function validateBSTHelper(tree, minValue, maxValue) {
// 	if (tree === null) return true;
// 	if (tree.value < minValue || tree.value >= maxValue) return false;
// 	const leftIsValid = validateBSTHelper(tree.left, minValue, tree.value);
// 	return leftIsValid && validateBSTHelper(tree.right, tree.value, maxValue);
// }

///////////////////////////////////////
// Run-Length Encoding
///////////////////////////////////////

// function runLengthEncoding(string) {
// 	const encodedStringCharacters = [];
// 	let currentRunLength = 1;
	
// 	for (let i = 1; i < string.length; i++) {
// 		const currentChar = string[i];
// 		const previousChar = string[i - 1];
		
// 		if (currentChar !== previousChar || currentRunLength === 9){
// 			encodedStringCharacters.push(currentRunLength.toString());
// 			encodedStringCharacters.push(previousChar);
// 			currentRunLength = 0;
// 		}
// 		currentRunLength++;
// 	}
	
// 	encodedStringCharacters.push(currentRunLength.toString());
// 	encodedStringCharacters.push(string[string.length - 1]);
	
// 	return encodedStringCharacters.join('');
// }

//////////////////////////////
// Generate Document
//////////////////////////////
function generateDocument(characters, document) {
	const characterCounts = {};
	
	for (const char of characters) {
		if(!(char in characterCounts)) characterCounts[char] = 0;
		characterCounts[char]++;
	}
	
	for (const char of document) {
		if(!(char in characterCounts) || characterCounts[char] === 0) return false;
		characterCounts[char]--;
	}
  return true;
}

//////////////////////////
// First non-repeating character
//////////////////////////

// brute force

function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
		let foundDuplicate = false;
		for (let j = 0; j < string.length; j++) {
			if(string[i] === string[j] && i !== j) foundDuplicate = true;
		}
		if (!foundDuplicate) return i;
	}
	return -1;
}


// Hash tables

function firstNonRepeatingCharacter(string) {
	const charFrequencies = {};
	
	for (const char of string) {
		if (!(char in charFrequencies)) charFrequencies[char] = 0;
		charFrequencies[char]++;
	}
	
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (charFrequencies[char] === 1) return i;
	}
	
  return -1;
}

//////////////////////////////////
// Min Height BST
//////////////////////////////////
function minHeightBst(array) {
	return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
	if (endIdx < startIdx) return;
	const midIdx = Math.floor((startIdx + endIdx) / 2);
	const newBstNode = new BST(array[midIdx]);
	if (bst === null) {
		bst = newBstNode;
	} else {
		if (array[midIdx] < bst.value) {
			bst.left = newBstNode;
			bst = bst.left;
		} else {
			bst.right = newBstNode;
			bst = bst.right;
		}
	}
	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
	constructMinHeightBst(array, bst, midIdx + 1, endIdx);
	return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

//////////////////////////////
// Find Kth Largest Value in BST
///////////////////////////////

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
	const sortedNodeValues = [];
	inOrderTraverse(tree, sortedNodeValues);
	return sortedNodeValues[sortedNodeValues.length - k];
}

function inOrderTraverse(node, sortedNodeValues) {
	if (node === null) return;
	
	inOrderTraverse(node.left, sortedNodeValues);
	sortedNodeValues.push(node.value);
	inOrderTraverse(node.right, sortedNodeValues);
}

/////////////////////////////
// Remove Dupes from Linked List
/////////////////////////////

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
	let currentNode = linkedList;
	while (currentNode !== null) {
		let nextDistinctNode = currentNode.next;
		while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
			nextDistinctNode = nextDistinctNode.next;
		}
		currentNode.next = nextDistinctNode;
		currentNode = nextDistinctNode;
	}
  return linkedList;
}

////////////////////////////////////
// Insertion Sort
////////////////////////////////////

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let j=i;
		while (j > 0 && array[j] < array[j - 1]) {
			swap(j, j - 1, array);
			j-= 1;
		}
	}
	return array;
}

function swap(i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}

/////////////////////////////////
// Caesar Cipher Encryptor
/////////////////////////////////

function caesarCipherEncryptor(string, key) {
	const newLetters = [];
	const newKey = key % 26;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	for (const letter of string) {
		newLetters.push(getNewLetter(letter, newKey, alphabet));
	}
	return newLetters.join('')
}

function getNewLetter(letter, key, alphabet) {
	const newLetterCode = alphabet.indexOf(letter) + key;
	return alphabet[newLetterCode % 26];
}