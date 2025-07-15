const crypto = require('crypto');
const key = Buffer.from(process.env.SECRET_KEY);
const iv = Buffer.alloc(16, 0); // fixed IV for simplicity

function encrypt(text) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let enc = cipher.update(text, 'utf8', 'hex');
  enc += cipher.final('hex');
  return enc;
}

module.exports = { encrypt };
