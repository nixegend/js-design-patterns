var mySingleton = (function () {
  // Instance stores a reference to the Singleton
  var instance = null;

  // Singleton
  function init() {
    // Private methods and variables
    function _privateMethod() {
      console.log("private method");
    }

    var _privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicProp: 9,
      publicMethod: function () {
        console.log("The public method");
      },
      getRandomNumber: function () {
        return _privateRandomNumber;
      }
    }
  };

  return {
    // get the singleton instance if exists or create one
    getInstance: function () {
      if (!instance) instance = init();
      return instance;
    }
  };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

// _privateRandomNumber = Math.random();
var numA = singleA.getRandomNumber();
var numB = singleB.getRandomNumber();

console.log(numA === numB); // true