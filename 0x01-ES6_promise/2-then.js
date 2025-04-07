/* eslint-disable */
export default function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve, reject) => {
    const success = 'Got a response from the API';
    resolve({
      status: 200,
      body: success,
    });
    reject(new Error());
  });
  return myPromise
    .then((response) => {})
    .catch((err) => {})
    .finally(() => {
      console.log('Got a response from the API');
      });
}
