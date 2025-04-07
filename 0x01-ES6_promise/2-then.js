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
  myPromise.then((response) => {
    console.log(response);
  });
}
