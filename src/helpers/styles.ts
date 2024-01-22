/* eslint-disable @typescript-eslint/no-shadow */
import {
  ImageStyle,
  Platform,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

const type = Symbol('type');

type AnyFunction = (...args: any[]) => any;

type AnyStyle = ViewStyle | TextStyle | ImageStyle;

type NamedStyles<T> = {
  [P in keyof T]: T[P] extends AnyFunction
    ? (...args: never[]) => AnyStyle & {[type]: 'style'}
    : AnyStyle;
};

export function flatten<T>(style?: StyleProp<T>) {
  return (style ? StyleSheet.flatten(style) : {}) as T extends (infer U)[]
    ? U
    : T;
}

export function when<T extends AnyStyle>(
  condition: boolean | undefined,
  style: T | AnyStyle,
) {
  return (condition ? style : {}) as T | {};
}

export function style<T extends AnyStyle>(style: T | AnyStyle) {
  return style as T & {[type]: 'style'};
}

export function createStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | NamedStyles<T>,
) {
  return styles as T;
}

export function androidStyle<T extends AnyStyle>(style: T | AnyStyle) {
  return when(Platform.OS === 'android', style);
}

export function iosStyle<T extends AnyStyle>(style: T | AnyStyle) {
  return when(Platform.OS === 'ios', style);
}
