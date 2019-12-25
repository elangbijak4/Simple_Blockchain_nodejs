hashok= require('./sha256.min.js');
function calculateHash(block) {
  return hashok.sha256(block.index + block.previousHash + 
         block.timestamp + block.data + 
         block.nonce);
}
exports.calculateHash = calculateHash;