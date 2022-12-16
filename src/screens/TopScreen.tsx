import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {styles} from '../theme/appTheme';

export const TopScreen = () => {
  const navigator = useNavigation();

  return (
    <View>
      <Text>Pagina2Screen</Text>
      {/* <Button
        title="Ir a pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      /> */}
    </View>
  );
};

export default TopScreen;
