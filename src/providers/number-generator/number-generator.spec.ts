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