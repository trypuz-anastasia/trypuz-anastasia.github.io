function fibonacci(n) {
    'use strict';
  
  var a=0,
      b=1,
      c;
      
      for (var i=2; i <= n; i++) {
        c = a+b;
        a = b;
        b = c;
      }
      return c;
}

console.log(fibonacci(50));
