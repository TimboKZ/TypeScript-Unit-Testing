/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Main app containing the main application logic
	 */
	"use strict";
	/**
	 * Imports
	 */
	var calculator_1 = __webpack_require__(1);
	/**
	 * Unit tests
	 */
	describe('Testing that Jasmine is loaded', function () {
	    it('true is true', function () {
	        expect(true).toBe(true);
	    });
	    it('false is not true', function () {
	        expect(false).not.toBe(true);
	    });
	});
	describe('Testing that Calculator class is loaded', function () {
	    it('ping() returns \'pong\'', function () {
	        expect(calculator_1.Calculator.ping()).toBe("pong");
	    });
	});
	describe('Testing addition', function () {
	    var input = [
	        [1, 2],
	        [0, 4],
	        [-3, 3]
	    ];
	    var output = [3, 4, 0];
	    function testAddition(x, y, z) {
	        it(x + ' + ' + y + ' = ' + z, function () {
	            expect(calculator_1.Calculator.add(x, y)).toEqual(z);
	        });
	    }
	    for (var i = 0; i < input.length; i++) {
	        testAddition(input[i][0], input[i][1], output[i]);
	    }
	});
	describe('Testing division', function () {
	    var input = [
	        [1, 2],
	        [0, 4],
	        [-3, 3]
	    ];
	    var output = [1 / 2, 0 / 4, -3 / 3];
	    function testDivision(x, y, z) {
	        it(x + ' / ' + y + ' = ' + z, function () {
	            expect(calculator_1.Calculator.div(x, y)).toEqual(z);
	        });
	    }
	    for (var i = 0; i < input.length; i++) {
	        testDivision(input[i][0], input[i][1], output[i]);
	    }
	    it('Division by zero throws an error', function () {
	        expect(calculator_1.Calculator.div.bind(null, 0, 0)).toThrowError(/division by zero/gi);
	    });
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * A very simple calculator implementation
	 */
	"use strict";
	var Calculator = (function () {
	    function Calculator() {
	    }
	    /**
	     * Prints 'pong' to console
	     */
	    Calculator.ping = function () {
	        return 'pong';
	    };
	    /**
	     * Addition
	     */
	    Calculator.add = function (x, y) {
	        return x + y;
	    };
	    /**
	     * Divison
	     */
	    Calculator.div = function (x, y) {
	        if (y == 0)
	            throw new Error('Division by zero!');
	        return x / y;
	    };
	    return Calculator;
	}());
	exports.Calculator = Calculator;


/***/ }
/******/ ]);