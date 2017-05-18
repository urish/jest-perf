const md5 = require('md5');

describe('md5', function() {
    it('should calculate md5 correctly', function() {
        expect(md5('hello world')).toBe('5eb63bbbe01eeed093cb22bb8f5acdc3');
    });
});
