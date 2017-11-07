//import * as test from './modules/test.js';

import {test1} from './modules/test.js';
//import {test2} from './modules/test.js';


console.log('Script bundle connect!')

setTimeout(() => {
  $.ajax({
    type: 'POST',
    url: '/',
    data: { action: 'test' },
    success: (data) => {
      console.log(data);
    }
  });
}, 1000)

//$.post( "./", { name: "John", time: "2pm" } );

console.log('End script!');

//test.test1(96)
test1(102)
//test2(102)
