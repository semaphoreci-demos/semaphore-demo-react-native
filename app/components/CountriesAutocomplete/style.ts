import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  selectedItemContainer: {
    margin: Dimensions.space2x,
    marginTop: Dimensions.space1x,
    flexDirection: 'row',
  },
  autocompleteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: Dimensions.space2x,
  },
  input: {
    marginHorizontal: 0,
    opacity: 1,
    width: '100%',
  },
  inputCloseBtnHolder: {
    backgroundColor: Colors.translucentBlackMinor,
    height: 36,
    width: 36,
    borderRadius: 20,
    position: 'absolute',
    right: 16,
  },
  inputCloseBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResult: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: Dimensions.space1x,
  },
  listContainer: {
    zIndex: 1000,
    width: '100%',
    paddingHorizontal: Dimensions.space2x,
  },
  listItemContainer: {
    flexDirection: 'row',
    padding: Dimensions.space1x,
    paddingVertical: Dimensions.space2x,
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.white,
    marginVertical: Dimensions.space1x,
  },
  listItemName: {
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
});

export default style;
