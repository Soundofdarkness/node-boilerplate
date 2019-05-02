/**
 * Example test, can safely be removed :)
 */

import { expect } from 'chai';
import { aya } from '../src/example';

describe('Example test', () => {
    describe('Aya function', () => {
        it('should say Ayaya!', () => {
            const str = aya();
            expect(str).equal('Ayaya!');
        });
    });
});
