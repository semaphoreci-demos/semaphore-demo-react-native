/**
 *
 * Icon
 *
 */
import React from 'react';
import {Animated} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export type IconProps = {
  animated?: boolean;
  font?: 'feather';
  name?: string;
  size?: number;
  color?: string;
  [x: string]: unknown;
};

const animatedElements = {
  feather: Animated.createAnimatedComponent(Feather),
};

const normalElements = {
  feather: Feather,
};

const Icon: React.FC<IconProps> = ({
  animated = false,
  font = 'feather',
  ...props
}) => {
  const Element = animated ? animatedElements[font] : normalElements[font];
  return <Element {...props} />;
};

export default Icon;
