const express=require('express');

var bodyParser=require('body-parser');

const path=require('path');

var cors = require('cors')
 
const app=express();

app.use(cors());
app.use('/',express.static(path.join(__dirname,'AngularApp')));
 
 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


const adddashboardimage=require('./api/routes/AdddashboardImage');
const adddashboardimagedetails=require('./api/routes/adddashboardimagedetails');
const getEmployee345=require('./api/routes/AddEmployee');
const userlist=require('./api/routes/userlist');
const userdetails = require('./api/routes/userdetails');

var originsWhitelist = [
    'http://localhost:4200',      //this is my front-end url for development
     'http://nestydeco.in/'
  ];
  var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }
  //here is the magic
  app.use(cors(corsOptions));

app.use('/adddashboardimage',adddashboardimage);

app.use('/getEmployee',getEmployee345);
app.use('/userlist',userlist);
app.use('/userdetails',userdetails)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'AngularApp','index.html'));
});

module.exports=app;