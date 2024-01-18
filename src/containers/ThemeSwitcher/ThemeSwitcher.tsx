import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components/Button';

type ThemeSwitcherProps = {
  isLightTheme: boolean;
  toggleSwitch: () => void;
};

export function ThemeSwitcher({
  toggleSwitch,
  isLightTheme,
}: ThemeSwitcherProps) {
  return (
    <View>
      <Button onPress={toggleSwitch}>
        {isLightTheme ? <Text>Dark</Text> : <Text>Light</Text>}
      </Button>
    </View>
  );
}
