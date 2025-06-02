function textDelay(text, delay) {
    setTimeout(() => {
      console.log(text);
    }, delay);
  }
  
  textDelay("Hello, Peter", 3000);