/**
 *
 * IconButton
 *
 */
import React from 'react';
import {StyleSheet} from 'react-native';
import TouchFeedback from 'theme/TouchFeedback';

import Colors from 'theme/Colors';
import Icon, {IconProps} from 'theme/Icon';

const style = StyleSheet.create({
  iconButton: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  disabled: {
    opacity: 0.7,
  },
  icon: {
    fontSize: 18,
    color: Colors.textBlack,
  },
  primaryButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.separator,
  },
  accentButton: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
  },
  tertiaryButton: {
    backgroundColor: Colors.tertiary,
    borderColor: Colors.tertiary,
  },
  primaryForeground: {
    color: Colors.textBlack,
  },
  accentForeground: {
    color: Colors.accentReverse,
  },
  tertiaryForeground: {
    color: Colors.tertiaryReverse,
  },
});

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

type IconButtonProps = {
  onPress: (...args: unknown[]) => void;
  disabled?: boolean;
  type?: 'primary' | 'accent';
  icon?: IconProps;
  testID: string;
};

const IconButton: React.FC<IconButtonProps> = props => {
  const {onPress, disabled, type = 'primary'} = props;
  return (
    <TouchFeedback
      onPress={!disabled ? onPress : () => undefined}
      style={[
        style.iconButton,
        typeBackground[type],
        disabled ? style.disabled : null,
      ]}
      testID={props.testID}>
      <Icon style={[style.icon, typeForeground[type]]} {...props.icon} />
    </TouchFeedback>
  );
};

export default IconButton;
