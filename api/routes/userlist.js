 
const express=require('express');
const router=express.Router();

var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
var fs = require('fs');



router.get('/',(req,res,next)=>{
    
    res.status(200).json({
        'message':'My First post method '
    })
});

router.post('/',(req,res,next)=>{


    fs.readFile('./api/Resources/josnFiles/userlist.json',function (err, data) {

        var obj = JSON.parse(data);
        console.log(obj);
        res.status(200).json({
            obj
        })
        
        let userlist =
        {
            // "user_id":10,
            // "name":"suraj",
            // "email":"suraj123@gmail.com",
            // "image":"https://www.espncricinfo.com/inline/content/image/501527.html?alt=1",
            // "phone":"8786688686",
            // "location":"punjab",
            // "address":"chandi",
            // "IsEnable":1
            user_id:req.body.user_id,
            name:req.body.name,
            email:req.body.email,
            image:req.body.image,
            phone:req.body.phone,
            location:req.body.location,
            address:req.body.address,
            // _IsEnable:req.body.IsEnable
        }
        console.log(userlist)
        obj.push(userlist);
     
    
        let data1 = JSON.stringify(obj);
        fs.writeFile('./api/Resources/josnFiles/userlist.json', data1, (err) => {
            console.log('data1:')
            console.log(data1)
            if (err) throw err;
            console.log('Data written to file');

            // res.status(200).json({
            //     Message:"userlist Added"
            // })
        });

    });

   // console.log(readdata);

})

module.exports=router;