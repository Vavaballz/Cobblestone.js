const Packet = require('../Packet')

/**
 * Handshake Packet handler
 */
class Response extends Packet {
  constructor(serverPing) {
    super();
    this.serverPing = serverPing
  }
  
  /**
   * Function called when encoding the Handshake
   * @param {CustomBuffer} data 
   */
  encode(data) {
    data.writeString(JSON.stringify(this.serverPing))
  }

  /**
   * Function called when decoding the Handshake
   * @param {CustomBuffer} data 
   */
  decode(data) {
    this.serverPing = JSON.parse(data.readString())
  }
}

module.exports = Response