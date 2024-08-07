import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/Button';
import {useAppDispatch} from '../../redux/hooks';
import {setDays} from '../../redux/search/SearchSlice';
import {styles} from './Menu.styles';

export function Menu() {
  const dispatch = useAppDispatch();

  const setDaysAmount = (days: number) => {
    dispatch(setDays(days));
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setDaysAmount(1)}>
        <Text>Today</Text>
      </Button>
      <Button onPress={() => setDaysAmount(2)}>
        <Text>2 days</Text>
      </Button>
      <Button onPress={() => setDaysAmount(3)}>
        <Text>3 days</Text>
      </Button>
    </View>
  );
}
