const session = require("express-session");

exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: "Iniciar sesión",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    });
};

exports.postLogin = (request, response, next) => {
    request.session.username = request.body.username;
    request.session.isLoggedIn = true;
    console.log(request.session.username);
    response.status(302).redirect('/parque/incidentes');

};

exports.getLogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/parque/incidentes');
    });
};