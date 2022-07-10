// Note: when we name our top level export index.js, 
// we do not have to do `sometpath/index.j`
const { toUpperCase, toLowerCase } = require('../src')
describe('string-util tests', () => {
  test('should convert string to UPPERCASE', () => {
    expect(toUpperCase('Hello World')).to.equal('HELLO WORLD')
  })

  test('should convert string to UPPERCASE', () => {
    expect(toUpperCase('Hello World')).to.equal('HELLO WORLD')
  })
  
})