/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below*/
let scoreDolphins1= 100;
let scoreDolphins2= 100;
let scoreDolphins3= 100;
let averageScoreDolphins= (scoreDolphins1 + scoreDolphins2 + scoreDolphins3)/3;
console.log(averageScoreDolphins);

let scoreKoalas1= 99;
let scoreKoalas2= 100;
let scoreKoalas3= 100;
let averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3)/3;
console.log(averageScoreKoalas);
/*2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)*/
/*
if(averageScoreDolphins>averageScoreKoalas){
    console.log(`The winner is Dolphins team`);
} else if (averageScoreKoalas>averageScoreDolphins) {
    console.log(`The winner is Koalas team`);
} else if (averageScoreDolphins===averageScoreKoalas) {
    console.log(`Its a draw`);
}*/
/*3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �*/
/*if(averageScoreDolphins>averageScoreKoalas && (scoreDolphins1>100 || scoreDolphins2>100 || scoreDolphins3>100)){
    console.log(`The winner is Dolphins team`);
} else if (averageScoreKoalas>averageScoreDolphins && (scoreKoalas1>100 || scoreKoalas2>100 || scoreKoalas3>100)) {
    console.log(`The winner is Koalas team`);
} else if (averageScoreDolphins===averageScoreKoalas && (scoreDolphins1>100 || scoreDolphins2>100 || scoreDolphins3>100 || scoreKoalas1>100 || scoreKoalas2>100 || scoreKoalas3>100 )){
    console.log(`Its a draw`);
} else {
    console.log(`there is no winner`);
}*/
/*4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/
if(averageScoreDolphins>averageScoreKoalas && (scoreDolphins1>100 || scoreDolphins2>100 || scoreDolphins3>100)){
    console.log(`The winner is Dolphins team`);
} else if (averageScoreKoalas>averageScoreDolphins && (scoreKoalas1>100 || scoreKoalas2>100 || scoreKoalas3>100)) {
    console.log(`The winner is Koalas team`);
} else if (averageScoreDolphins===averageScoreKoalas && (scoreDolphins1>=100 || scoreDolphins2>=100 || scoreDolphins3>=100 || scoreKoalas1>=100 || scoreKoalas2>=100 || scoreKoalas3>=100 )){
    console.log(`Its a draw`);
} else {
    console.log(`there is no winner`);
}




