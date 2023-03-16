function receivesAFunction(callback) {
    callback();
  }




  function returnsANamedFunction() {
    return function named(){
      
    }
  }

function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function.");
  };
}