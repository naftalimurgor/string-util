// Note: when we name our top level export index.js, 
// we do not have to do `sometpath/index.j`
const toUpperCase = require('../src')
describe('string-util tests', () => {
  test('should convert string to UPPERCASE', () => {
    expect(toUpperCase('Hello World')).to.equal('HELLO WORLD')
  })
})