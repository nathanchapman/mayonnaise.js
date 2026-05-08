const { characters, patrick, places, timecards } = require('./data') as {
  characters: string[];
  patrick: string[];
  places: string[];
  timecards: string[];
};

const random = <T>(arr: readonly T[]): T =>
  arr[Math.floor(Math.random() * arr.length)] as T;

const name = (): string => random(characters);
const place = (): string => random(places);
const quote = (): string => random(patrick);

const quotes = (number?: number): string => {
  let string = quote();
  for (let i = 1; i < (number ?? 1); i += 1) {
    string = `${string} ${quote()}`;
  }
  return string;
};

const firstName = (): string => name().split(' ')[0] as string;

const lastName = (): string => {
  const names = name().split(' ');
  return names[names.length - 1] as string;
};

const username = (): string => {
  const seed = random([name(), place()]);
  const adjective = random(['sucks', 'rocks', 'is cool']);
  const delimiter = random(['-', '_', '.']);
  const user = `${seed} ${adjective}`;
  return user.replace('.', '').replace(/ /g, delimiter);
};

const timecard = (): string => random(timecards);

const word = (): string => {
  const words = quote().match(/\b(\w+)'?(\w+)?\b/g) ?? [''];
  return random(words);
};

module.exports = {
  firstName,
  lastName,
  name,
  place,
  quote,
  quotes,
  timecard,
  username,
  word,
};
