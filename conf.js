const HtmlReporter = require('protractor-beautiful-reporter')

exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'https://app.anymind.com/widget/DXboqKQUrvo/pre-call/service',
    specs: ['specs/login.js'],
    onPrepare: function() {
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
     }
  }