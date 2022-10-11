import { getCharacters } from '../../src/helpers/getCharacters';


describe('Pruebas fetchCharacters', () => {
    
    test('getCharacters debe de retornar un arreglo de todos los personajes', (done) => {
        
        const type = 'All';
        getCharacters( type )
            .then( character => {
                expect(typeof character).toBe('object')

                done();
            });
        
    });
    test('getCharacters debe de retornar un arreglo del staff', (done) => {
        
        const type = 'Staff';
        getCharacters( type )
            .then( character => {
                expect(typeof character).toBe('object')

                done();
            });
        
    });
    test('getCharacters debe de retornar un arreglo de los estudiantes', (done) => {
        
        const type = 'Students';
        getCharacters( type )
            .then( character => {
                expect(typeof character).toBe('object')

                done();
            });
        
    });

});