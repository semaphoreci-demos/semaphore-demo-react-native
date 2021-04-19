import React from 'react';
import {
  View,
  Platform,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
  ViewProps,
} from 'react-native';

const AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedNative = Animated.createAnimatedComponent(
  TouchableNativeFeedback,
);
const RIPPLE = Platform.OS === 'android' && Platform.Version >= 21;

export interface TouchFeedbackProps extends ViewProps {
  ripple?: boolean;
  animated?: boolean;
  onPress: (...args: unknown[]) => void;
  testID?: string;
}

const TouchFeedback: React.FC<TouchFeedbackProps> = ({
  children,
  animated = false,
  ...props
}) => {
  let Component: any = RIPPLE ? TouchableNativeFeedback : TouchableOpacity;
  let NativeChild: any = View;
  if (animated) {
    Component = RIPPLE ? AnimatedNative : AnimatedOpacity;
    if (RIPPLE) {
      NativeChild = Animated.View;
    }
  }
  if (RIPPLE) {
    return (
      <Component {...props}>
        <NativeChild style={props.style}>{children}</NativeChild>
      </Component>
    );
  }
  return <Component {...props}>{children}</Component>;
};
export default TouchFeedback;
