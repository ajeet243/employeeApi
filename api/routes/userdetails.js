 
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

  
    fs.readFile('./api/Resources/josnFiles/userlist.json',function (err, data) {
        var obj = JSON.parse(data);
        console.log(obj);
        res.status(200).json({
            obj
        })
        
        // let userlist =
        // {
        //     "user_id":5,
        //     "name":"manny",
        //     "email":"manny@gmail.com",
        //     "image":"",
        //     "phone":"8786688686",
        //     "location":"pune",
        //     "address":"nasik",
        //     "IsEnable":1
        // }
        // obj.push(userlist);
     
    
        // let data1 = JSON.stringify(obj);
        // fs.writeFile('./api/Resources/josnFiles/userlist.json', data1, (err) => {
        //     console.log('data1:')
        //     console.log(data1)
        //     if (err) throw err;
        
        //     console.log('Data written to file');

        //     // res.status(200).json({
        //     //     Message:"userlist Added"
        //     // })
        // });

    });

   // console.log(readdata);

})

module.exports=router;