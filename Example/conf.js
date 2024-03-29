var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    /*capabilities: {
      'browserName': 'chrome'
    },*/
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: [
        'spec.js',
    ],
	
     // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
    
    onPrepare: function() {
            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        	savePath: './test/reports/',   
        	fileNamePrefix: 'STO',
            screenshotOnFail :true,
            showSkipped:false,
            browser:browser,
            showLineChart:true
        }));
      },
      onComplete:function(exitcode){
          reporter.write_consolidated()
        }
        
};


