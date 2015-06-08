"use strict";

var config = require( "./config" )
  , getExtensions = function ( mimosaConfig ) {
    return mimosaConfig.livescript.extensions;
  };

var compile = function ( mimosaConfig, file, cb ) {
  var output,
    error,
    lsConfig = mimosaConfig.livescript,
    options = Object.create( mimosaConfig.livescript.options );

  // Check if source maps have been excluded for this file
  if ( options.sourceMap ) {
    if ( lsConfig.sourceMapExclude && lsConfig.sourceMapExclude.indexOf( file.inputFileName ) > -1 ) {
      options.map = false;
    } else if ( lsConfig.sourceMapExcludeRegex && file.inputFileName.match( lsConfig.sourceMapExcludeRegex ) ) {
      options.map = false;
    }
    else {
      options.filename = 'file://' + file.inputFileName;
      options.map = 'embedded';
    }
  }
  else {
    options.map = false;
  }

  try {
    output = lsConfig.lib.compile( file.inputFileText, options );
    if (options.map) {
      output = output.code;
    }
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
