const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next)=>{
res.render('index', {pageTitle: 'Home'})
})

app.get('/users', (req, res, next)=>{
res.render('users', {pageTitle: 'Users'})
})



app.post('/add-user', (req, res, next)=>{
res.redirect('/users')
})

app.listen(3000)