import axios from 'axios';
import { fetchWithHeadersAndParams } from './api';

jest.mock('axios');

test('відправляє запит з правильними заголовками та параметрами', async () => {
  axios.get.mockResolvedValue({ data: 'mocked data' });

  await fetchWithHeadersAndParams();

  expect(axios.get).toHaveBeenCalledWith('https://example.com/data', {
    headers: {
      'Authorization': 'Bearer test-token',
      'Custom-Header': 'MyHeaderValue'
    },
    params: {
      userId: 123,
      status: 'active'
    }
  });
});
