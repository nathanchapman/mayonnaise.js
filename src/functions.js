const characters = require('./data/characters');
const patrick = require('./data/quotes');
const places = require('./data/places');

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const name = () => random(characters);
const place = () => random(places);
const quote = () => random(patrick);

const quotes = (number) => {
    let string = quote();
    for (let i = 1; i < number; i += 1) {
        string = `${string} ${quote()}`;
    }
    return string;
};

const firstName = () => name().split(' ')[0];

const lastName = () => {
    const names = name().split(' ');
    return names[names.length - 1];
};

const username = () => {
    const seed = random([name(), place()]);
    const adjective = random(['sucks', 'rocks', 'is cool']);
    const delimiter = random(['-', '_', '.']);
    const user = `${seed} ${adjective}`;
    return user
        .replace('.', '')
        .replace(/ /g, delimiter);
};

const word = () => random(quote().match(/\b(\w+)'?(\w+)?\b/g));

module.exports = {
    firstName,
    lastName,
    name,
    place,
    quote,
    quotes,
    username,
    word,
};
