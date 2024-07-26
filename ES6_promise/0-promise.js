function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulating a successful response

    if (success) {
      resolve('Success');
    } else {
      reject(new Error('Failed'));
    }
  });
}

export default getResponseFromAPI;
