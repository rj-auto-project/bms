import { StatusBar } from 'react-native';
import React, { useMemo } from 'react';
// import SplashScreen from 'react-native-splash-screen';
import Navigation from '@navigation/Navigation';
import { Colors } from '@utils/Constants';
import { ErrorProvider } from '@utils/ErrorModelContext';
import { LoaderProvider } from '@utils/LoaderContext';
import { ModalProvider } from '@ui/ActionModel';

const App = () => {


  const isDarkMode = useMemo(() => false, []);


  // useEffect(() => {
  //   SplashScreen.hide()
  // }, []);


  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.primary}
      />
      <ModalProvider>
        <ErrorProvider>
          <LoaderProvider>
            <Navigation />
          </LoaderProvider>
        </ErrorProvider>
      </ModalProvider>
    </>
  );
};

export default App;
