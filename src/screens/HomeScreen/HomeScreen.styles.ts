import {createStyles, style} from '../../helpers/styles';

export const styles = createStyles({
  wrapper: (currentTheme: {containerBackgroundColor: string}) =>
    style({
      gap: 10,
      flex: 1,
      backgroundColor: currentTheme.containerBackgroundColor,
      alignItems: 'center',
      paddingTop: 50,
    }),
});
