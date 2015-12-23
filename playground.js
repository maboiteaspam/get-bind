

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

