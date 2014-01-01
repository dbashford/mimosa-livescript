"use strict";

var config = require( './config' )
  , getExtensions = function ( mimosaConfig ) {
    return mimosaConfig.livescript.extensions;
  };

var compile = function ( mimosaConfig, file, cb ) {
  var output,
    error,
    lsConfig = mimosaConfig.livescript;

  try {
    output = lsConfig.lib.compile( file.inputFileText, lsConfig.options );
  } catch ( err ) {
    error = err;
  }

  cb( error, output );
};

module.exports = {
  name: "livescript",
  compilerType: "javascript",
  compile: compile,
  extensions: getExtensions,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};