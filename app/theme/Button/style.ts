import {StyleSheet} from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  button: {
    padding: Dimensions.space2x / 1.5,
    margin: Dimensions.space1x,
    borderRadius: Dimensions.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  large: {
    padding: Dimensions.space2x,
    paddingHorizontal: Dimensions.space2x,
  },
  flex: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: Colors.transparent,
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
  noBackgroundLabel: {
    color: Colors.textGrey,
  },
  noBackground: {
    backgroundColor: Colors.transparent,
  },
  greyButtonLabel: {
    color: Colors.textBlack,
  },
  disabled: {
    opacity: 0.5,
  },
  enabled: {
    opacity: 1,
  },
  icon: {
    fontSize: 14,
  },
  largeIcon: {
    fontSize: 18,
  },
  image: {
    width: 18,
    height: 18,
  },
  label: {
    fontSize: 14,
    color: Colors.textBlack,
    fontWeight: '500',
    marginHorizontal: Dimensions.space1x,
    textAlign: 'center',
  },
  largeLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});
export default style;
