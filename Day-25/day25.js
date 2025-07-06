// DAY25 Join Two Arrays by ID

// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.

// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

const join = function (arr1, arr2) {
  // Create a map to hold the merged objects by id
  const map = new Map();

  // Process the first array
  for (const obj of arr1) {
    map.set(obj.id, { ...obj });
  }
  // Process the second array
  for (const obj of arr2) {
    if (map.has(obj.id)) {
      // If the id exists, merge the objects
      Object.assign(map.get(obj.id), obj);
    } else {
      // If the id does not exist, add the object
      map.set(obj.id, { ...obj });
    }
  }
  // Convert the map values to an array and sort by id
  return [...map.values()].sort((a, b) => a.id - b.id);
};

// Alternative implementation using an object to merge arrays
// const join = function(arr1, arr2) {
//   const mergedObj = {};

//   for (const el of arr1) {
//     mergedObj[el.id] = { ...el };
//   }

//   for (const el of arr2) {
//     mergedObj[el.id] = { ...mergedObj[el.id], ...el };
//   }

//   // Convert the merged object values to an array and sort by id
//   return Object.values(mergedObj).sort((a, b) => a.id - b.id);
// };

module.exports = {
  join,
};
