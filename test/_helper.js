process.env.NODE_ENV = 'test';

require('coffee-script');

// Setup base test variables

assert  = require('assert')
request = require('request')
app     = require('../server.js')
