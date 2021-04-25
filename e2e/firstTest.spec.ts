import {expect, device, element, by} from 'detox';

describe('HomeScreen UI', () => {
  /**
   * beforeEach
   */
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  /**
   * Most basic test
   */
  it('should show app screen text', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
    element(by.id('homeScreen')).scroll(200, 'down');
    await expect(element(by.text('See Your Changes'))).toBeVisible();
  });

  /**
   * Tests toggle behavior
   */
  it('should show switch and toggle it on', async () => {
    const isAndroid = device.getPlatform() === 'android';

    await expect(element(by.id('toggle'))).toBeVisible();
    if (!isAndroid) {
      await expect(element(by.id('toggle'))).toHaveValue('0');
      await element(by.id('toggle')).longPress();
      await expect(element(by.id('toggle'))).toHaveValue('1');
    }
  });
});
