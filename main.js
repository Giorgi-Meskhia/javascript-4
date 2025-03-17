const replaceText = (str, valueToReplace, valueToReplaceWith) => {
    let words = str.split(valueToReplace);
    return words.join(valueToReplaceWith);
};


console.log(replaceText("Hello everyone, world!", "world", "I'am giorgi"));

const capitalizeWords = (sentence) => {
    return sentence
        .split(" ")
        .map(word => word.toUpperCase())
        .join(" ");
};


console.log(capitalizeWords("I'am 16 and studying javascript"));


const sortUsersByAge = (users) => {
    return users.sort((a, b) => a.age - b.age);
};


const users = [
    { name: "Lasha", age: 30 },
    { name: "Saba", age: 20 },
    { name: "Nino", age: 25 }
];

console.log(sortUsersByAge(users));


