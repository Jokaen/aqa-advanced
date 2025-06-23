import axios from 'axios';
import { fetchFromInvalidUrl } from './api';

jest.mock('axios');

test('повертає повідомлення про помилку при невдалому запиті', async () => {
  axios.get.mockRejectedValue(new Error('Network Error'));

  const result = await fetchFromInvalidUrl();

  expect(result).toBe('Request failed');
});