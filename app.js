function steamrollArray(arr) {
    var flatten = function(arg) {
        if (!Array.isArray(arg)) {
          flattenedArray.push(arg);
        } else {
          for (var a in arg) {
            flatten(arg[a]);
          }
        }
      };
    
      // Call the function for each element in the array
      arr.forEach(flatten);
      return flattenedArray;
    }
  
  
  steamrollArray([1, [2], [3, [[4]]]]);



  function sumFibs(num) {
    function sumFibs(num) {
        var prevNumber = 0;
        var currNumber = 1;
        var result = 0;
        while (currNumber <= num) {
          if (currNumber % 2 !== 0) {
            result += currNumber;
          }
      
          currNumber += prevNumber;
          prevNumber = currNumber - prevNumber;
        }
      
        return result;
  }
  
  sumFibs(4);


  function dropElements(arr, func) {
    var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
  }
  }
  