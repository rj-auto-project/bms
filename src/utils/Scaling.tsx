import {Dimensions, Platform, StatusBar} from 'react-native';

export const screenHeight: number = Dimensions.get('window').height;
export const screenWidth: number = Dimensions.get('window').width;

const DEFAULT_ANDROID_STATUS_BAR_HEIGHT = 0;

export const statusBarHeight: number =
  Platform.OS === 'android'
    ? StatusBar.currentHeight ?? DEFAULT_ANDROID_STATUS_BAR_HEIGHT
    : 0;
