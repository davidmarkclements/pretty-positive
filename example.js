var confirm = require('./')

var sure = confirm('Are you sure?', false)

console.log(sure ? 'excellent.' : 'oh')
