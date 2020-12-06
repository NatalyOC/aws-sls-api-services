const fetch = require('node-fetch');



exports.findById=function(req,res){
    let parameter=req.params.id;
    console.log(parameter)
    let api = {};
    fetch('https://swapi.py4e.com/api/planets/'+parameter)
    .then(res => res.json())
    .then(contenido=>{
        api = {
            nombre: contenido.name,
            periodo_de_rotacion:contenido.rotation_period,
            periodo_orbital:contenido.orbital_period,
            diametro:contenido.diameter,
            clima:contenido.climate,
            gravedad:contenido.gravity,
            terreno:contenido.terrain,
            agua_superficial:contenido.surface_water,
            población:contenido.population,
            residentes:contenido.residents,
            peliculas :contenido.films,
            creado:contenido.created,
            editado:contenido.edited,
            url:contenido.url
        };
        console.log(contenido);
        console.log(api);
        res.status(200).jsonp(api);
    });
    
};