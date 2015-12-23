

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
