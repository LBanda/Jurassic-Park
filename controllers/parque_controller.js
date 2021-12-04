const Incidente = require('../models/incidentes');



exports.getList = (request, response, next) => {
    console.log('Ruta /parque/incidentes');
    console.log(request.cookies);
    response.render('lista_incidente', {
        titulo: "Lista de incidentes",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
        lista_incidentes: Incidente.fetchAll(),
    });
};

exports.getAdd = (request, response, next) => {
    response.render('agregar_incidente',{
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
        titulo: "Agregar nuevo incidente",
    });
};

exports.postAdd = (request, response, next) => {
    console.log(request.body.nombre);
    response.setHeader('Set-Cookie', 'ultima_pieza= '+ request.body.nombre+'; HttpOnly');
    const incidente = new Incidente(request.body.id, request.body.fecha, request.body.lugar, request.body.tipo );
    incidente.save();
    response.status(302).redirect('/parque/incidentes');
    
};