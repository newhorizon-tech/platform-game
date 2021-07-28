const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = '7hsIOFyM8wCRRz2t0kda';

const url = `${api}games/${gameId}/scores`;

async function getData() {
  const response = await fetch(url);
  return response.json();
}

async function postData(data) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export { api, getData, postData };
