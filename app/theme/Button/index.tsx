/**
 *
 * Button
 *
 */
import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import Text from 'theme/Text';
import TouchFeedback, {TouchFeedbackProps} from 'theme/TouchFeedback';

import style from './style';

const typeBackground = {
  primary: style.primaryButton,
  accent: style.accentButton,
  tertiary: style.tertiaryButton,
};
const typeForeground = {
  primary: style.primaryForeground,
  accent: style.accentForeground,
  tertiary: style.tertiaryForeground,
};

interface ButtonProps extends TouchFeedbackProps {
  onPress: (...args: unknown[]) => void;
  label: string | React.ReactNode;
  mini?: boolean;
  flex?: boolean;
  type?: 'primary' | 'accent' | 'tertiary';
  disabled?: boolean;
  large?: boolean;
  testID: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  disabled = false,
  onPress,
  testID,
  ...props
}) => {
  const animatedValue = useRef(new Animated.Value(disabled ? 0.5 : 1)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: disabled ? 0.5 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue, disabled]);

  return (
    <TouchFeedback
      animated
      testID={testID}
      onPress={onPress}
      style={[
        style.button,
        props.large ? style.large : {},
        props.flex ? style.flex : {},
        {
          opacity: animatedValue,
          ...typeBackground[type],
        },
      ]}>
      <Text
        style={[
          style.label,
          typeForeground[type],
          props.large ? style.largeLabel : {},
        ]}
        numberOfLines={2}>
        {props.label}
      </Text>
    </TouchFeedback>
  );
};

export default Button;
