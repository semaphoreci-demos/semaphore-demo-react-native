import {StyleSheet} from 'react-native';
import Dimensions from 'theme/Dimensions';
import Colors from 'theme/Colors';

const INPUT_HEIGHT = 44;
const MULTILINE_HEIGHT = 130;

export const inputStyleProps = {
  underlineColorAndroid: Colors.transparent,
  placeholderTextColor: Colors.placeholder,
};

export default StyleSheet.create({
  input: {
    minHeight: INPUT_HEIGHT,
    width: '100%',
    margin: Dimensions.space2x,
    padding: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    color: Colors.textBlack,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'center',
    position: 'relative',
  },
  inputWithLabel: {
    padding: Dimensions.space3x,
  },
  errorInput: {
    borderColor: Colors.errorBackground,
  },
  multiline: {
    height: MULTILINE_HEIGHT,
    paddingTop: Dimensions.space3x,
    textAlignVertical: 'top',
  },
  label: {
    padding: Dimensions.space1x,
    color: Colors.textBlack,
    fontWeight: '600',
    fontSize: 14,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    top: -4,
    zIndex: 1,
    left: 6,
    position: 'absolute',
    backgroundColor: Colors.white,
    borderRadius: Dimensions.borderRadius,
  },
  error: {
    padding: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius,
    color: Colors.errorBackground,
    fontWeight: '600',
    fontSize: 13,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    bottom: 0,
    right: 6,
    backgroundColor: Colors.white,
    position: 'absolute',
    zIndex: 1,
  },
  showPasswordButton: {
    position: 'absolute',
    right: Dimensions.space1x,
    top: Dimensions.inputHeight / 2 - Dimensions.space1x,
    opacity: 0.7,
  },
});
