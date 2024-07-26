function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Always resolve to simulate a successful API response
      if (true) {
        resolve();
      } else {
        reject();
      }
    });
  }
  
  export default getResponseFromAPI;
  