var util = require('util');
var winston = require('winston');

spyLogger = function(options) {
  options = options || {};
  this.level = options.level || 'info';
  this.spy = options.spy;
};

util.inherits(spyLogger, winston.Transport);

spyLogger.prototype.name = 'spyLogger';

spyLogger.prototype.log = function(level, msg, meta, callback) {
  this.spy(level, msg, meta);
  callback(null, true);
};

spyLogger.prototype.error = function(msg, meta, callback) {
  this.spy('error', msg, meta);
  callback(null, true);
};

spyLogger.prototype.warn = function(msg, meta, callback) {
  this.spy('warn', msg, meta);
  callback(null, true);
};

spyLogger.prototype.help = function(msg, meta, callback) {
  this.spy('help', msg, meta);
  callback(null, true);
};

spyLogger.prototype.data = function(msg, meta, callback) {
  this.spy('data', msg, meta);
  callback(null, true);
};

spyLogger.prototype.info = function(msg, meta, callback) {
  this.spy('info', msg, meta);
  callback(null, true);
};

spyLogger.prototype.debug = function(msg, meta, callback) {
  this.spy('debug', msg, meta);
  callback(null, true);
};

spyLogger.prototype.prompt = function(msg, meta, callback) {
  this.spy('prompt', msg, meta);
  callback(null, true);
};

spyLogger.prototype.verbose = function(msg, meta, callback) {
  this.spy('verbose', msg, meta);
  callback(null, true);
};

spyLogger.prototype.input = function(msg, meta, callback) {
  this.spy('input', msg, meta);
  callback(null, true);
};

spyLogger.prototype.silly = function(msg, meta, callback) {
  this.spy('silly', msg, meta);
  callback(null, true);
};

module.exports = winston.transports.SpyLogger = spyLogger;