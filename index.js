// Collections Functions (Array or Object)

const arrayOrObject = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
  const myEach = (collection, callback) => {
    const newCollection = arrayOrObject(collection);
  
    for (let i = 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }
  
    return collection;
  }
  
  const myMap = (collection, callback) => {
    const newCollection = arrayOrObject(collection);
  
    const newArr = [];
  
    for (let i = 0; i < newCollection.length; i++) {
      newArr.push(callback(newCollection[i]));
    }
  
    return newArr;
  }
  
  const myReduce = (collection, callback, acc) => {
    let newCollection = arrayOrObject(collection);

    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
  const myFind = (collection, predicate) => {
    const newCollection = arrayOrObject(collection);
  
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) return newCollection[i];
    }
  
    return undefined;
  }
  
  const myFilter = (collection, predicate) => {
    const newCollection = arrayOrObject(collection);
  
    const newArr = [];
  
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) newArr.push(newCollection[i]);
    }
  
    return newArr;
  }
  
  const mySize = (collection) => {
    const newCollection = arrayOrObject(collection);
    return newCollection.length;
  }
  
  // Array Functions
  
  const myFirst = (arr, stop=false) => {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  
  const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }
  //   // Object Functions
  
  const myKeys = (obj) => {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
  const myValues = (obj) => {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }