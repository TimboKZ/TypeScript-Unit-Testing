/**
 * Main app containing the main application logic
 */

/**
 * Imports
 */

import {Calculator} from "./calculator";

/**
 * Unit tests
 */

describe('Testing that Jasmine is loaded', function() {
    it('true is true', function () {
        expect(true).toBe(true);
    });
    it('false is not true', function () {
        expect(false).not.toBe(true);
    });
});

describe('Testing that Calculator class is loaded', function() {
    it('ping() returns \'pong\'', function () {
        expect(Calculator.ping()).toBe("pong");
    });
});

describe('Testing addition', function() {
    var input = [
        [1, 2],
        [0, 4],
        [-3, 3]
    ];
    var output = [ 3, 4, 0 ];
    function testAddition(x, y, z) {
        it(x + ' + ' + y + ' = ' + z, () => {
            expect(Calculator.add(x, y)).toEqual(z);
        });
    }
    for(var i = 0; i < input.length; i++) {
        testAddition(input[i][0], input[i][1], output[i]);
    }
});

describe('Testing division', function() {
    var input = [
        [1, 2],
        [0, 4],
        [-3, 3]
    ];
    var output = [ 1/2, 0/4, -3/3 ];
    function testDivision(x, y, z) {
        it(x + ' / ' + y + ' = ' + z, () => {
            expect(Calculator.div(x, y)).toEqual(z);
        });
    }
    for(var i = 0; i < input.length; i++) {
        testDivision(input[i][0], input[i][1], output[i]);
    }

    it('Division by zero throws an error', function () {
        expect(Calculator.div.bind(null, 0, 0)).toThrowError(/division by zero/gi);
    });
});