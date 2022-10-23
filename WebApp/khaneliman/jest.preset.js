const nxPreset = require('@nrwl/jest/preset');

module.exports = {
    ...nxPreset,
    testEnvironment: 'jest-environment-jsdom'
};
