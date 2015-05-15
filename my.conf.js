// Karma configuration
// Generated on Tue May 12 2015 18:24:16 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
    //dependecy files
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-resource/angular-resource.js',
      'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/bower_components/angular-cookies/angular-cookies.js',
      'client/bower_components/angular-sanitize/angular-sanitize.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/bower_components/lodash/dist/lodash.compat.js',
      'client/bower_components/angular-ui-router/release/angular-ui-router.js',
    //client files
      'client/app/app.js',
      'client/app/account/account.js',
      'client/app/account/login/login.controller.js',
      'client/app/account/settings/settings.controller.js',
      'client/app/account/signup/signup.controller.js',
      'client/app/contributionRecd/contributionRecd.controller.js',
      'client/app/contributionRecd/contributionRecd.js',
      'client/app/dashboard/dashboard.controller.js',
      'client/app/dashboard/dashboard.js',
      'client/app/help-request/help-request.controller.js',
      'client/app/help-request/help-request.js',
      'client/app/allHelpRequest/allHelpRequest.controller.js',
      'client/app/allHelpRequest/allHelpRequest.js',
      'client/app/main/main.controller.js',
      'client/app/main/main.js',
      'client/app/inbox/inbox.controller.js',
      'client/app/inbox/inbox.js',
      'client/app/submission/submission.controller.js',
      'client/app/submission/submission.js',
      'client/app/contribution/contribution.controller.js',
      'client/app/contribution/contribution.js',
      'client/components/auth/auth.service.js',
      'client/components/auth/helpRequest.service.js',
      'client/components/auth/contribution.service.js',
      'client/components/auth/user.service.js',
      'client/components/modal/modal.service.js',
      'client/components/navbar/navbar.controller.js',
   //test files
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-sinon'
    ]
  });
};
