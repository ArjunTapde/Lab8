const formatVolumeIconPath = require('../assets/scripts/main');

describe('Returns correct icon', () => {
    test('for icon level 0 ', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
    
    test('for icon level 1', () => {
        expect(formatVolumeIconPath(25)).toContain('1');
    });

    test('for icon level 2', () => {
        expect(formatVolumeIconPath(50)).toContain('2');
    });

    test('for icon level 3', () => {
        expect(formatVolumeIconPath(75)).toContain('3');
    });
})
