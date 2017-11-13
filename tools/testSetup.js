// This file is written in ES5 since it's not transpiled by Babel.

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')();

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
