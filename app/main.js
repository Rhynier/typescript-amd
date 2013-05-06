﻿require.config({
    // So that require calls compiled from typescript work as expected
    // The relative path from this file to the root of your typescript files 
    baseUrl: './scripts',
    // Relative urls continue to work normal (from source file).
    // However Non-relative URLs use this as base

    paths: {
        jquery: '../lib/jquery', 
        legacyJs: 'js/legacyJs',
        legacyJsDependency: './js/legacyJsDependency'
        
        // Not adding newJs here simply to demonstrate how to access those directly from typescript without using paths
    },

    // For legacy files that do not export anything you need shims
    // For root level exports. http://requirejs.org/docs/api.html#config-shim
    shim: {
        'legacyJs': {
            // For dependencies. 
            deps: ['legacyJsDependency'],
            // For more than one global export you need to use an init function :
            init: function (legacyJsSDependency) {
                // Inside this function this will refer to the global scope of the file
                return {
                    'legacyJsFunction': this.legacyJsFunction,
                    'legacyJsFunction2': this.legacyJsFunction2
                };
            }
        },
        'legacyJsDependency': {
            // For simple single exports Just use exports variable
            exports: 'sayIt'
        },
    },
    
    // Alternative to shim is something that jquery does. See bottom on jquery file. 

});

// Start the app: 
require(['app'], function (app) {
    app.start();
});
