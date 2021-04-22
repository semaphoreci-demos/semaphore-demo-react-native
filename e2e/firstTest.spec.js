describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show app screen text', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
    element(by.id('homeScreen')).scroll(200);
    await expect(element(by.text('See Your Changes'))).toBeVisible();
  });

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
