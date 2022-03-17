const express = require('express');
const app = express();
const port = 3000;

var data = require('./data/test.json');

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Our Technology Leaders!';
  res.render('pages/index',{'title':title});
});

///elon
app.get('/elonmusk', (req, res) => {
  var title = 'Elon Musk';
  res.render('pages/elonmusk',{'title':title});
});

app.get('/jeffbezos', (req, res) => {
  var title = 'Jeff Bezos';
  res.render('pages/jeffbezos',{'title':title});
});

app.get('/stevejobs', (req, res) => {
  var title = 'Steve Jobs';
  res.render('pages/stevejobs',{'title':title});
});

app.get('/markzuckerberg', (req, res) => {
  var title = 'Mark Zuckerberg';
  res.render('pages/markzuckerberg',{'title':title});
});

app.get('/billnewman', (req, res) => {
  var title = 'Bill Newman';
  res.render('pages/billnewman',{'title':title});
});

app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});