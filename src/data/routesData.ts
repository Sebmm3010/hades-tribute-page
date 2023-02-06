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
        path: '#caracteristics'
    },
    {
        name: 'Revies y premios',
        path: '#reviews'
    },
    {
        name: 'Personajes',
        path: '#characters'
    }
]