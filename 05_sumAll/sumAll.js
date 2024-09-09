const sumAll = function(first_number,second_number) {
    if(!Number.isInteger(first_number) || !Number.isInteger(second_number)) return "ERROR";
    if(first_number > second_number){
        let temp = first_number;
        first_number = second_number;
        second_number = temp;
    }
    if(first_number < 0 || second_number < 0)return "ERROR";

    return (second_number*(second_number+1))/2 - (first_number*(first_number-1))/2;

};

// Do not edit below this line
module.exports = sumAll;
