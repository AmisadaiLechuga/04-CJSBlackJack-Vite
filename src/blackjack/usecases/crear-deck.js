import _ from 'underscore';

///export const miNombre = 'Amisadai';  ///Exportacion Idividual

////const crearDeck = (tiposDeCarta, tiposEspeciales) => {  //EXportacion por defecto
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {  //EXportacion individual

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