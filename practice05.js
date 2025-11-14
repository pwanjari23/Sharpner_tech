let n = 5
for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row += "*"
    }
    for (let k = 1; k <= n - i; k++) {
        row += " "
    }
    for (let l = 1; l <= i; l++) {
        row += "*"
    }
    console.log(row)
}

// output

// *    *
// **   **
// ***  ***
// **** ****
// **********