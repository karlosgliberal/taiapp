
var express = require('express'),
    path = require('path');
var Firebase = require('firebase');
var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator('dsJTAxmpySfAdrJ71afvyergSWG0LTuIDNx0ZREQ');
var token = tokenGenerator.createToken({admin: true});
var dataRef = new Firebase("https://taiapp.firebaseio.com/");

var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.favicon(__dirname + '/public/favicon.ico')); 
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
})

app.get('/logget', function(req, res){
  console.log('llega');
  dataRef.auth(token, function(error) {
    if(error) {
      console.log("Login Failed!", error);
    } else {
      var childRef = dataRef.child('datos');
      childRef.push({color:req.param('color'), lat:req.param('lat'), lon:req.param('lon')})
    }
  });
  res.header('Content-Type', 'application/json');
  res.header('Charset', 'utf-8')
  res.send(req.query.callback + '({"something": "rather", "more": "pork", "tua": "tara"});');
});


app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
})


app.listen(4000);
console.log('Listening on port 4000');

