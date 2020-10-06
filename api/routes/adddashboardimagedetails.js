 
const express=require('express');
const router=express.Router();

var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
var fs = require('fs');
var isvaliduser=false;
var usersArray;
var mysql = require('mysql');

var databaseOptions = require('../config/config.js');
var con = mysql.createConnection(databaseOptions);

router.get('/',(req,res,next)=>{
    // fs.readFile('./api/Resources/josnFiles/Users.json',function (err, data) {
    //      usersArray = JSON.parse(data);
    // });
    // res.status(200).json({
    //     usersArray
    // })

    if(!con._connectCalled)
    {
        con.connect((err) =>{
            if(err) throw err;
            //console.log('Mysql Connected...');
          });
    }


    var sqlQry='select UserID,UserName,Mail,FirstName,lastName,MobileNO,ShopName,ShopAddress,pincode,createdAt,status,Role,City,State,Mobile,kyc,shopicon,ShipState,ShipCity,ShipPincode,ShipAddress from users where status in ("Submited")';
   
console.log(sqlQry);

 
con.query(sqlQry, function (err, result, fields) {
 if (err) throw err;
 console.log(result.length);
 if(result.length>0)
 {
     res.status(200).json({
        usersArray:result
     });
 }
 else
 {
    res.status(200).json({
        usersArray:"No Product Found"
    });
 }
})
});

router.post('/',bodyParser.json(),(req,res,next)=>{
    var enable=req.body.IsEnable;
    var isenable;
    if(enable==true)
    {
        isenable=1;
    }
    else
    {
        isenable=0;
    }
var Id=parseInt(req.body.Id);
var SectionID=parseInt(req.body.SectionID);
var SectionName=req.body.SectionName;
var ImgURL=req.body.ImgURL;
var naviagateTo=req.body.naviagateTo;
var OrderId=parseInt(req.body.OrderId);
var IsEnable=parseInt(isenable);
var type=req.body.type;


    console.log(req.body);
    if(!con._connectCalled)
    {
        con.connect((err) =>{
            if(err) throw err;
            //console.log('Mysql Connected...');
          });
    }

    var sqlQry;
    //var sql = 'SELECT * FROM users WHERE UserName = ' + mysql.escape(usrname)+' and  Password='+ mysql.escape(pswd);    
    //var sql = 'SELECT * FROM users WHERE UserName = ' + mysql.escape(UserName)+' and  Password='+ mysql.escape(pswd);
    if(type=='New')
    {
      sqlQry='insert into dashboardimages(SectionID,SectionName,ImgURL,naviagateTo,OrderId,IsEnable) values ('+ mysql.escape(SectionID)+','+mysql.escape(SectionName)+','+mysql.escape(ImgURL)+','+mysql.escape(naviagateTo)+','+mysql.escape(OrderId)+','+mysql.escape(IsEnable)+')';     
    }
    else if(type=='Edit' && SectionID==1)
    {
        sqlQry='update dashboardimages set IsEnable=0 where Id in ('+ mysql.escape(Id)+')';     
    }
    else if(type=='Edit' && SectionID!=1)
    {
        sqlQry='update dashboardimages set ImgURL= '+ mysql.escape(ImgURL)+' , naviagateTo ='+ mysql.escape(naviagateTo)+' where Id in ('+ mysql.escape(Id)+');';     
    }



     console.log(sqlQry);

//To check if mobile number exist
con.query(sqlQry, function (err, result, fields) {
    if (err) throw err;
    console.log(result.length);
    if(result.length>0)
    {
        res.status(200).json({
            res:'Images Updated.'
        });
    }
    else
    {
     
    }
})
})
module.exports=router;
