const { v4: uuidv4 } = require('uuid');

function generateCode() {
  return uuidv4();
}

module.exports = { generateCode };
