01. function print_series(n){
    /* Print the following series 
       1 2 3 4 5 to n. Note print all the numbers in a seperate line*/
    for (let i = 1; i <= n; i++){
        console.log(i)
    } 
}
console.log(print_series(5))    

02. function print_series(n) {
    /* Print the following series 
       1 2 3 4 5 to n. Note print all the numbers in a seperate line*/
    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

03. function print_even(n){
    /*write the code to Print all even numbers from 1 to n*/
    let i = 1 
    while (i <= n) {
        if (i % 2 === 0) {
        console.log(i)
        }
        i++;
   }  
}

04. function print_series(n){
    /* Print the following series 
       1 4 9 16 25 36 to n. Note print all the numbers in a seperate line*/
    let i = 1 
    while (i * i <= n) {
        console.log(i * i)
        i++;
    } 
}

05. function print_output(n){
    /*Print all numbers from 1 to n except the ones divisible by 5
    use the help of continue statement to leverage this */
    let i = 1 
    while (i <= n) {
        if (i % 5 === 0) {
            i++;
            continue;
        }
            console.log(i)
        i++;
    } 
}

06. function print_digits(n){
    /*Function to print the digits of the number n 
        Note Print all the digits in a new line*/
    while (n >0 ) {
        let i = n % 10;
        console.log(i)
        n=Math.floor(n/10)
}  
}

07. 
function check_armstrong(n){
     /*Function to check whether a number is an armstrong number or not
        Print true if yes else false */
        let originsl = n;
        let digits = n.toString().length
        let sum = 0
        while (n > 0) {
                let digit = n % 10;
                sum = sum + Math.pow(digit, digits);
                n = Math.floor(n / 10)     
        }
        if (sum === originsl) {
                console.log(true);
        } else {
                console.log(false);
        }
}

08. function reverse(n){
    let reversed = 0;
    while (n > 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }
    return reversed; // return instead of print
}

09. function print_series(n){
    /* Print all odd numbers from 1 to n (including)
            . Note print all the numbers in a seperate line*/
    for (let i = 1; i <= n; i++){
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

10. function print_series(n){
     /* Print the following series 
            1 8 27 64 125 to n (including) . Note print all the numbers in a seperate line*/
            let i =1
    for (i = 1; i**3 <= n; i++){
       console.log(i**3)
    }
}

11. function print_output(n){
    /*Print all even numbers from 1 to n except the ones divisible by 4
    use the help of continue statement to leverage this */
    for (let i = 1; i <= n; i++){
        if (i % 2 !== 0) {
            continue;
        }
        if (i % 4 === 0) {
            continue;
        }
        console.log(i)
    }
}

12. function print_pattern(){
     /* Function to print the pattern */
    for (let i = 5; i >= 1; i--){
        let pattern = ""
        for (let j = 1; j <= i; j++){
            pattern += "*"
        }
        console.log(pattern)
    }   
}

13.
function print_pattern(){
     /* Function to print the pattern */
    let i = 5;
    while (i >= 1) {
        let j = 1;
        let string = "";
        while (j <= i) {
             string += "*"
            j++
        }
        console.log(string)
       i--
    }

     i = 1;
    while (i <= 5) {
        let j = 1;
        let string = ""
        while (j <= i) {
            string += "*"
            j++
        }
        console.log(string)
        i++
    }
      
    
    
}

14. function print_pattern(){
     /* Function to print the pattern */
    for (let i = 0; i < 5; i++){
        let str = ""
        for (let j = 0; j <= i; j++){
            str+="*"
        }
        let space = ""
        for (let j = 0; j < 5 - i - 1; j++){
            space+=" "
        }
        console.log(str+space+str)
        
    }
}


15. function hollowSquareStarPattern(n) {
    for (let i = 1; i <= n; i++){
        let row = "";
        for (let j = 1; j <= n; j++){
            if (i === 1 || i === n || j === 1 || j === n) {
                row+="*"
            } else {
                row+=" "
            }
        }
        console.log(row)
    }
}
*****
*   *
*   *
*   *
*****