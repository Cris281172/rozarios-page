const express = require('express');
const app = express();
app.use(express.static('assets'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/menu', (req, res) => {
    res.render('menu');
})

app.get('/w-srodku', (req, res) => {
    res.render('slider')
})

app.get('/lokalizacja', (req, res) => {
    res.render('localization')
})

app.listen('8080', () => console.log('Server listening on port 8080'));