const wordSearch = (letters, word) => { 
    // if letters is empty array
    if (letters.length === 0) {
        return false;
    }
    // for horizontal words
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        // console.log(horizontalJoin);
        // console.log(l);
        // console.log(l.includes(word));
        if (l.includes(word)) {
            return true;
        }
    }
    // for horizontal words backwards
    let newArray = [];
    for (const l of letters) {
        newArray.push(l.reverse());
    }
    const backwardJoin = newArray.map(ls => ls.join(''));
    for (l of backwardJoin) {
        // console.log(horizontalJoin);
        // console.log(l);
        // console.log(l.includes(word));
        if (l.includes(word)) {
            return true;
        }
    }
    // for vertical words
    const verticalJoin = transpose(letters)
    const newList = verticalJoin.map(ls => ls.join(''))
    // console.log(newList);
    for (l of newList) {
        // console.log(l);
        // console.log(l.includes(word));
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

// tried diagonal
// let diagArray = [];
// for (let i = 0; i < letters[0].length; i++){
//     diagArray.push([]);
// }
// for (let i = 0; i < letters.length; i++) {
//     for (let j = 0; j < letters[i].length; j++) {
//         diagArray[j].push(letters[i][j]);
//     }   
// }
// console.log(diagArray);
// //console.log(newArray);

const transpose = function(matrix) {
    let result = [];
    // create the empty result array first based on how many elements in the first row
    for (let i = 0; i < matrix[0].length; i++){
      result.push([]);
    }
      // pushes the correct element in the array
      for (let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        // console.log(matrix[j][i]);
        result[j].push(matrix[i][j]);
      }
    }
    return result;
 };

module.exports = wordSearch