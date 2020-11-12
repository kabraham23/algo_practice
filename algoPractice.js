// Day One  

// INTERVIEW CAKE - MERGING RANGES

// let HiCal = (startTime, endTime) => {
//     if (startTime[i] <= startTime[j])
// }
function mergeRanges(meetings) {
const meetingsCopy = JSON.parse(JSON.stringify(meetings));

const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
});

const mergedMeetings = [sortedMeetings[0]];

for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
        mergedMeetings.push(currentMeeting);
    }
};
return mergedMeetings;
};

console.log(mergeRanges(  [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]));

// LEET CODE - ADD TWO NUMBERS



/////////////////////////////////////////////

// Write a function that takes an array of characters and reverses the letters in place

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


function reverseWords(message) {

    // Decode the message by reversing the words
    
    reverseCharacters(message, 0, messsage.length-1);
    
    let currentWordStartIndex = 0;
    for (let i = 0; i<=message.length; i++){
      if (i === message.length || message[i] === ' '){
        reverseCharacters(message, currentWordStartIndex, i-1);
        currentWordStartIndex = i-1;
      }
    };
    
    function reverseCharacters(message, leftIndex, rightIndex) {
      while (leftIndex < rightIndex){
        const temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
      }
    };
    
    
  
  }
  console.log(reverseWords("katie is cool"));
  
  