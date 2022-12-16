import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PopularScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Pagina3Screen</Text>
      {/* <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a la Pagina 1" onPress={() => navigation.popToTop()} /> */}
    </View>
  );
};

export default PopularScreen;
