
// 1-usando funcoes nativas do JS

function isValidDate(dateString){
    const date = new Date(dateString);
    // console.log(date);
    return !isNaN(date.getTime())
}
    
console.log(isValidDate("2020-01-02"));
console.log(isValidDate("29328238"));
