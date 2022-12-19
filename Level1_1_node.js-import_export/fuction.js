export const sortAlph = (array) => {
    return array.sort()
};

export const sortNum = (array) => {
    return array.sort(function (a, b) { return a - b })
}