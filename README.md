# get-bind

get bind address. The friend of [get-port](https://github.com/sindresorhus/get-port) to get a bind address, not only a port number.

## Install

    npm i @maboiteaspam/get-bind --save-dev

## Usage

```js
require('@maboiteaspam/get-bind')(8888, 'localhost')
  .then(console.log)
  .catch(console.error) // print localhost:8888

require('@maboiteaspam/get-bind')(false, 'localhost')
  .then(console.log)
  .catch(console.error) // print localhost:[random]

require('@maboiteaspam/get-bind')(false)
  .then(console.log)
  .catch(console.error) // print 0.0.0.0:[random]

require('@maboiteaspam/get-bind')()
  .then(console.log)
  .catch(console.error) // print 0.0.0.0:[random]
```

## Read More

- https://github.com/sindresorhus/get-port
- https://github.com/MaxMotovilov/node-promise
