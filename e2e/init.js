const detox = require('detox');
const adapter = require('detox/runners/jest/adapter');
const specReporter = require('detox/runners/jest/specReporter');

const config = require('../.detoxrc.js');

// Set the default timeout
jest.setTimeout(1000000);
jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.
jasmine.getEnv().addReporter(specReporter);

/**
 * beforeAll
 * This will be executed before our testing begins,
 * We have initialized detox with our configs here.
 */
beforeAll(async () => {
  await detox.init(config);
});

/**
 * beforeEach
 * This will be executed before each of our tests suite,
 * It can be used for several cleanup tasks.
 */
beforeEach(async () => {
  await adapter.beforeEach();
});

/**
 * afterAll
 * This will be executed after all of our tests suite,
 * Here we have add detox cleanup to.
 */
afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
