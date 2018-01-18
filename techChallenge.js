// [1,2,2, 0, 3,4,5] [0, 6]
// [1,2,0,3,4] [2, 4]
// [0, 0, ,2,3,4,5] [1, 4]
// [1,2,2,2,3,4,5,0,0,5] [8,9]
// [1,2,2,2,3,4,5] [0,6]
// [2,2,2,3,4,5] [2,5]


//every time we see an elevvation increase we define a possible endIdx
    // startIdx
//hanlde plateus array[i - 1] if same advance startIdx

// when we see a decrease we either have the end of a maxclimb
    // or 


function findMaxclimb(array) {

  if (array.length < 2) {
    throw new Error('bad data')
  }

  let endIdx = null; // last increase
  let startIdx = 0;
  let maxClimb = 0;
  let maxClimbIndices = [];
  let maxClimbObj={};

  for (var i = 1; i < array.length; i++) {

    if (endIdx) {
      if (array[i - 1] > array[i]) { // decline
        startIdx = i;
      }

    }
    if (array[i] > array[i - 1]) { // handle increase
      endIdx = i;
      // maxClimb =
      //outputobj
      maxClimbIndices = [startIdx, endIdx];
      endIdx = null
    }

    if (array[i - 1] === array[i]) { // handle plateus
      startIdx = i;
    }
//     arrray of keys
//     sort for the highest first and
// return object key and highest


  }

  return maxClimbIndices
}
