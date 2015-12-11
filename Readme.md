# pretty-positive

Synchronous pretty yes/no question prompt inquirer style

![pretty-positive](./demo.gif)

Utilizes [`syncoprompt`][] (via [`positive`][]) to provide 
cross platform synchronous prompt without native bindings.

## API

```
require('pretty-positive') => (question = '', defaultAnswer = true) => Boolean
```

## Usage

```js
var confirm = require('positive')

var sure = confirm('Are you sure?', false)

console.log(sure ? 'excellent.' : 'oh')
```

## About

Wraps relevant Terminal ASCII codes around output from [`positive`][],
after/inspired by the styles used by [`inquirer`][].

## Synchronous by Design

`pretty-positive` is synchronous on purpose - in a CLI like environment there's
little need for a prompt to be asynchronous (unless we wanted to do
something in the background, in which case `pretty-positive` doesn't match your
requirements). 

## Credit

* Sponsored by nearForm

[`positive`]: http://npmjs.com/positive
[`inquirer`]: http://npmjs.com/inquirer
[`syncoprompt`]: http://npmjs.com/syncoprompt
