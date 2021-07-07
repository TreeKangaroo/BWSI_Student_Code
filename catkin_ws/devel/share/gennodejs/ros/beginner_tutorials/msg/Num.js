// Auto-generated. Do not edit!

// (in-package beginner_tutorials.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class Num {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.num = null;
      this.Michelle = null;
      this.Wang = null;
      this.age = null;
      this.score = null;
    }
    else {
      if (initObj.hasOwnProperty('num')) {
        this.num = initObj.num
      }
      else {
        this.num = 0;
      }
      if (initObj.hasOwnProperty('Michelle')) {
        this.Michelle = initObj.Michelle
      }
      else {
        this.Michelle = '';
      }
      if (initObj.hasOwnProperty('Wang')) {
        this.Wang = initObj.Wang
      }
      else {
        this.Wang = '';
      }
      if (initObj.hasOwnProperty('age')) {
        this.age = initObj.age
      }
      else {
        this.age = 0;
      }
      if (initObj.hasOwnProperty('score')) {
        this.score = initObj.score
      }
      else {
        this.score = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Num
    // Serialize message field [num]
    bufferOffset = _serializer.int64(obj.num, buffer, bufferOffset);
    // Serialize message field [Michelle]
    bufferOffset = _serializer.string(obj.Michelle, buffer, bufferOffset);
    // Serialize message field [Wang]
    bufferOffset = _serializer.string(obj.Wang, buffer, bufferOffset);
    // Serialize message field [age]
    bufferOffset = _serializer.int8(obj.age, buffer, bufferOffset);
    // Serialize message field [score]
    bufferOffset = _serializer.uint32(obj.score, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Num
    let len;
    let data = new Num(null);
    // Deserialize message field [num]
    data.num = _deserializer.int64(buffer, bufferOffset);
    // Deserialize message field [Michelle]
    data.Michelle = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [Wang]
    data.Wang = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [age]
    data.age = _deserializer.int8(buffer, bufferOffset);
    // Deserialize message field [score]
    data.score = _deserializer.uint32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.Michelle.length;
    length += object.Wang.length;
    return length + 21;
  }

  static datatype() {
    // Returns string type for a message object
    return 'beginner_tutorials/Num';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '45a383feccb5e81e4f1f19f51b552094';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int64 num
    string Michelle
    string Wang
    int8 age
    uint32 score
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new Num(null);
    if (msg.num !== undefined) {
      resolved.num = msg.num;
    }
    else {
      resolved.num = 0
    }

    if (msg.Michelle !== undefined) {
      resolved.Michelle = msg.Michelle;
    }
    else {
      resolved.Michelle = ''
    }

    if (msg.Wang !== undefined) {
      resolved.Wang = msg.Wang;
    }
    else {
      resolved.Wang = ''
    }

    if (msg.age !== undefined) {
      resolved.age = msg.age;
    }
    else {
      resolved.age = 0
    }

    if (msg.score !== undefined) {
      resolved.score = msg.score;
    }
    else {
      resolved.score = 0
    }

    return resolved;
    }
};

module.exports = Num;
