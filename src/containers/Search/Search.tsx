import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {checkWeather} from '../../redux/search/SearchOperations';
import {getInputCity} from '../../redux/search/SearchSelectors';
import {styles} from './Search.styles';

export function Search() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getInputCity);

  const fetch = () => {
    dispatch(checkWeather(city));
  };

  return (
    <View style={styles.container}>
      <Input />
      <Button onPress={fetch}>
        <Text>Find</Text>
      </Button>
    </View>
  );
}
