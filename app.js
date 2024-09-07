const numbers = [1, 2, 3, 5];
///5-deb boyuk ededleri tap
/*
/////////////////////////////
let newNumbers5 = [];
numbers.map(item => {
    if (item > 5) {
        newNumbers5.push(item)
        
    }
})*/
////////2ci asan yol
/*
let newNumbers7 = numbers.filter(item => item > 5)
console.log(newNumbers7);

//5-den boyuk ededi tap
let newNumber
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        newNumber = numbers[i]
        break
    }
}
*/
let newNumber9 = []
for (let i = numbers.length - 1; i >= 0; i--) {
    newNumber9.push(numbers[i]);
}
console.log(newNumber9);

let isBigger = numbers.every(item => item >0)
    console.log(isBigger);

/*
let sum2 = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum2);
/*
/////////////////
let num = numbers.find(item => item > 5)
console.log(num);*/
/*
//ededlerin hamsın-2ye vur
let newNumbers = [];
for (let i = 0; i < numbers.length - 1; i++) {
    newNumbers.push(numbers[i] * 2);
}
console.log(newNumbers);
//////
let newNumbers2 = numbers.map((item) => item * 2);
console.log(newNumbers2)
//////
let newNumbers3 = numbers.map((item) => {
    return item * 2
}
);
console.log(newNumbers3)
*/
/*
let newList = []
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > 5) {
        newList.push(numbers[j])

    }
}

console.log(newList);
*/
//ededlerin sırasın tersine cevir
//ededlerin hamsını topla

//ededlerin hamsını 5-den böyükdürmü