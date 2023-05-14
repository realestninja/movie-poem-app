const API_URL = "https://serverless-movie-poem-api.nikhil-nawgiri9738.workers.dev";

export const fetchPoemFromApi = async({ payload, setter }) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const jsonResponse = await response.json();
    setter(jsonResponse.poem);
  } catch (error) {
    console.log(error);
  }
}
