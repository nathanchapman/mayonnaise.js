# mayonnaise.js [![version](https://img.shields.io/npm/v/mayonnaise.js.svg)](https://www.npmjs.com/package/mayonnaise.js) [![downloads](https://img.shields.io/npm/dt/mayonnaise.js.svg)](https://www.npmjs.com/package/mayonnaise.js)

JavaScript fake data generator, courtesy of Patrick Star.

<img width="368" src="https://i.ytimg.com/vi/d1JA-nh0IfI/hqdefault.jpg">

> Is mayonnaise an instrument?

## Installation

```sh
$ npm install mayonnaise.js
```

## Usage

```javascript
const mayonnaise = require('mayonnaise.js');

// Text is generated from Patrick's wonderful quotations.
let sentence = mayonnaise.sentence;
let sentences = mayonnaise.sentences(3);
let title = mayonnaise.title;
let text = mayonnaise.text;
let description = mayonnaise.description;
let short_description = mayonnaise.short_description;
let string = mayonnaise.string;
let word = mayonnaise.word;
let words = mayonnaise.words(7);
let array_of_words = mayonnaise.array_of_words(7);
let letter = mayonnaise.letter;

// User data is generated from SpongeBob characters.
let name = mayonnaise.name;
let username = mayonnaise.username;
let first_name = mayonnaise.first_name;
let last_name = mayonnaise.last_name;
let full_name = mayonnaise.full_name;
let catch_phrase = mayonnaise.catch_phrase;

// Place and location return different locations from the SpongeBob universe.
let place = mayonnaise.place;
let location = mayonnaise.location;

...
```

## API

`mayonnaise.js` uses [casual](https://github.com/boo1ean/casual) under the hood, so you can use all of the generators specified in their [documentation](https://github.com/boo1ean/casual#embedded-generators) as well as various locales.
