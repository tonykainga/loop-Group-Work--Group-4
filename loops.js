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