import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: (currentTheme: {containerBackgroundColor: string}) => ({
    gap: 10,
    flex: 1,
    backgroundColor: currentTheme.containerBackgroundColor,
    alignItems: 'center',
    paddingTop: 50,
  }),
});
