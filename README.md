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

if you miss to test function or line or branch karma coverage will mark it also it produce percentage for code coverage with unit test.
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
____________________________________________________________________________________________________________________________________

6- in your “src/” folder, create a new file “mocks.ts” and copy the following code:

------------------------------------------------------------------------------------------------
******************************************************************************************************
mocks.ts

export class ConfigMock {
 public get(): any {
   return '';
 }
 public getBoolean(): boolean {
   return true;
 }
 public getNumber(): number {
   return 1;
 }
}
export class FormMock {
 public register(): any {
   return true;
 }
}
export class NavMock {
 public pop(): any {
   return new Promise(function(resolve: Function): void {
     resolve();
   });
 }
 public push(): any {
   return new Promise(function(resolve: Function): void {
     resolve();
   });
 }
 public getActive(): any {
   return {
     'instance': {
       'model': 'something',
     },
   };
 }
 public setRoot(): any {
   return true;
 }
}
export class PlatformMock {
 public ready(): any {
   return new Promise((resolve: Function) => {
     resolve();
   });
 }
}
export class MenuMock {
 public close(): any {
   return new Promise((resolve: Function) => {
     resolve();
   });
 }
}

****************************************************************************************************************
_______________________________________________________________________________________________________________________________

7 - Now, in the same folder, create a new file “polyfills.ts” and copy the following content:

polyfills.ts

 

import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

_______________________________________________________________________________________________________________


8 - Now, create a new file “test.ts” and copy the following code:

test.ts

********************************************************

import './polyfills.ts';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getTestBed, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { App, Config, Form, IonicModule, Keyboard, DomController, MenuController, NavController, Platform } from 'ionic-angular';
import { ConfigMock } from './mocks';
declare var __karma__: any;
declare var require: any;
__karma__.loaded = function (): void {

};
getTestBed().initTestEnvironment(
 BrowserDynamicTestingModule,
 platformBrowserDynamicTesting(),
);
let context: any = require.context('./', true, /\.spec\.ts/); // path of all tests file (testfilename.spec.ts)
context.keys().map(context);
__karma__.start();

_____________________________________________________________________________________________________________________________

9 - In your “src/” directory, create a new file “tsconfig.test.json” and copy the following code:

tsconfig.test.json

**************************************************

{
 "compilerOptions": {
   "baseUrl": "",
   "declaration": false,
   "emitDecoratorMetadata": true,
   "experimentalDecorators": true,
   "lib": ["es6", "dom"],
   "mapRoot": "./",
   "module": "es6",
   "moduleResolution": "node",
   "outDir": "../dist/out-tsc",
   "sourceMap": true,
   "target": "es5",
   "typeRoots": [
     "../node_modules/@types"
   ]
 }
}

***********************************************************************************************

n the “scripts” array of your “package.json”, add the following line:

"test": "ng test"

_________________________________________________________________________________________________

now jasmine and Karma are installed .


now you can write your test suits

____________________________________________________________________________________________________________

In your “src/providers” folder, open “number-generator.ts” and copy the following content:

number-generator.ts


import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NumberGeneratorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NumberGeneratorProvider {

  constructor() {
    console.log('Hello NumberGeneratorProvider Provider');
  }

  hello(name) {
    return "hello :" + name + '.';
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  add(x: number, y: number): number {
    let res: number = x + y;
    return res;
  }

  is_odd(x: number) {
    if (x % 2 === 1)
      return true;

    return false;
  }
 /* iszero(x) {
    if (x = 0)
      return true;
  }*/

}

-----------------------------------------------------------------------------------------

then write unittest file it is name -->  number-generator.spec.ts



console.log("number generator test");

import { NumberGeneratorProvider } from './number-generator';
import {} from 'jasmine';



let numberGenerator = null;

describe('Number Generator Service', () => {

   beforeEach(() => {
       numberGenerator = new NumberGeneratorProvider();
   });

   it('1-should say hello', () => {
           
           let result = numberGenerator.hello("alaa");
           expect(result).toContain("alaa");
       }
   );
   

   it('2- should return a random number', () => {
           
           let result = numberGenerator.getRandomInt(5,10);
            expect(result).toBeGreaterThan(4);
       }
   );

    it('3- should return sum of 2 numbers', () => {
           
           let result = numberGenerator.add(3,4);
           expect(result).toBe(7);
       }
   );

      it('4-should return true if number is odd', () => {
           
           let result = numberGenerator.is_odd(5);
           expect(result).toBe(true);

           result=numberGenerator.is_odd(8);
           expect(result).toBe(false);

           result=numberGenerator.is_odd('8');
           expect(result).toBe(false);
       }
   );

   it('test char', () => {
          
           let result=numberGenerator.add('5','9')
        
           expect(result).toBe(20);
       }
   );

});
xdescribe("NumberGeneratorProvider", ()=> {
    var calc;
 
    beforeEach(function() {
        calc = new NumberGeneratorProvider();
        spyOn(calc, 'getRandomInt');
    });
 
    xdescribe("when getRandomInt is used to peform basic math operations", function(){
         
        //Test for sum operation
        it("should be able to calculate sum of 3,5  ", function() {
            //call any method
            calc.getRandomInt();
            //verify it got executed
            expect(calc.getRandomInt).toHaveBeenCalled();
            expect(calc.getRandomInt).toHaveBeenCalledWith();
        });
         
           it("should be able to calculate sum of 3 and -", function() {
        
             calc.getRandomInt(3);
            //verify it got executed
            expect(calc.getRandomInt).toHaveBeenCalled();
            expect(calc.getRandomInt).toHaveBeenCalledWith(3);
        });

          it("should be able to calculate sum of '3' and '5' charachters", function() {
        
             calc.getRandomInt('3','5');
            //verify it got executed
            expect(calc.getRandomInt).toHaveBeenCalled();
            expect(calc.getRandomInt).toHaveBeenCalledWith('3','5');
        });
          it("should be able to calculate sum of - ,-", function() {
        
             calc.getRandomInt();
            //verify it got executed
            expect(calc.getRandomInt).toHaveBeenCalled();
            expect(calc.getRandomInt).toHaveBeenCalledWith();
        });
 
 
 
    });
});

***************************************************************************************************************************
explain unit test code 

describe() defines a suite of tests (or “specs”).

it() defines a test or “spec” (it should do that).

expect() defines the expected result of a test

and Matcher -> toBe , isGreaterThan ,.........

to make compiler skip test case but before describe ->x also for it

in the code also exist unit test for home page UI and app page 

_____________________________________________________________________________________________________
RUN UNIT TEST :
_________________________________________
to run test cases write npm test 

to run with test coverage  run "ng test --code-coverage"
that will create folder coverage in it you will find index.html that will contain  test coverage percentage for each
line ,branch ,function and statement
