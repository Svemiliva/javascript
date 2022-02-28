/*Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall*/

let marksWeight = 78;
let johnsWeight =92;
let marksHeight = 1.69;
let johnsHeight = 1.95;

let marksBmi = marksWeight / marksHeight**2;
let johnsBmi = johnsWeight / johnsHeight**2;
console.log(marksBmi);
console.log(johnsBmi);
console.log(marksBmi > johnsBmi);

let marksWeight1 = 95;
let johnsWeight1 =85;
let marksHeight1 = 1.88;
let johnsHeight1 = 1.76;

let marksBmi1 = marksWeight1 / marksHeight1**2;
let johnsBmi1 = johnsWeight / johnsHeight1**2;
console.log(marksBmi1);
console.log(johnsBmi1);
console.log(marksBmi1 > johnsBmi1);




