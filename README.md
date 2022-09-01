# mayonnaise.js [![version](https://img.shields.io/npm/v/mayonnaise.js.svg)](https://www.npmjs.com/package/mayonnaise.js) [![downloads](https://img.shields.io/npm/dt/mayonnaise.js.svg)](https://www.npmjs.com/package/mayonnaise.js)

JavaScript fake data generator, courtesy of Patrick Star.

<img width="368" src="https://i.ytimg.com/vi/d1JA-nh0IfI/hqdefault.jpg">

> Is mayonnaise an instrument?

## Installation

```sh
npm install mayonnaise.js
```

## Usage

```javascript
const mayonnaise = require('mayonnaise.js');

// Text is generated from Patrick's wonderful quotations
const sentence = mayonnaise.sentence;
const paragraph = mayonnaise.sentences(4);
const title = mayonnaise.title;
const text = mayonnaise.text;
const description = mayonnaise.description;
const shortDescription = mayonnaise.short_description;
const string = mayonnaise.string;
const word = mayonnaise.word;
const words = mayonnaise.words(7);
const arrayofWords = mayonnaise.array_of_words(7);
const letter = mayonnaise.letter;

// User data is generated from SpongeBob characters
const name = mayonnaise.name;
const username = mayonnaise.username;
const firstName = mayonnaise.first_name;
const lastName = mayonnaise.last_name;
const fullName = mayonnaise.full_name;
const catchPhrase = mayonnaise.catch_phrase;

// place and location return different locations from the SpongeBob universe
const place = mayonnaise.place;
const location = mayonnaise.location;

// timecards are now available
const timecard = mayonnaise.timecard;

...
```

## API

`mayonnaise.js` uses [casual](https://github.com/boo1ean/casual) under the hood, so you can use all of the generators specified in their [documentation](https://github.com/boo1ean/casual#embedded-generators) as well as various locales.
