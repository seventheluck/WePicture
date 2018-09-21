/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var entity_common_pb = require('../entity/common_pb.js');
var entity_customer_pb = require('../entity/customer_pb.js');
var entity_product_pb = require('../entity/product_pb.js');
goog.exportSymbol('proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest', null, global);
goog.exportSymbol('proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage', null, global);
goog.exportSymbol('proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.Domain', null, global);
goog.exportSymbol('proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse', null, global);
goog.exportSymbol('proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.repeatedFields_, null);
};
goog.inherits(proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.displayName = 'proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, 0),
    textsList: jspb.Message.getRepeatedField(msg, 2),
    mediaIdsList: jspb.Message.getRepeatedField(msg, 3),
    directUploadImagesList: jspb.Message.toObjectList(msg.getDirectUploadImagesList(),
    proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.toObject, includeInstance),
    limit: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest;
  return proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.Domain} */ (reader.readEnum());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTexts(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addMediaIds(value);
      break;
    case 4:
      var value = new proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage;
      reader.readMessage(value,proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.deserializeBinaryFromReader);
      msg.addDirectUploadImages(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTextsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getMediaIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDirectUploadImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.Domain = {
  ALL: 0,
  ADDRESS: 1,
  CUSTOMER: 2,
  PRODUCT: 3
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.displayName = 'proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.prototype.toObject = function(opt_includeInstance) {
  return proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.toObject = function(includeInstance, msg) {
  var f, obj = {
    ext: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bytes: msg.getBytes_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage;
  return proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string ext = 1;
 * @return {string}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.prototype.setExt = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes bytes = 2;
 * @return {!(string|Uint8Array)}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.prototype.getBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes bytes = 2;
 * This is a type-conversion wrapper around `getBytes()`
 * @return {string}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.prototype.getBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytes()));
};


/**
 * optional bytes bytes = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytes()`
 * @return {!Uint8Array}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.prototype.getBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage.prototype.setBytes = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Domain domain = 1;
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.Domain}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.getDomain = function() {
  return /** @type {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.Domain} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.Domain} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.setDomain = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string texts = 2;
 * @return {!Array.<string>}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.getTextsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<string>} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.setTextsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.addTexts = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.clearTextsList = function() {
  this.setTextsList([]);
};


/**
 * repeated string media_ids = 3;
 * @return {!Array.<string>}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.getMediaIdsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array.<string>} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.setMediaIdsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.addMediaIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.clearMediaIdsList = function() {
  this.setMediaIdsList([]);
};


/**
 * repeated DirectUploadImage direct_upload_images = 4;
 * @return {!Array.<!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage>}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.getDirectUploadImagesList = function() {
  return /** @type{!Array.<!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage, 4));
};


/** @param {!Array.<!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage>} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.setDirectUploadImagesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.addDirectUploadImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.DirectUploadImage, opt_index);
};


proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.clearDirectUploadImagesList = function() {
  this.setDirectUploadImagesList([]);
};


/**
 * optional int32 limit = 10;
 * @return {number}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParseRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.repeatedFields_, null);
};
goog.inherits(proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.displayName = 'proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse;
  return proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject;
      reader.readMessage(value,proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ParsedObject results = 1;
 * @return {!Array.<!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject>}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.prototype.getResultsList = function() {
  return /** @type{!Array.<!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject, 1));
};


/** @param {!Array.<!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject>} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject, opt_index);
};


proto.jiaonidaigou.appengine.wiremodel.api.ParseResponse.prototype.clearResultsList = function() {
  this.setResultsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.oneofGroups_);
};
goog.inherits(proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.displayName = 'proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.oneofGroups_ = [[50,51,52]];

/**
 * @enum {number}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.ContentCase = {
  CONTENT_NOT_SET: 0,
  ADDRESS: 50,
  CUSTOMER: 51,
  PRODUCT: 52
};

/**
 * @return {proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.ContentCase}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.getContentCase = function() {
  return /** @type {proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.ContentCase} */(jspb.Message.computeOneofCase(this, proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.toObject = function(opt_includeInstance) {
  return proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    confidence: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: (f = msg.getAddress()) && entity_common_pb.Address.toObject(includeInstance, f),
    customer: (f = msg.getCustomer()) && entity_customer_pb.Customer.toObject(includeInstance, f),
    product: (f = msg.getProduct()) && entity_product_pb.Product.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject;
  return proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConfidence(value);
      break;
    case 50:
      var value = new entity_common_pb.Address;
      reader.readMessage(value,entity_common_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 51:
      var value = new entity_customer_pb.Customer;
      reader.readMessage(value,entity_customer_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 52:
      var value = new entity_product_pb.Product;
      reader.readMessage(value,entity_product_pb.Product.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfidence();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      entity_common_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      entity_customer_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      entity_product_pb.Product.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 confidence = 1;
 * @return {number}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.setConfidence = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional jiaonidaigou.appengine.wiremodel.entity.Address address = 50;
 * @return {?proto.jiaonidaigou.appengine.wiremodel.entity.Address}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.getAddress = function() {
  return /** @type{?proto.jiaonidaigou.appengine.wiremodel.entity.Address} */ (
    jspb.Message.getWrapperField(this, entity_common_pb.Address, 50));
};


/** @param {?proto.jiaonidaigou.appengine.wiremodel.entity.Address|undefined} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.setAddress = function(value) {
  jspb.Message.setOneofWrapperField(this, 50, proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.oneofGroups_[0], value);
};


proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional jiaonidaigou.appengine.wiremodel.entity.Customer customer = 51;
 * @return {?proto.jiaonidaigou.appengine.wiremodel.entity.Customer}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.getCustomer = function() {
  return /** @type{?proto.jiaonidaigou.appengine.wiremodel.entity.Customer} */ (
    jspb.Message.getWrapperField(this, entity_customer_pb.Customer, 51));
};


/** @param {?proto.jiaonidaigou.appengine.wiremodel.entity.Customer|undefined} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.setCustomer = function(value) {
  jspb.Message.setOneofWrapperField(this, 51, proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.oneofGroups_[0], value);
};


proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.clearCustomer = function() {
  this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional jiaonidaigou.appengine.wiremodel.entity.Product product = 52;
 * @return {?proto.jiaonidaigou.appengine.wiremodel.entity.Product}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.getProduct = function() {
  return /** @type{?proto.jiaonidaigou.appengine.wiremodel.entity.Product} */ (
    jspb.Message.getWrapperField(this, entity_product_pb.Product, 52));
};


/** @param {?proto.jiaonidaigou.appengine.wiremodel.entity.Product|undefined} value */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.setProduct = function(value) {
  jspb.Message.setOneofWrapperField(this, 52, proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.oneofGroups_[0], value);
};


proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jiaonidaigou.appengine.wiremodel.api.ParsedObject.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 52) != null;
};


goog.object.extend(exports, proto.jiaonidaigou.appengine.wiremodel.api);
