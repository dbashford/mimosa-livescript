mimosa-livescript
===========

## Overview

This is a LiveScript compiler for the Mimosa build tool. This module is for use with Mimosa `2.0+`.  This replicates the functionality of the LiveScript compiler that was built into Mimosa before `2.0`.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `'livescript'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will compile LiveScript files during `mimosa watch` and `mimosa build`.

LiveScript, by default, wraps compiled JavaScript in a safety wrapper to protect scope. This module turns this wrapping off by compiling `bare` by default. It does this because it assumes code is already being wrapped in AMD or CommonJS/AMD functions `define` or `require`.

All LiveScript configuration options can be provided in the `options` object. `bare` is the only one provided values by this module.

## Default Config

```coffeescript
livescript:
  lib: undefined
  extensions: ["ls"]
  options:
    bare:true
```

* `lib`: You may want to use this module but may not be ready to use the latest version of LiveScript. Using the `lib` property you can provide a specific version of LiveScript if the one being used by this module isn't to your liking. To provide a specific version, you must have it `npm install`ed into your project and then provide it to `lib`. For instance: `lib: require('LiveScript')`.
* `extensions`: an array of strings, the extensions of your LiveScript files.
* `options`: an object, the LiveScript compiler configuration. This object is passed straight to the LiveScript compiler. New properties can be added here to tweak LiveScript compilation.
* `options.bare`: a LiveScript compiler option to turn on/off the safety wrapper.
