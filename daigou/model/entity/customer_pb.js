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
var entity_media_object_pb = require('../entity/media_object_pb.js');
goog.exportSymbol('proto.jiaonidaigou.appengine.wiremodel.entity.Customer', null, global);
goog.exportSymbol('proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts', null, global);

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
proto.jiaonidaigou.appengine.wiremodel.entity.Customer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jiaonidaigou.appengine.wiremodel.entity.Customer.repeatedFields_, null);
};
goog.inherits(proto.jiaonidaigou.appengine.wiremodel.entity.Customer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jiaonidaigou.appengine.wiremodel.entity.Customer.displayName = 'proto.jiaonidaigou.appengine.wiremodel.entity.Customer';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.repeatedFields_ = [4,8];



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
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.toObject = function(opt_includeInstance) {
  return proto.jiaonidaigou.appengine.wiremodel.entity.Customer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phone: (f = msg.getPhone()) && entity_common_pb.PhoneNumber.toObject(includeInstance, f),
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    entity_common_pb.Address.toObject, includeInstance),
    idCard: jspb.Message.getFieldWithDefault(msg, 5, ""),
    idCardFrontMedia: (f = msg.getIdCardFrontMedia()) && entity_media_object_pb.MediaObject.toObject(includeInstance, f),
    idCardBackMedia: (f = msg.getIdCardBackMedia()) && entity_media_object_pb.MediaObject.toObject(includeInstance, f),
    emailsList: jspb.Message.getRepeatedField(msg, 8),
    socialContacts: (f = msg.getSocialContacts()) && proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.toObject(includeInstance, f)
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
 * @return {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jiaonidaigou.appengine.wiremodel.entity.Customer;
  return proto.jiaonidaigou.appengine.wiremodel.entity.Customer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new entity_common_pb.PhoneNumber;
      reader.readMessage(value,entity_common_pb.PhoneNumber.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 4:
      var value = new entity_common_pb.Address;
      reader.readMessage(value,entity_common_pb.Address.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdCard(value);
      break;
    case 6:
      var value = new entity_media_object_pb.MediaObject;
      reader.readMessage(value,entity_media_object_pb.MediaObject.deserializeBinaryFromReader);
      msg.setIdCardFrontMedia(value);
      break;
    case 7:
      var value = new entity_media_object_pb.MediaObject;
      reader.readMessage(value,entity_media_object_pb.MediaObject.deserializeBinaryFromReader);
      msg.setIdCardBackMedia(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmails(value);
      break;
    case 30:
      var value = new proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts;
      reader.readMessage(value,proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.deserializeBinaryFromReader);
      msg.setSocialContacts(value);
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
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jiaonidaigou.appengine.wiremodel.entity.Customer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      entity_common_pb.PhoneNumber.serializeBinaryToWriter
    );
  }
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      entity_common_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getIdCard();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIdCardFrontMedia();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      entity_media_object_pb.MediaObject.serializeBinaryToWriter
    );
  }
  f = message.getIdCardBackMedia();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      entity_media_object_pb.MediaObject.serializeBinaryToWriter
    );
  }
  f = message.getEmailsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getSocialContacts();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.serializeBinaryToWriter
    );
  }
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
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.displayName = 'proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts';
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
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.prototype.toObject = function(opt_includeInstance) {
  return proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.toObject = function(includeInstance, msg) {
  var f, obj = {
    wechatId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teddyUserId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts;
  return proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWechatId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeddyUserId(value);
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
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWechatId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeddyUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wechat_id = 1;
 * @return {string}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.prototype.getWechatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.prototype.setWechatId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string teddy_user_id = 2;
 * @return {string}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.prototype.getTeddyUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts.prototype.setTeddyUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PhoneNumber phone = 3;
 * @return {?proto.jiaonidaigou.appengine.wiremodel.entity.PhoneNumber}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.getPhone = function() {
  return /** @type{?proto.jiaonidaigou.appengine.wiremodel.entity.PhoneNumber} */ (
    jspb.Message.getWrapperField(this, entity_common_pb.PhoneNumber, 3));
};


/** @param {?proto.jiaonidaigou.appengine.wiremodel.entity.PhoneNumber|undefined} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.setPhone = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.clearPhone = function() {
  this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Address addresses = 4;
 * @return {!Array.<!proto.jiaonidaigou.appengine.wiremodel.entity.Address>}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.getAddressesList = function() {
  return /** @type{!Array.<!proto.jiaonidaigou.appengine.wiremodel.entity.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, entity_common_pb.Address, 4));
};


/** @param {!Array.<!proto.jiaonidaigou.appengine.wiremodel.entity.Address>} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.setAddressesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.jiaonidaigou.appengine.wiremodel.entity.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jiaonidaigou.appengine.wiremodel.entity.Address}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.jiaonidaigou.appengine.wiremodel.entity.Address, opt_index);
};


proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.clearAddressesList = function() {
  this.setAddressesList([]);
};


/**
 * optional string id_card = 5;
 * @return {string}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.getIdCard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.setIdCard = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional MediaObject id_card_front_media = 6;
 * @return {?proto.jiaonidaigou.appengine.wiremodel.entity.MediaObject}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.getIdCardFrontMedia = function() {
  return /** @type{?proto.jiaonidaigou.appengine.wiremodel.entity.MediaObject} */ (
    jspb.Message.getWrapperField(this, entity_media_object_pb.MediaObject, 6));
};


/** @param {?proto.jiaonidaigou.appengine.wiremodel.entity.MediaObject|undefined} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.setIdCardFrontMedia = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.clearIdCardFrontMedia = function() {
  this.setIdCardFrontMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.hasIdCardFrontMedia = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MediaObject id_card_back_media = 7;
 * @return {?proto.jiaonidaigou.appengine.wiremodel.entity.MediaObject}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.getIdCardBackMedia = function() {
  return /** @type{?proto.jiaonidaigou.appengine.wiremodel.entity.MediaObject} */ (
    jspb.Message.getWrapperField(this, entity_media_object_pb.MediaObject, 7));
};


/** @param {?proto.jiaonidaigou.appengine.wiremodel.entity.MediaObject|undefined} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.setIdCardBackMedia = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.clearIdCardBackMedia = function() {
  this.setIdCardBackMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.hasIdCardBackMedia = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string emails = 8;
 * @return {!Array.<string>}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.getEmailsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array.<string>} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.setEmailsList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.addEmails = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.clearEmailsList = function() {
  this.setEmailsList([]);
};


/**
 * optional SocialContacts social_contacts = 30;
 * @return {?proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.getSocialContacts = function() {
  return /** @type{?proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts} */ (
    jspb.Message.getWrapperField(this, proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts, 30));
};


/** @param {?proto.jiaonidaigou.appengine.wiremodel.entity.Customer.SocialContacts|undefined} value */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.setSocialContacts = function(value) {
  jspb.Message.setWrapperField(this, 30, value);
};


proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.clearSocialContacts = function() {
  this.setSocialContacts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jiaonidaigou.appengine.wiremodel.entity.Customer.prototype.hasSocialContacts = function() {
  return jspb.Message.getField(this, 30) != null;
};


goog.object.extend(exports, proto.jiaonidaigou.appengine.wiremodel.entity);
