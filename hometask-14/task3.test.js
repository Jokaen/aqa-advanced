import axios from 'axios';
import { fetchUserData } from './api';

jest.mock('axios');

describe('fetchUserData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('повертає дані користувача при успішному запиті', async () => {
    const mockData = { id: 1, name: 'John Doe' };

    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchUserData(1);

    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/1');
    expect(result).toEqual(mockData);
  });

  test('повертає повідомлення про помилку при невдалому запиті', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));

    const result = await fetchUserData(2);

    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/2');
    expect(result).toEqual({ error: 'Failed to fetch user data' });
  });
});
