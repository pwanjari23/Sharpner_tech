
function print_pattern(){
     /* Function to print the pattern */
    let totalRows = 5;
    for (let i = 1; i <= totalRows; i++){
        let row = "";
        let stars = 6 - i;
        let spaces = 2 * (i - 1);

        for (let j = 0; j < stars; j++){
            row += "*";
        }

        for (let k = 0; k < spaces; k++){
            row += " ";
        }

        for (let l = 0; l < stars; l++){
            row += "*";
        }
        console.log(row);
    }
}
print_pattern();
