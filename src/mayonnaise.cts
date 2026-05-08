/*!
 * mayonnaise.js <https://github.com/nathanchapman/mayonnaise.js>
 *
 * Copyright (c) 2022 Nathan Chapman.
 * Licensed under the MIT license.
 */

interface Mayonnaise {
  catch_phrase: string;
  define(name: string, generator: (...args: any[]) => unknown): void;
  first_name: string;
  full_name: string;
  last_name: string;
  location: string;
  name: string;
  place: string;
  sentence: string;
  sentences: (number?: number) => string;
  short_description: string;
  string: string;
  timecard: string;
  username: string;
  word: string;
  [generator: string]: any;
}

const casual = require('casual') as Mayonnaise;
const {
  firstName,
  lastName,
  name,
  place,
  quote,
  quotes,
  timecard,
  username,
  word,
} = require('./functions') as {
  firstName: () => string;
  lastName: () => string;
  name: () => string;
  place: () => string;
  quote: () => string;
  quotes: (number?: number) => string;
  timecard: () => string;
  username: () => string;
  word: () => string;
};

casual.define('catch_phrase', quote);
casual.define('first_name', firstName);
casual.define('full_name', name);
casual.define('last_name', lastName);
casual.define('location', place);
casual.define('name', name);
casual.define('place', place);
casual.define('sentence', quote);
casual.define('sentences', quotes);
casual.define('timecard', timecard);
casual.define('short_description', quote);
casual.define('string', quote);
casual.define('username', username);
casual.define('word', word);

export = casual;
