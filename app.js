const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = [];
const emails = [];

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}))
app.get('/', (req, res, next)=>{
res.render('index', {pageTitle: 'Home'})
})

app.get('/users', (req, res, next)=>{
res.render('users', {pageTitle: 'Users', users: users, emails: emails})
})



app.post('/add-user', (req, res, next)=>{
    users.push({name: req.body.username})
    emails.push({email: req.body.email})
res.redirect('/users')
})

app.listen(3000)