const findKey = function(object, callback) {
 
  for (let key in object) {
        
    if (callback(object[key])) {
      console.log(key);
      return key;
    }
  }
      
};

module.exports = findKey;