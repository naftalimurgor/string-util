// A dummy function to convert string to uppercase.
function toUpperCase(str) {
  if (typeof str !== 'string') throw new Error('Argumnet supplied must be of typeof string')
  else return str.toUpperCase()
}

function toLowerCase(str) {
  if (typeof str !== 'string') throw new Error('Argumnet supplied must be of typeof string')
  else return str.toUpperCase()
}

// Expose function to be used as a module.
// module.exports: 
// Read more: https://nodejs.org/api/modules.html
// For ES6 Modules, AMD Modules, Commonjs: https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b
module.exports = { toUpperCase, toLowerCase }
