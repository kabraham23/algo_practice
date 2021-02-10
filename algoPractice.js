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

function getNthFib(n) {
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
}
console.log(getNthFib(6));