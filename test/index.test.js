/* global it, describe */
const assert = require('assert');

describe('Test files', () => {

    describe('copying the files', () => {
        it('should created test directory', async () => {
            assert.doesNotThrow(async () => {
                console.log('copying files...');
                require('../index');
            }, 'Did not throw an error');
        });
    });

});
