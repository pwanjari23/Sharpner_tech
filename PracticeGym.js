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