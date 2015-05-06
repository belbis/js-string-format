# js-string-format

extend String class with python-esque format function

## introduction

This is a small library that extends the String prototype to allow for
python like format. It supports multiple ways for replacement which are described
in the usage section

## install

from git:

```js
npm install "git+https://github.com/belbis/js-string-format"
```

node/iojs:
```js
npm install js-string-format
```

browser:
```html
<script src="/path/to/dist/stringFormat.min.js"></script>
```

## usage

import (node):
```js
require("js-string-formatter");
```


use:
```js

// numerical
var ret = 'The {0} {1} fox jumps over the {2} dog.'.format(
  ['quick', 'brown', 'lazy'])

var ret = 'The {0} {1} fox jumps over the {2} dog.'.format(
    'quick', 
    'brown', 
    'lazy'
)

var ret = 'The {0} {1} fox jumps over the {2} dog.'.format(
  {
    1: 'quick',
    2: 'brown',
    3: 'lazy'
  }
)

// object
var ret = 'The quick brown {i} jumps over the lazy {j}'.format(
    {
      'i': 'fox',
       'j': 'dog'
    }
)
console.log(ret) // The quick brown fox jumps over the lazy dog.
```

## tests

run ```js
npm test```

## notes

this library does not sanitize the input other than simple type checking
