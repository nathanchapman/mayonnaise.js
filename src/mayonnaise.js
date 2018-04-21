/*!
 * mayonnaise.js <https://github.com/nathanchapman/mayonnaise.js>
 *
 * Copyright (c) 2016-2018 Nathan Chapman.
 * Licensed under the MIT license.
 */

const casual = require('casual');
const {
    firstName,
    lastName,
    name,
    place,
    quote,
    quotes,
    username,
    word,
} = require('./functions');

casual.define('catch_phrase', quote);
casual.define('first_name', firstName);
casual.define('full_name', name);
casual.define('last_name', lastName);
casual.define('location', place);
casual.define('name', name);
casual.define('place', place);
casual.define('sentence', quote);
casual.define('sentences', quotes);
casual.define('short_description', quotes);
casual.define('string', quote);
casual.define('username', username);
casual.define('word', word);

module.exports = casual;
