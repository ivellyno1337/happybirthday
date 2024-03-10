var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var eventsRouter = require('./server/routers/events-router');

var app = express();
const PORT = process.env.PORT || 80;

app.use(morgan('dev'));
app.use(express.static('client'));


// Enable CORS on ExpressJS to avoid cross-origin errors when calling this server using AJAX
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,recording-session");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/events', eventsRouter);

app.listen(PORT, () => {
    console.log(`Server Run on port ${PORT}`)
});
