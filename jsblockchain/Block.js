hitunghash = require('./calculateHash.js');
class Block {
 constructor(index, previousHash, timestamp, data) {
   this.index = index;
   this.previousHash = previousHash;
   this.timestamp = timestamp;
   this.data = data;
   this.nonce = 0;
   this.hash = hitunghash.calculateHash(this); // defined later
 }
}

Block.prototype.mineBlock = function(difficulty) {
    this.nonce = 0;
    var zeros = "0".repeat(difficulty);
   
    while (this.hash.substring(0, difficulty) != zeros) {
      this.nonce++;
      this.hash = hitunghash.calculateHash(this);
    }
   
   }
   exports.Block = Block;