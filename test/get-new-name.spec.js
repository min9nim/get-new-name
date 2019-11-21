const {expect} = require('chai')
const getNewName = require('../src/index')

describe('getNewName', () => {
  it('should return new name numbered', () => {
    expect(getNewName('abc', ['abc', 'abc(2)', 'ddw'])).to.be.equal('abc(3)')
    expect(getNewName('abc', ['abc(1)', 'abc(2)', 'ddw'])).to.be.equal('abc')
    expect(getNewName('abc', ['abc(1)', 'abc(2)', 'abc'])).to.be.equal('abc(3)')
    expect(getNewName('abc', ['abc', 'abc(2)', 'abc(3)', 'abc(5)'])).to.be.equal('abc(4)')
  })
})
