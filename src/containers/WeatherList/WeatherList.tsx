import React from 'react';
import {View, Text, ActivityIndicator, Alert, ScrollView} from 'react-native';
import {WeatherListItem} from './WeatherListItem';
import {
  getCity,
  getDays,
  getError,
  getIsLoading,
  getWeather,
} from '../../redux/search/SearchSelectors';
import {useAppSelector} from '../../redux/hooks';
import {styles} from './WeatherList.styles';

export function WeatherList({currentTheme}: Theme) {
  const data = useAppSelector(getWeather);
  const city = useAppSelector(getCity);
  const days = useAppSelector(getDays);
  const isLoading = useAppSelector(getIsLoading);
  const error = useAppSelector(getError);

  const filteredForecast = () => {
    const newArr = data.slice();
    return newArr.splice(0, days);
  };

  if (error) {
    Alert.alert('Something went wrong');
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <View style={styles.weatherWrapper}>
        {data.length > 0 && !error && (
          <>
            <Text style={styles.text(currentTheme)}>Forecast for {city}</Text>
            {filteredForecast().map(item => {
              return (
                <WeatherListItem
                  key={item.date}
                  data={item}
                  currentTheme={currentTheme}
                />
              );
            })}
          </>
        )}
      </View>
    </ScrollView>
  );
}
