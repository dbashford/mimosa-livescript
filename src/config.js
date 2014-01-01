"use strict";

exports.defaults = function() {
  return {
    livescript: {
      extensions: ["ls"],
      options: {
        bare:true
      }
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n"+
         "  # livescript:              # config settings for the LiveScript compiler module\n" +
         "    # lib: undefined           # use this property to provide a specific version of LiveScript\n" +
         "    # extensions: [\"ls\"]       # default extensions for LiveScript files\n" +
         "    # options:                 # options for the LiveScript compiler\n" +
         "      # bare:true              # whether or not to use the default safety wrapper\n";
};

exports.validate = function(config, validators) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "livescript config", config.livescript ) ) {

    if ( !config.livescript.lib ) {
      config.livescript.lib = require( 'LiveScript' );
    }

    if ( validators.isArrayOfStringsMustExist( errors, "livescript.extensions", config.livescript.extensions ) ) {
      if (config.livescript.extensions.length === 0) {
        errors.push( "livescript.extensions cannot be an empty array");
      }
    }

  }

  return errors;
};
