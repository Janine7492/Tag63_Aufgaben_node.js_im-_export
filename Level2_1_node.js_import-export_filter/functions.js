export const bigCities = (array) => {
    const newArray = [];
    array.forEach(element => {
        if (element.population > 100000) {
            newArray.push(element);
        }
    });
    return newArray;
}

export const smallCities = (array) => {
    const newArray = [];
    array.forEach(element => {
        if (element.population < 100000) {
            newArray.push(element);
        }
    });
    return newArray;
}