const expect= require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
  it ('Si la palabra inicia con Z, se le añade "pe" al final', function(){
    const translation = platzom("zorro")
    expect(translation).to.equal("zorrope")
  })
})
