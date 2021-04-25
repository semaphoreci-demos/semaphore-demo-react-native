import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    margin: Dimensions.space2x,
    marginTop: Dimensions.space4x,
  },
  selectedItemContainer: {
    flexDirection: 'row',
    padding: Dimensions.space1x,
    paddingVertical: Dimensions.space2x,
    alignItems: 'center',
    width: Dimensions.screenWidth - Dimensions.space4x,
    backgroundColor: Colors.white,
    margin: Dimensions.space2x,
  },
  selectedItemName: {
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  selectedItemCancelButton: {
    position: 'absolute',
    right: 0,
  },
});

export default style;
