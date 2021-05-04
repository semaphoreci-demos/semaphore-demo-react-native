/**
 * Mocking all required for react-navigation
 */
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-iphone-x-helper', () => ({
  getStatusBarHeight: jest.fn(),
  getBottomSpace: jest.fn(),
}));

jest.mock('@react-native-community/masked-view', () => ({}));

/* Silence the warning: Animated: `useNativeDriver` is
 * not supported because the native animated module is missing
 */
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

/**
 * Mocking Async Storage
 */
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));
