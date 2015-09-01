
var uuid = require('node-uuid');

module.exports = {

  register: {
    domain: '<%= swfdomain %>',
    name: '<%= name %>',
    version: '1.0'
  },

  // Default start options
  start: {
    domain: '<%= swfdomain %>',
    workflowId: uuid.v4(),
    workflowType: {
      name: '<%= name %>',
      version: '1.0'
    },
    childPolicy: 'TERMINATE', /*'TERMINATE | REQUEST_CANCEL | ABANDON',*/
    executionStartToCloseTimeout: '60',
    input: JSON.stringify({key: 'value'}),
    /* Important: if you run lambdas, you should specify the role they should run */
    lambdaRole: 'arn:aws:iam::594833901287:role/swf-lambda', // TODO !
    tagList: [
      'STRING_VALUE',
      /* more items */
    ],
    taskList: {
      name: '<%= swftasklist %>'
    },
    /*taskPriority: 'STRING_VALUE',*/
    taskStartToCloseTimeout: '60'
  }

};
