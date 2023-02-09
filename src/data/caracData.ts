import { coin, darkness, titanBlood, nectar, key } from '../assets/currencies';

interface Data{
    curren:string,
    details:string
}

export const caracData:Data[]= [
    {
        curren:coin,
        details:'Obtén mejoras momentaneas y poderes al recolectar oro.'
    },
    {
        curren: darkness,
        details: 'Mejora tus estadísticas permanentes con el espejo de la noche para tener más chance de escapar.'
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
        details:'Desbloquea secretos y consigue mejores poderes con las llaves ctónicas.'
    }
]