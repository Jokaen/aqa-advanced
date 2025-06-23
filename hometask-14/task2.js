import axios from 'axios';

export async function fetchWithHeadersAndParams() {
  const headers = {
    'Authorization': 'Bearer test-token',
    'Custom-Header': 'MyHeaderValue'
  };

  const params = {
    userId: 123,
    status: 'active'
  };

  return axios.get('https://example.com/data', {
    headers,
    params
  });
}