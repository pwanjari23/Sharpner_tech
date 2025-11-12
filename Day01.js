// VARIABLES

var a = 5;
var y = 10;
a = a / y;
console.log(a);

console.log("loop")
let num = 1;
while(num<=100){
    console.log("loop", num)
    num+=1
}
console.log("end")



01. What is the purpose of a function's input parameters?
ans: To provide valur for the funtion to work with

02. What is the purpose of a return statement in a function?
ans : returnsthe value to the CSSFontPaletteValuesRule

03. Which of the following is incorrect about programming languages?
ans: executing the machine code 

04. CONSOLE.LOG("how are you doing");
ans : how are you doing

05. CONSOLE.LOG("hello sharpnerians");
ans : hello sharpnerians

06. Write a program to Add two Variables a and b (a and b is being provided by the user your task is to display the sum)
Example:-
Input
a=3 , b=4
Output
7

07. Write a program to perform the following operation
a+b-c
Note (a, b and c is being provided by the user. Your task is to display a+b-c)
Example:-
Input
a=3 , b=4, c=9
Output
-2
Input
a=10, b=6, c=4
Output:-
12

08. Write a program to Swap two Variables a and b (Swapping basically means interchanging)
Example:-
Input
a=3 , b=4
Output
a=4, b=3

ans : function swap(a, b){
    //write the code to swap two numbers inside this block
    var temp = a;
    var a = b;
    var b = temp;
    
    
    //dont change below code
    console.log('a value is =', a);
    console.log('b value is =', b)
}

09. The number is said to be magical if it is greater than 10.
If n is greater than 10 print "magical"
Input:-
n=15
Output:-
magical

10. The number is said to be magical if it is greater than 10.
If n is greater than 10 print "magical" else print "not magical"
Input:-
n=15
Output:-
magical

11. Write a program to print the largest number of the two numbers given.
Input:-
a=3, b=4
Output:
4

12. If Salary is given please help people compute their Taxes by writing a code.
If Salary >=15 , Tax=30
If Salary > =10 and Less than 15 , Tax =20
If Salary is >=5 and less than 10 , tax =10
Otherwise the tax will be 0.
Example:-
Input:-
s = 20
Output
30
ans : function compute_taxes(s) {
        var tax;
        if (s >= 15) {
            tax = 30;
        } else if (s >= 10 && s < 15) {
            tax=20
        } else if (s >= 5 && s < 10) {
            tax=10
        } else {
            tax=0
        }

        console.log(tax);
13. Question 1 :-

if(number >=10 && number % 2 == 0)
Note the numbers are given in this option (Separated by a space). Choose the correct options when the conditions will be true.
A) 11 12 14 15 13 9
B) 12 14 16 18 20 100
C) 2 12 14 16 18 20   ANSWER : option b

Question 2:-

if it is sunny or raining the person will need an umbrella and cannot go out. choose the options in which he can go out
A) isSunny=true, isRaining=true
B) isSunny=true, isRaining=false
C) isSunny=false, isRaining=true
D) isSunny=false, isRaining=false  ANSWER : option D


14. Write a program to print the largest of the three numbers.
Input:
a=3, b=5, c=1
Output:-
5

ans : function max(a, b, c){
    /*write the code to find the maximum between the three numbers below 
     only print the maximum number  */
    if (a >= b && a >= c) {
        console.log(a)
    } else if (b >= a && b >= c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

15. Given a variable D (distance) write a program to print the cost associated with it as shown in the image:-Input 1:-
D = 700
Output:-
10
Input 2:-
D=500
Output :-
8

function print_cost(distance){
    /*write the code below to print the cost
     if the distance is given   */
    var cost;
    if (distance <= 100) {
        cost = 5;
    } else if (distance >100 && distance <= 500) {
        cost = 8;
    } else if (distance > 500 && distance <= 700) {
        cost = 10;
    } else {
        cost = 12;
    }
    console.log(cost);  
}

16. Question 1:-
What is the result of the expression a > 0 || b > 0 && a + b == 10 (given a = 5 and b = 5)?
A) true


Question 2:-
What is the result of the expression a > 0 || b < 0 && a + b < 0 (given a = -3 and b = 2)?
B) false

Question 3:-
What is the result of the expression a > 0 && b > 0 || a - b == 0 (given a = 7 and b = 3)?
A) true


Question 4:-
What is the result of the expression a >= 0 || b >= 0 && a - b == 0 (given a = -2 and b = -4)
B) false

Question 5:-
What is the result of the expression a >= 0 || b >= 0 && a * b < 20 (given a = 4 and b = 6)
A) true

Question 6:-
What is the result of the expression a == 0 && b == 0 || a * b > 0 (given a = 0 and b = -2)?
B) false

17. Write a program to print the largest number of the two numbers given.
Example Input 1 
a=3, b=4
Output:
4

ans : console.log(a > b ? a : b);

18. Write a program to assume a value of marks and print whether a person has failed or passed using ternary Operator.
If Marks> =40 --> pass
ELSE ---> fail
Input:-
Marks =52
Ouput:-
pass

ans : console.log(marks >= 40 ? "pass" : "fail");

19. Given the Day number, print the Day name in lower case corresponding to it by using the help of switch statement.
Note: Day 1 - is monday.
If the day is not valid example 1> day >7 then print invalid
Input :-
Day - 3
Output :-
wednesday

function weekday_name(n){
    /*write the code to print the weekday name in lower case when
     the weekday number is given using switch statements*/
    switch (n) {
        case 1:
            console.log("monday");
            break;
        case 2:
            console.log("tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("thursday");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
            console.log("saturday");
            break;
        case 7:
            console.log("sunday");
            break;
        default:
            console.log("invalid")
            
    }
 20. What will be the output of the following algorithm .
switch (x)
{
case 1:
print( "Choice is 1");
break;
case 2:
print( "Choice is 2");
case 3:
print("Choice is 3");
case 4:
print("Choice is 4");
break;
default:
print("Choice other than 1, 2, 3 and 4")
break; 
ANSWER
C) Choice is 2
Choice is 3
Choice is 4














