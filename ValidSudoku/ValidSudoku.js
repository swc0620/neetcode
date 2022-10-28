/**
 * @param {character[][]} board
 * @return {boolean}
 */
 const checkMatrixDuplicate = (arr) => {
    for (let i=0; i<arr.length-1; i++){
        for (let j=i+1; j<arr.length; j++){
            if (Math.ceil(Math.floor(arr[i] / 10)/ 3) !== Math.ceil(Math.floor(arr[j] / 10)/ 3)){
                continue;
            }
            if(Math.ceil((arr[i]%10)/3) === Math.ceil((arr[j]%10)/3)){
                console.log(arr);
                console.log(i, j);
                return false;
            }
        }
    }
    return true;
}
const checkRowDuplicate = (arr) => {
    for (let i=0; i<arr.length-1; i++){
        for (let j=i+1; j<arr.length; j++){
            if (Math.floor(arr[i]/10) === Math.floor(arr[j]/10)){
                return false;
            }
        }
    }
    return true;
}
const checkColumnDuplicate = (arr) => {
    for (let i=0; i<arr.length-1; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i]%10 === arr[j]%10){
                return false;
            }
        }
    }
    return true;
}
const showResult = (arr) => {
    if (!checkMatrixDuplicate(arr)) return false;
    if (!checkRowDuplicate(arr)) return false;
    if (!checkColumnDuplicate(arr)) return false;
    return true;
}
var isValidSudoku = function(board) {
    const obj = {};
    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            if (board[i][j] === ".") continue;
            else if (!obj[board[i][j]]){
                obj[board[i][j]] = [10*(i+1) + j + 1];
            }   else {
                obj[board[i][j]].push(10*(i+1) + j + 1);
            }
        }
    }
    const arrays = Object.values(obj);
    const validateSudoku = () => {
        for ( let i=0; i<arrays.length; i++){
            if (!showResult(arrays[i])){
                return false;
            }
        }    
        return true;
    }
    return validateSudoku();
};

