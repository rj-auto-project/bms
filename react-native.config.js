module.exports = {
  project: {
    ios: {},
    android: {},
  },
  'react-native-vector-icons': {
    platforms: {
      ios: null,
    },
  },
  assets: ['./src/assets/fonts/'],
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer'); //tells React Native which module to use for transforming the source code.
  },
  getSourceExts() {
    return ['ts', 'tsx']; //to tell React Native’s Metro bundler that TypeScript files should be treated as part of the source code.
  },
};
