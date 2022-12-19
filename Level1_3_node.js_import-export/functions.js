export const calc = (numberOne, numberTwo, operator) => {
    if (operator === "+") {
        return numberOne + numberTwo;
    } else if (operator === "-") {
        return numberOne - numberTwo;
    } else if (operator === "*") {
        return numberOne * numberTwo;
    } else if (operator === "/") {
        return numberOne / numberTwo;
    } else {
        return "not a correct entry"
    };
};