import { coin, darkness, titanBlood, nectar, key } from '../assets/currencies';

interface Data{
    curren:string,
    details:string
}

export const caracData:Data[]= [
    {
        curren:coin,
        details:'Obtén mejoras y poderes al recolectar oro.'
    },
    {
        curren: darkness,
        details: 'Obtén mejoras permanentes para tener más chanés de escapar.'
    },
    {
        curren: titanBlood,
        details: 'Mejora y desbloquea nuevas armas con la sangre titánica.'
    },
    {
        curren: nectar,
        details: 'Construye relaciones con exponentes de la mitología griega.'
    },
    {
        curren: key,
        details:'Desbloquea nuevas mejoras y consigue mejores poderes.'
    }
]