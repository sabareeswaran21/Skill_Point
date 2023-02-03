const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const data = require('mysql');
const { request, response } = require('express');

const add = express();
add.use(cors());
add.use(fileupload());
add.use(bodyparser.json());
add.use(express.json());
add.use(bodyparser.urlencoded({extended:true}));
add.use(express.static('public'));

let c = data.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "#Bsabaree1999",
    database : "skill_point"
})

c.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('database connected');
    }
})

add.post('/add',(request,response)=>{
    let {image,name,domain,degree,experiance,worktype,notice} = request.body;
    let sql = 'insert into experiance(image,name,domain,degree,experiance,worhtype,noticeperiod) values (?,?,?,?,?,?,?)';
    c.query(sql,[image,name,domain,degree,experiance,worktype,notice],(error,result)=>{
        if(error){
            let b= {"status":"error"};
            response.send(b);
        }
        else{
            let b= {"status":"success"};
            response.send(b);
        }
    })
})

add.get('/experiance',(request,response)=>{
    let sql = 'select * from experiance';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})






add.listen(3002,()=>{
    console.log('server running 3002');
})