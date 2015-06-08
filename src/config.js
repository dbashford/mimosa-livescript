"use strict";

exports.defaults = function() {
  return {
    livescript: {
      extensions: ["ls"],
      sourceMapDynamic: true,
      sourceMapExclude: [], //[/\/specs?\//, /_spec.js$/],
      sourceMapConditional: false,
      options: {
        bare: true,
        sourceMap:true
      }
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  livescript:              # config settings for the LiveScript compiler module\n" +
         "    lib: undefined         # use this property to provide a specific version of LiveScript\n" +
         "    extensions: [\"ls\"]     # default extensions for LiveScript files\n" +
         "    sourceMapDynamic: true   # whether or not to inline the source maps in the compiled JavaScript\n" +
         "    sourceMapExclude: [/\\/specs?\\//, /_spec.js$/] # files to exclude from source map generation\n" +
         "    sourceMapConditional: false # whether or not to use conditional source maps\n" +
         "    options:               # options for the LiveScript compiler\n" +
         "      sourceMap:true         # whether or not to create source maps\n" +
         "      bare:true            # whether or not to use the default safety wrapper\n";
};

exports.validate = function(config, validators) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "livescript config", config.livescript ) ) {

    if ( !config.livescript.lib ) {
      config.livescript.lib = require( "livescript" );
    }

    if ( validators.isArrayOfStringsMustExist( errors, "livescript.extensions", config.livescript.extensions ) ) {
      if (config.livescript.extensions.length === 0) {
        errors.push( "livescript.extensions cannot be an empty array");
      }
    }

  }

  return errors;
};
