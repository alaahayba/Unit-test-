unit test
------------

Unit testing is a component of  test Driven Development (TDD).
 pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision.
 
 now the process of building and testing an algorithm is started by writing the tests first, then changing the method being tested so that it fulfills the tests this simple example to explain the process of TDD https://www.codeproject.com/Articles/18181/Test-Driven-First-Development-by-Example

_________________________________________________________________________________________________________________________

Automation unit test 
---------------------
Automation Testing means using an automation tool to execute your test case suite.   
The automation software enter test data into the System then compare  expected and actual  results and generate detailed test  reports. 

___________________________________________________________________________________________________________________________
code coverage
--------------

Code coverage is a term used in software testing to describe how much program source code is covered by a testing plan. 
Developers look at the number of program subroutines and lines of code that are covered by a set of testing resources and techniques.
Karma can generate code coverage using awesome Istanbul
______________________________________________________________________________________________________________________________

****notice that we used Karma for run tests and determine code coverage But jasmine is used for writ code of unit test.****
__________________________________________________________________________________________________________________________

Automation unit test for ionic 2
------------------------------

**Jasmine is one of the popular JavaScript unit testing frameworks.
 
Jasmine is a behavior-driven development framework for testing JavaScript code. 
It does not depend on any other JavaScript frameworks. And it has a clean, obvious syntax so that you can easily write tests.
it does not have a test runner so you will need to use a tool like Karma for that.
the Jasmine framework has almost everything built into it including assertions/expectations  

**tool called Karma is a JavaScript test runner created by the Angular JS team.
-Karma provides helpful tools that make it easier to us to call our Jasmine tests.
_____________________________________________________________________________________________________________________________

 Setting up Jasmine and Karma :-
 ______________________________
 
 Run the following command to generate a new Ionic 2 application:
 
-- Creating a project
1-Let’s first create a new project:
_________________________________
 
 ionic start ionic-testing blank –v2
 
 --------------------------------------------------------------------------------------------------------------------
 
 2- In the project directory run the following:-
 _____________________________________________

npm install angular-cli --save-dev && npm install codecov --save-dev && npm install -g karma-cli && npm install jasmine-core --save-dev && npm install jasmine-spec-reporter --save-dev && npm install karma --save-dev && npm install karma-chrome-launcher --save-dev && npm install karma-jasmine --save-dev && npm install karma-mocha-reporter --save-dev && npm install karma-remap-istanbul --save-dev && npm install ts-node --save-dev && npm install tslint --save-dev && npm install tslint-eslint-rules --save-dev && npm install @types/jasmine --save-dev && npm install @types/node --save-dev

---------------------------------------------------------------------------------------------------------------------

 3- Now do “karma init karma.conf.js” in the root directory and copy the following content:
 _________________________________________________________________________________________________
 
karma.conf.js 
*********************************************************************************************************
module.exports = function (config) {
 config.set({
   basePath: '',
   frameworks: ['jasmine', 'angular-cli'],
   plugins: [
     require('karma-jasmine'),
     require('karma-chrome-launcher'),
     require('karma-mocha-reporter'),
     require('karma-remap-istanbul'), //for test coverage
     require('angular-cli/plugins/karma')
   ],
   files: [
     { pattern: './src/test.ts', watched: false }
   ],
   preprocessors: {
     './src/test.ts': ['angular-cli'] //// that contains path of test files
   },
    
   mime: {
     'text/x-typescript': ['ts','tsx']
   },
   remapIstanbulReporter: {
     reports: { 
     //that for code coverage 
       html: 'coverage',
       lcovonly: './coverage/coverage.lcov'
     }
   },
   angularCli: {
     config: './angular-cli.json',
     environment: 'dev'
   },
   reporters: config.angularCli && config.angularCli.codeCoverage
             ? ['mocha', 'karma-remap-istanbul']
             : ['mocha'],
   port: 9876,
   colors: true,
   logLevel: config.LOG_INFO,
   autoWatch: true,
   browsers: ['Chrome'],
   singleRun: false,
 });
};
**************************************************************************************************************

4-Now, create a new file in your root folder “angular-cli.json” and copy the following code:
------------------------------------------------------------------------------------------------------------
angular-cli.json
***********************************************************************************************************

{
 "project": {
   "version": "1.0.0",
   "name": "ionic-testing"
 },
 "apps": [
   {
     "root": "src",
     "outDir": "dist",
     "assets": [
       "assets"
     ],
     "index": "index.html",
     "main": "main.ts",
     "test": "test.ts",
     "tsconfig": "tsconfig.test.json",
     "prefix": "app",
     "mobile": false,
     "styles": [
       "styles.css"
     ],
     "scripts": [],
     "environments": {
       "source": "environments/environment.ts",
       "dev": "environments/environment.ts",
       "prod": "environments/environment.prod.ts"
     }
   }
 ],
 "addons": [],
 "packages": [],
 "test": {
   "karma": {
     "config": "./karma.conf.js"
   }
 },
 "defaults": {
   "styleExt": "css",
   "prefixInterfaces": false,
   "inline": {
     "style": false,
     "template": false
   },
   "spec": {
     "class": false,
     "component": true,
     "directive": true,
     "module": false,
     "pipe": true,
     "service": true
   }
 }
}
********************************************************************************************************************************

 
5- in “src/” directory. create a new file “environment.prod.ts” and copy the following code:

environment.prod.ts

export const environment: any = {
  production: true,
};
----------------------------------------------------------

then Create a file at src/environment/environment.ts and add the following:
 
export const environment: any = {
  production: false,
};
