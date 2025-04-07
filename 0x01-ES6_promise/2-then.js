/* eslint-disable */
export default function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'success',
    });
  });
  return myPromise
    .then(() => {})
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
      });
}
