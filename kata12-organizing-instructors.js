// In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

// Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:
// {
//   CourseName: [instructors]
// }

const organizeInstructors = function (instructors) {
  // Put your solution here
  let obj = new Object();
  for (const inst of instructors) {
    const key = inst.course;
    const value = inst.name;
    // Creates a new Array for the key, if no array is there

    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(value);
  }
  return obj;
};

console.log(
  organizeInstructors([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Victoria', course: 'Web' },
    { name: 'Karim', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  organizeInstructors([
    { name: 'Brendan', course: 'Blockchain' },
    { name: 'David', course: 'Web' },
    { name: 'Martha', course: 'iOS' },
    { name: 'Carlos', course: 'Web' },
  ])
);
// Expected Output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }
