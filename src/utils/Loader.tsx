import {useLoader} from '@utils/LoaderContext';
import {screenHeight, screenWidth} from '@utils/Scaling';
import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

const Loader = () => {
  const {isLoading} = useLoader();

  if (!isLoading) {
    return null;
  }

  return (
    <Modal transparent visible={isLoading}>
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <View style={[styles.loader]}>
            <View style={styles.indicatorWrapper}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  loaderContainer: {
    borderRadius: 15,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  loader: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
