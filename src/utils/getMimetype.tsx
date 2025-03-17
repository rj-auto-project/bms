import mime from 'react-native-mime-types';

export const getMimeType = (uri: string) => {
  const extension = uri.split('.').pop() || '';
  return mime.lookup(extension) || 'application/octet-stream';
};
