
exports.handler = require('swf-lambda-decider')(function (w) {

  w.stop({
    result: 'Everything is good !'
  });

});
