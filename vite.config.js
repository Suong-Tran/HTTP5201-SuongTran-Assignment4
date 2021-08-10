// Add this file to the root of your project
// vite.config.js
const { resolve } = require('path')

// Just make sure you reference your html files correctly
// if your page is called `q_a.html` or whatever, just changes
// the reference here
module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qa: resolve(__dirname, 'QA/qa.html'),
        security: resolve(__dirname, 'Security/security.html'),
        bad: resolve(__dirname, 'Bad-example/bad-example.html')
      }
    }
  }
}