# get-bind

get bind address. The friend of [get-port](https://github.com/sindresorhus/get-port) to get a bind address, not only a port number.

## Install

    npm i @maboiteaspam/get-bind --save-dev

## Usage

```js
require('./index')(8888, 'localhost')
  .then(console.log)
  .catch(console.error) // print localhost:8888

require('./index')(false, 'localhost')
  .then(console.log)
  .catch(console.error) // print localhost:[random]

require('./index')(false)
  .then(console.log)
  .catch(console.error) // print 0.0.0.0:[random]

require('./index')()
  .then(console.log)
  .catch(console.error) // print 0.0.0.0:[random]

require('./index')('some.other:6666', 'localhost')
  .then(console.log)
  .catch(console.error) // print some.other:6666

require('./index')('some.other', 'localhost')
  .then(console.log)
  .catch(console.error) // print localhost:some.other // this is buggy, to be improved later

require('./index')(':80', 'localhost')
  .then(console.log)
  .catch(console.error) // print localhost::80 // this is buggy too, to be improved later

```

## Read More

- https://github.com/sindresorhus/get-port
- https://github.com/MaxMotovilov/node-promise
