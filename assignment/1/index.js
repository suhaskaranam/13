
function outerFunction(outerParam) {
    let outerVariable = "I'm from outer";
  
    function innerFunction(innerParam) {
      console.log(`Outer Param: ${outerParam}`);
      console.log(`Outer Variable: ${outerVariable}`);
      console.log(`Inner Param: ${innerParam}`);
    }
  
    return innerFunction;
  }
  
  const innerFunc = outerFunction("Hello");
  innerFunc("World");
  