/**
 *
 * Text
 *
 */

import React from 'react';
import {Animated, Text as RNText, StyleSheet} from 'react-native';
import Colors from 'theme/Colors';

const defaultStyle = StyleSheet.create({
  fontFamily: {
    // fontFamily: 'Montserrat',
    backgroundColor: Colors.transparent,
  },
});

export interface TextProps {
  animated?: boolean;
  testID?: string;
  [key: string]: unknown;
}

const Text: React.FC<TextProps> = ({
  animated = false,
  style: componentStyles = {},
  ...props
}) => {
  const Component = animated ? Animated.Text : RNText;
  let style = [defaultStyle.fontFamily];
  if (componentStyles && Array.isArray(componentStyles)) {
    style = style.concat(componentStyles);
  } else if (componentStyles) {
    style.push(componentStyles);
  }
  return <Component style={style} {...props} />;
};

export default Text;
