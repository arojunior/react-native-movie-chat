import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from './common/infrastructure/constants';
import MovieList from './screens/Home/MovieList';
import MovieChat from './screens/Chat/MovieChat';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.HOME} component={MovieList} />
        <Stack.Screen name={SCREENS.CHAT} component={MovieChat} options={({ route }: any) => ({ title: route.params.movie.title })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
