import { expect, device, element, by } from 'detox';

const COUNTRY_NAME = 'Serbia';
const OTHER_COUNTRY_NAME = 'United States';

describe('Select Country', () => {
  /**
   * Check for UI
   */
  it('should show app search screen button', async () => {
    await expect(element(by.id('searchButton'))).toBeVisible();
  });

  /**
   * Verify navigation
   */
  it('should navigate to search screen', async () => {
    await element(by.id('searchButton')).tap();
    await expect(element(by.id('searchScreen'))).toBeVisible();
  });

  /**
   * Search & Select
   */
  it('should search & select country', async () => {
    await element(by.id('countriesAutocompleteInput')).typeText(COUNTRY_NAME);
    await element(by.id(`listItem-${COUNTRY_NAME}`)).tap();
    await expect(element(by.id('selectedItem'))).toBeVisible();
  });

  /**
   * Relaunch app & verify saved data
   */
  it('should show selected country on next launch', async () => {
    await device.reloadReactNative();
    await element(by.id('searchButton')).tap();
    await expect(element(by.id('selectedItemName'))).toHaveLabel(COUNTRY_NAME);
  });

  /**
   * Remove selected item
   */
  it('should remove selected country on press', async () => {
    await element(by.id('selectedItem')).tap();
    await expect(element(by.id('countriesAutocompleteInput'))).toBeVisible();
  });

  /**
   * Re-Iterate selection and removal
   */
  it('should select & remove country again', async () => {
    await element(by.id('countriesAutocompleteInput')).typeText(
      OTHER_COUNTRY_NAME,
    );
    await element(by.id(`listItem-${OTHER_COUNTRY_NAME}`)).tap();
    await expect(element(by.id('selectedItemName'))).toHaveLabel(
      OTHER_COUNTRY_NAME,
    );
    await element(by.id('selectedItem')).tap();
    await expect(element(by.id('countriesAutocompleteInput'))).toBeVisible();
  });

  /**
   * Relaunch app & verify data is removed
   */
  it('should persist removal of country on next launch', async () => {
    await device.reloadReactNative();
    await element(by.id('searchButton')).tap();
    await expect(element(by.id('countriesAutocompleteInput'))).toBeVisible();
  });
});
