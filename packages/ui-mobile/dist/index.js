
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ui-mobile.cjs.production.min.js')
} else {
  module.exports = require('./ui-mobile.cjs.development.js')
}
