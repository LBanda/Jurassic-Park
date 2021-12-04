const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const rutasParque = require('./routes/parque');
const rutasUsers = require('./routes/users');

const path = require('path');
const router = express.Router();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());



app.use(session({
    secret: 'JUDHUBDUA8337Gghvsg72bwb7WUB2E7JNB83UMKa82', 
    resave: false, 
    saveUninitialized: false, 
}));

app.get('/index', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use('/parque', rutasParque);
app.use('/users', rutasUsers);


app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.status(404).send('Recurso no encontrado :('); 
});

app.listen(3000);