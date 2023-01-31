import { cerberus, dusa, hades, megara, melinoe, skelly, thanatos, zagreus } from "../assets/characters";

interface character {
    img: string;
    name: string;
    occupation: string;
    details: string;
    url?: string;
}

export const characters: character[] = [
    {
        img: zagreus,
        name: 'Zagreus',
        occupation: 'Príncipe del inframundo.',
        details: 'Zagreus es el hijo de Hades y el protagonista de nuestra historia, quien hartó del inframundo intentara escapar y descubriendo que con sus acciones desencadenara eventos que no esperaba.'
    },
    {
        img: hades,
        name: 'Hades',
        occupation: 'Dios de la muerte.',
        details: 'Hades, Dios de la muerte, y padre de Zagreus. Es quien esta acargo de mantener el orden en el inframundo determinando el lugar y el castigo que tendran las almas que llegan al inframundo, y escuchando las peticiones de las sombras que llegan ante el.'
    },
    {
        img: megara,
        name: 'Megaera',
        occupation: 'La primera de las 3 Erinias.',
        details: 'Megera es una de las tres erinias. Fue enviada por Hades para detener a Zagreo en sus intentos por escapar del Inframundo. Zagreo tendrá que derrotarla par poder salir del Tártaro y llegar a los Asfódelos en cualquier tentativa de huida del juego.'
    },
    {
        img: cerberus,
        name: 'Cerbero',
        occupation: 'Sabueso del infierno/Mascota.',
        details: 'Cerbero es un perro enorme de tres cabezas que se encarga de proteger las puertas del Inframundo, impidiendo que las almas de su interior escapen. Es una bestia magnífica, y un gran compañero tanto para Hades como para Zagreo.'
    },
    {
        img: dusa,
        name: 'Dusa',
        occupation: 'Ama de llaves de Hades.',
        details: 'Dusa es una de las sombras presentes en el juego, que tiene la forma de una cabeza de gorgona flotante y sin cuerpo. Trabaja como ama de llaves de la morada de Hades, constantemente flotando y limpiando todas las estancias.'
    },
    {
        img: thanatos,
        name: 'Thanatos',
        occupation: 'La muerte encarnada.',
        details: 'Es la personificación de la muerte. Como la mismísima encarnación de la Muerte, Tánatos tiene varias tareas que cumplir, que le obligan a ir y venir del mundo de los mortales.'
    },
    {
        img: skelly,
        name: 'Skelly',
        occupation: 'Muñeco de entrenamiento.',
        details: 'Es un "Empleado" que fue contratado por un benefactor secreto para ser el muñeco de entrenamiento de Zagreus, es alguien con muchos secretos, pero con quien se puede contar, en especial cuando quieres desahogarte.'
    },
    {
        img:melinoe,
        name:'Melinoë',
        occupation:'Princesa del inframundo.',
        details:'La princesa del inframundo, hija de Hades y hermana menor de Zagreus, es la protagoniste de la secuela de Hades, Hades II.',
        url:'https://www.supergiantgames.com/games/hades-ii/'
    }

]