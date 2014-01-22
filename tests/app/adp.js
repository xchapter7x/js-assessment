/*jshint expr:true */
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/adp'
], function(answers) {
  describe('flow control', function() {
    it('should return the argument if it does not meet any divisible criteria', function() {
      expect(answers.fizzBuzz(2)).to.eql(2);
    });
    
    it('should return the argument if it does not meet any divisible criteria', function() {
      expect(answers.fizzBuzz(101)).to.eql(101);
    });
    
    it('should return false when no arguments are passed', function() {
      expect(answers.fizzBuzz()).to.eql(false);
    });
    
    it('should return false when the argument is not an integer', function() {
      expect(answers.fizzBuzz('foo')).to.eql(false);
    });
    
    it('should return fizz if it is 3', function() {
      expect(answers.fizzBuzz(3)).to.eql('fizz');
    });
    
    it('should return fizz if it is a factor of 3', function() {
      expect(answers.fizzBuzz(6)).to.eql('fizz');
    });
    
    it('should return fizz on any random number that is factor of 3', function() {
      var num = 0;

      while (num % 3 === 0 || num % 5 === 0) {
        num = Math.floor(Math.random() * 10) + 1;
      }
      expect(answers.fizzBuzz(num * 3)).to.eql('fizz');
    });
    
    it('should return buzz when value is 5', function() {
      expect(answers.fizzBuzz(5)).to.eql('buzz');
    });
    
    it('should return buzz when value is factor of 5', function() {
      expect(answers.fizzBuzz(10)).to.eql('buzz');
    });
    
    it('should return buzz when argument is any random factor of 5', function() {
      var num = 0;

      while (num % 3 === 0 || num % 5 === 0) {
        num = Math.floor(Math.random() * 10) + 1;
      }
      expect(answers.fizzBuzz(num * 5)).to.eql('buzz');
    });
    
    it('should return fizzbuzz when number is 15', function() {
      expect(answers.fizzBuzz(15)).to.eql('fizzbuzz');
    });
    
    it('should return fizzbuzz when number is any random number which is factor of 3 and 5', function() {
      var num = 0;

      while (num % 3 === 0 || num % 5 === 0) {
        num = Math.floor(Math.random() * 10) + 1;
      }
      expect(answers.fizzBuzz(num * 3 * 5)).to.eql('fizzbuzz');
    });
  });

  describe('recursion', function() {
    var fileData = {
      dir : 'app',
      files : [
        'index.html',
        {
          dir : 'js',
          files: [
            'main.js',
            'app.js',
            'misc.js',
            {
              dir : 'vendor',
              files : [
                'jquery.js',
                'underscore.js'
              ]
            }
          ]
        },
        {
          dir : 'css',
          files : [
            'reset.css',
            'main.css'
          ]
        }
      ]
    };

    it('you should be able to return a list of files from the data', function() {
      var result = answers.listFiles(fileData);
      expect(result.length).to.eql(8);
      expect(result.indexOf('index.html') > -1).to.be.ok;
      expect(result.indexOf('main.js') > -1).to.be.ok;
      expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });

    it('you should be able to return a list of files in a subdir', function() {
      var result = answers.listFiles(fileData, 'js');
      expect(result.length).to.eql(5);
      expect(result.indexOf('main.js') > -1).to.be.ok;
      expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });
  });

  describe('permutation', function() {
    var arr = [ 1, 2, 3, 4 ];
    var answer = [
      [1, 2, 3, 4],
      [1, 2, 4, 3],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [1, 4, 2, 3],
      [1, 4, 3, 2],
      [2, 1, 3, 4],
      [2, 1, 4, 3],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [2, 4, 1, 3],
      [2, 4, 3, 1],
      [3, 1, 2, 4],
      [3, 1, 4, 2],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [3, 4, 1, 2],
      [3, 4, 2, 1],
      [4, 1, 2, 3],
      [4, 1, 3, 2],
      [4, 2, 1, 3],
      [4, 2, 3, 1],
      [4, 3, 1, 2],
      [4, 3, 2, 1]
    ];

    it('you should be able to return the permutations of an array', function() {
      var result = answers.permute(arr);
      var resultStrings = _.map(result, function(r) { return r.join(''); });

      expect(result.length).to.eql(answer.length);

      _.each(answer, function(a) {
        expect(resultStrings.indexOf(a.join('')) > -1).to.be.ok;
      });
    });
  });
});