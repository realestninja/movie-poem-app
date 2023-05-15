import { POEM_API_URL } from "../../config";

export const fetchPoemFromApi = async({ payload, setter, signal }) => {
  try {
    const response = await fetch(POEM_API_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      signal,
    });
    const jsonResponse = await response.json();
    setter(jsonResponse.poem);
  } catch (error) {
    console.log(error);
  }
}
