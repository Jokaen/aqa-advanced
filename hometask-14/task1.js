import axios from 'axios';

export async function fetchFromInvalidUrl() {
  try {
    const response = await axios.get('https://invalid.url.404/test');
    return response.data;
  } catch (error) {
    return 'Request failed';
  }
}