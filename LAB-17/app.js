const express = require('express');
const app = express();
const session = require('express-session');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');
// app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'xKrsDBW3!!L5tb5w5E$2gANH5W@0d6fV*MQR@e2l47%ADrB@Vd', 
    resave: false,
    saveUninitialized: false
}));

// Rutas
const mainRuta = require('./routes/main.routes');
const RB_Ruta = require('./routes/redbull.routes');
const AM_Ruta = require('./routes/astonmartin.routes');
const MB_Ruta = require('./routes/mercedes.routes');
const FR_Ruta = require('./routes/ferrari.routes');
const ML_Ruta = require('./routes/mclaren.routes');
const AP_Ruta = require('./routes/alpine.routes');
const HA_Ruta = require('./routes/haas.routes');
const AR_Ruta = require('./routes/alfaromeo.routes')
const AT_Ruta = require('./routes/alphatauri.routes');
const registrarRuta = require('./routes/main.routes');
const mainController = require('./controllers/main.controller');

// Middlewares
app.use('/', mainRuta);
app.use(RB_Ruta);
app.use(AM_Ruta);
app.use(MB_Ruta);
app.use(FR_Ruta);
app.use(ML_Ruta);
app.use(AP_Ruta);
app.use(HA_Ruta);
app.use(AR_Ruta);
app.use(AT_Ruta);

app.use(registrarRuta);
// app.post(mainController.contador);

// Error
app.use((request, response) => {
    response.statusCode = 404;
    response.send("Lo sentimos, no contamos con esa ruta.");
});

app.listen(3000);
