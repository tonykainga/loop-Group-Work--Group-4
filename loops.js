// Find Duplicates Manually

let numbers =[2,4,7,2,9,4,10,7,7]
let duplicates=[];

for (let i= 0; i< numbers.length; i++) {
    for (let j = i+1; j<numbers.length; j++) {
// check if dupliacates exists
     if (numbers[i] === numbers[j]) {
// ensures its not already in duplicate array
     if(!duplicates.includes(numbers[i])) {
        duplicates.push(numbers[i]);
     }
     }
    }

}
console.log(duplicates);

//  Q2 Highest Scoring Student

let students = [
  { name: "Aline", score: 78 },
  { name: "Brian", score: 91 },
  { name: "Cynthia", score: 85 },
  { name: "David", score: 91 }
];

let topStudent = students[0]; // start with first student

for (let i = 1; i < students.length; i++) {
    if (students[i].score > topStudent.score) {
        topStudent = students[i];
    }
}

console.log(`${topStudent.name} - ${topStudent.score}`);

// Q3 Build a Passed Students Report

let students2 = [
  { name: "Aline", score: 80 },
  { name: "Brian", score: 45 },
  { name: "Cynthia", score: 90 },
  { name: "David", score: 50 },
  { name: "Emma", score: 30 }
];

let passedStudents = [];

 for (let w=0; w<students2.length; w++){
    if(students2[w].score>= 50) {
        passedStudents.push(`${students2[w].name} passed`);
    }
 }

 console.log(passedStudents);
  
//  Q4 Compare Neighboring Values

let numbers2 = [4, 9, 2, 11, 7, 15, 3];

for(let x=1; x< numbers2.length; x++) {
    if(numbers2[x] > numbers2[x-1]) {
        console.log(numbers2[x]);
    }
}

// Q5 Count Word Length Categories




