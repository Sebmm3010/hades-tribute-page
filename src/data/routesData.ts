interface Route {
    name: string;
    path: string;
}

export const routesData:Route[] = [
    {
        name:'Inicio',
        path:'#'
    },
    {
        name: 'Galeria',
        path: '#gallery'
    },
    {
        name: 'Caracteristica',
        path: '#caracteristicas'
    },
    {
        name: 'Personajes',
        path: '#characters'
    }
]