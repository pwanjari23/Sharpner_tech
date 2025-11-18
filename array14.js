// TRANSPOSE 
const transposeMatrix = (rows, cols, matrix) => {
    // Create new matrix with size cols x rows
    let result = Array.from({ length: cols }, () => Array(rows).fill(0));

    // Transpose logic
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
};
