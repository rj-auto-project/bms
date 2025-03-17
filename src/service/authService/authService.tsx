import {tokenStorage} from '@state/storage';
import axios from 'axios';
import {BASE_URL} from '../apiService/config';
import {resetAndNavigate} from '@utils/NavigationUtils';

const storeTokens = async (accessToken: string, refreshToken: string) => {
  tokenStorage.set('accessToken', accessToken);
  tokenStorage.set('refreshToken', refreshToken);
};

export const refresh_token = async () => {
  try {
    const refreshToken = tokenStorage.getString('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token found');
    }
    console.log('reqested for refresh token');
    const {data} = await axios.post(`${BASE_URL}/auth/refresh-token`, {
      refreshToken,
    });

    await storeTokens(data.accessToken, data.refreshToken);
    return data.accessToken;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('REFRESH TOKEN ERROR:', error.response?.data || error);
    } else {
      console.error('REFRESH TOKEN ERROR:', error);
    }
    tokenStorage.clearAll();
    resetAndNavigate('Home');
  }
};

