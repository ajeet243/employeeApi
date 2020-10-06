 
const express=require('express');
const router=express.Router();

var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
var fs = require('fs');



router.post('/',(req,res,next)=>{
    
    res.status(200).json({
        'message':'My First post method '
    })
});

router.get('/',(req,res,next)=>{

  
    fs.readFile('./api/Resources/josnFiles/Employee.json',function (err, data) {
        var obj = JSON.parse(data);
        
    let Employee =
    {
        "user_id":12,
        "name":"zeni",
        "email":"deog@gmail.com",
        "image":"https://haygot.s3.amazonaws.com/questions/903064_f635de553dd24a0996246de16e3a987a.png",
        "phone":"0484958495",
        "location":"nagvara",
        "address":"bangalore",
        "IsEnable":1
    };
    obj.push(Employee);
     
    
    let data1 = JSON.stringify(obj);
    fs.writeFile('./api/Resources/josnFiles/userlist.json', data1, (err) => {
        if (err) throw err;
        console.log('Data written to file');

        res.status(200).json({
            Message:"Employee Added"
        })
    });

    });

   // console.log(readdata);

})

module.exports=router;