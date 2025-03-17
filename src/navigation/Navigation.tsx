import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@utils/NavigationUtils';
import { CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from '@features/home/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'none',
          animationDuration: 200,
          animationTypeForReplace: 'push',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          presentation: 'card',
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 200,
                useNativeDriver: true,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 200,
                useNativeDriver: true,
              },
            },
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
