
// 1-usando funcoes nativas do JS

function isValidDate(dateString){
    const date = new Date(dateString);
    // console.log(date);
    return !isNaN(date.getTime())
}
    
console.log(isValidDate("2020-01-02"));
console.log(isValidDate("29328238"));



// 2-usando regex

function isValidDateRegex(dateString){
    const pattern = /^\d{2}\/\d{2}\/\d{4}$/;
    return pattern.test(dateString);
}
console.log(isValidDateRegex("2020-01-02"));
console.log(isValidDateRegex("29328238"));
console.log(isValidDateRegex("28/03/2023"));

