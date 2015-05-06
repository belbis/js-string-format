# js-string-format
[![Build Status](https://travis-ci.org/belbis/js-string-format.svg?branch=master)](https://travis-ci.org/belbis/js-string-format)
[![Coverage Status](https://coveralls.io/repos/belbis/js-string-format/badge.svg)](https://coveralls.io/r/belbis/js-string-format)


extend String class with python-esque format function

## introduction

This is a small library that extends the String prototype to allow for
python like format. It supports multiple ways for replacement which are described
in the usage section

## install

from git:

```javascript
npm install "git+https://github.com/belbis/js-string-format"
```

node/iojs:
```javascript
npm install js-string-format
```

browser:
```html
<script src="/path/to/dist/stringFormat.min.js"></script>
```

## usage

import (node):
```javascript
require("js-string-format");
```


use:
```javascript

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

run ```javascript
npm test```

## notes

this library does not sanitize the input other than simple type checking
