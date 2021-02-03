const path = require('path')
const withSass = require('@zeit/next-sass')  // Add this declaration

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/styles')],
  },
}