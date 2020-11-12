// Debounce rates limits a function. Can only be called after one second. 

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        // apply keeps track of how many arguments we pass through
        func.apply(null, args);
      }, delay);
    };
  };