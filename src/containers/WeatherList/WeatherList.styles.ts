import {createStyles, style} from '../../helpers/styles';

export const styles = createStyles({
  wrapper: {
    width: '100%',
    padding: 16,
    gap: 10,
  },
  weatherWrapper: {
    gap: 10,
  },
  text: (currentTheme: {textColor: string}) =>
    style({
      color: currentTheme.textColor,
      textAlign: 'center',
    }),
});
