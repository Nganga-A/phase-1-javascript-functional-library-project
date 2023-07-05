function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
      result.push(callback(item));
    });
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    if (Array.isArray(collection)) {
      // Array case
      let accumulator = initialValue !== undefined ? initialValue : collection[0];
      const startIndex = initialValue !== undefined ? 0 : 1;
  
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
  
      return accumulator;
    } else if (typeof collection === 'object' && collection !== null) {
      // Object case
      let accumulator = initialValue !== undefined ? initialValue : Object.values(collection)[0];
      const keys = Object.keys(collection);
      const startIndex = initialValue !== undefined ? 0 : 1;
  
      for (let i = startIndex; i < keys.length; i++) {
        const key = keys[i];
        accumulator = callback(accumulator, collection[key], collection);
      }
  
      return accumulator;
    } else {
      throw new TypeError('Invalid collection type');
    }
  }
  
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
  
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    } else {
      throw new TypeError('Invalid collection type');
    }
  
    return undefined;
  }
  
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }
  
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  function arraysEqual(arrA, arrB) {
    if (arrA.length !== arrB.length) return false;
    for (let idx = 0; idx < arrA.length; idx++) {
      if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
        if (!arraysEqual(arrA[idx], arrB[idx])) {
          return false;
        }
      } else if (arrA[idx] !== arrB[idx]) {
        return false;
      }
    }
    return true;
  }
  
  function objectsEqual(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  }
  