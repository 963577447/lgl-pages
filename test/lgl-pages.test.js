const test = require('ava')
const lglPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => lglPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(lglPages('w'), 'w@zce.me')
  t.is(lglPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
