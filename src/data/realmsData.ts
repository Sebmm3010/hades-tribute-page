import { imgA1, imgE1, imgT2, imgTS3 } from "../assets/realms";
import { Realms } from "../interfaces";
export const realmsData:Realms[] = [
    {
        bg: imgT2,
        title: 'Tartarus',
        details: 'El reino del inframundo donde aquellos que obraron mal en vida son enviados para enfrentar el castigo eterno por sus crímenes después de la muerte.',
        type:'tartarus'
    },
    {
        bg: imgA1,
        title: 'Asphodel',
        details: 'Este es el reino al que van todos aquellos que hicieron el bien y el mal en vida, donde sus almas descansaran por el resto de su eternidad.',
        type:'asphodel'
    },
    {
        bg: imgE1,
        title: 'Elysium',
        details:'Hogar de las almas de héroes y reyes bendecido por los dioses en vida, quienes disfrutan del paraíso con paz y combates por toda la eternidad.',
        type:'elysium'
    },
    {
        bg:imgTS3,
        title: 'Templo Estigia(Styx)',
        details:'Alguna vez un majestuoso templo donde se adoraban a los dioses ctónicos del inframundo. En años más recientes el templo ha caído a un estado deplorable.',
        type:'styx'
    }
]