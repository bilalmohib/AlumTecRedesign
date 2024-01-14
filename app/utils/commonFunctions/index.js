const convertToSlug = (input) => {
    return input.toLowerCase().replace(/\s+/g, '-');
};

console.log(convertToSlug('This is another blog'));