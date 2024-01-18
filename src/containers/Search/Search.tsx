import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {search} from '../../redux/search/SearchOperations';
import {getInputCity} from '../../redux/search/SearchSlice';
import {styles} from './Search.styles';

export function Search() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getInputCity);

  const fetch = () => {
    dispatch(search(city));
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
