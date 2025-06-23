import axios from 'axios';

export async function fetchUserData(userId) {
  try {
    const response = await axios.get(`https://api.example.com/users/${userId}`);
    return response.data;
  } catch (error) {
    return { error: 'Failed to fetch user data' };
  }
}