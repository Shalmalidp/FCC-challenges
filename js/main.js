import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

console.log('Hello, World');


function reverseString(str) {
  var arr1 = str.split("");
  var arrRev = arr1.reverse();
  
  str = arrRev.join("");
  console.log(str);
  return str;
}

reverseString("hello");
