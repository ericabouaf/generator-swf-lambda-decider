# myworkflow

## Config

Setup the IAM roles :

* In lambda-config.js, setup the ARN role for the lambda execution
* In swf-config.js, setup the ARN role for the SWF Workflow to call lambda tasks. (This is optional, only required if your decider uses lambda functions)

## Deployment

    $ gulp deploy

## SWF

    $ gulp register



Built with [generator-swf-lambda-decider](TODO)
