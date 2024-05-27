import _ from 'underscore';

///export const miNombre = 'Amisadai';  ///Exportacion Idividual

////const crearDeck = (tiposDeCarta, tiposEspeciales) => {  //EXportacion por defecto
    /**
     * Esta funcion crea un nuevo deck
     * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
     * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
     * @returns {Array<String>} retorna un nuevo deck de cartas
     */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {  //EXportacion individual


    
    if ( !tiposDeCarta || tiposDeCarta.length === 0) 
    throw new Error('tiposDeCarta es obliatorio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0) 
    throw new Error('tiposEspeciales es obliatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

////export default crearDeck;   //esta parte tambien se añade para la exportacion por defecto