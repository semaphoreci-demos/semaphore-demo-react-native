import {Dimensions, Platform} from 'react-native';

const window = Dimensions.get('window');
const headerContentHeight = 44;
const statusBarHeight = 44; // : ExtraDimensions.getStatusBarHeight();

const headerHeight = statusBarHeight + headerContentHeight + 12;

const screenHeight = window.height;
const bottomSpacing = Platform.OS === 'ios' ? 40 : 0;

const dim = {
  space1x: 6,
  space2x: 12,
  space3x: 18,
  space4x: 24,
  space5x: 30,
  space6x: 36,
  space8x: 48,
  space10x: 60,
  space12x: 72,

  fontHeading: 18,
  fontInput: 16,
  fontDescription: 14,
  fontCaption: 11,

  borderRadius: 3,

  inputHeight: 44,
  headerContentHeight,
  headerHeight,
  screenWidth: window.width,
  screenHeight,
  statusBarHeight,
  bottomSpacing,
};

export default dim;
