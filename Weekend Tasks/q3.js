function test_prime(n){
    if (n===1) {
      return "NOT PRIME";
    }else if(n === 2){
      return "PRIME";
    }else{
      for(var x = 2; x < n; x++){
        if(n % x === 0){
          return "NOT PRIME";
        }
      }
      return "PRIME";  
    }
  }
  var array1 = [1, 2, 3, 4, 5, 6]
  for (i = 0; i < array1.length; i += 1) {
    console.log(array1[i]);    
  console.log(test_prime(array1[i]));
  }
  