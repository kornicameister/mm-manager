'use strict';

let testsContext = require.context('./', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
