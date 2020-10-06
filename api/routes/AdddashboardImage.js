const express=require('express');
const router=express.Router();
var multer=require('multer');
const path=require('path');
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var fs = require('fs');
var pathurl=(path.join(path.join(__dirname,'AngularApp'),'assets'));
var storage=multer.diskStorage({
    destination:function(req,res,callback){
        var path='./AngularApp/assets/dashboardImages';
        var folderName=path;//+folderdetail[0].CategName;
        callback(null,folderName);
    },
        filename:function(req,file,callback)
        {
                console.log("File is:"+file+"Filename is :"+file.originalname+"size is :"+file.size);
                callback(null,file.originalname)
        }
    
})

var upload=multer({storage:storage}).array('file',5);

const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
  };

router.get('/',(req,res,next)=>{
    res.status(200).json({
        'message':'My First Get method '
    })
});

router.post('/', function(req,res,next){
     
    upload(req,res,function(err){
        if(err){
            console.log(err);
            return res.end('error while uploading file');
        }
        res.end('file uploaded successfully')
    })
});
    module.exports=router;