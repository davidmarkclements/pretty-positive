var positive = require('positive')

module.exports = function (question, defaultAnswer) { 
  var y = typeof defaultAnswer === 'boolean' ? defaultAnswer : true

  return positive(
    '\u001b[32m?\u001b[39m \u001b[1m' + 
    question + '\u001b[22m \u001b[2m' + 
    (y ? '(\u001b[4my\u001b[24m, n)' : '(y, \u001b[4mn\u001b[24m)') + 
    '\u001b[22m: ',
    defaultAnswer
  )
}