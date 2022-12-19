export const firstFunc = (array) => {
    return array[0]
};

export const secondFunc = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i])
    }
    return newArray;
};

export const thirdFunc = (array) => {
    return array[(array.length) - 1];
};

export const fourthFunc = (array) => {
    const newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray;
};

export const fifthFunc = (array, word) => {
    return array.filter(v => v !== word)

};

export const sixthFunc = (array) => {
    const newArray = [];
    array.forEach((item) => {
        if (newArray.indexOf(item) < 0) {
            newArray.push(item);
        };
    });
    return newArray;
};

export const seventhFunc = (array) => {

    let sum = 0;

    array.forEach((item) => {
        sum = sum + item
    });

    return sum;

};

export const randomFunc = (min, max) => {
    return Math.random() * (max - min) + min
}

export const firstLetterUp = (text) => {
    let firstLetter = text.slice(0, 1).toUpperCase();

    let rest = text.slice(1);

    return (firstLetter + rest);
}

export const allTextUp = (text) => {
    return text.toUpperCase();
};

export const lastLetter = (text, p) => {
    if (text[(text.length) - 1] == p) {
        return true;
    }
    else {
        return false;
    }
};

