
const express=require('express');
const mysql=require('mysql');

const app=express();
//create a connection for the mysql database 
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'rishi@#$1996',
    database:'world',
    port:'3308'

});

//now its time to connect the database and check whether it is connect or not
db.connect((error)=>{
if(error)
{
    throw error;
}
console.log("MYSQL connected");
});

//make a router for access the specific route url
app.get('/city',(req,res)=>{
    db.query("SELECT * FROM world.city",(error,row,field)=>{
     if(error){
         console.log("Not execute the query");
     }else{
         console.log("Query running successfully");
         console.log(row);
         res.json(row);
     }

    });
});

app.get('/country',(req,res)=>{
    db.query("SELECT * FROM world.country",(error,row,field)=>{
     if(error){
         console.log("Not execute the query");
     }else{
         console.log("Query running successfully");
         console.log(row);
         res.json(row);
     }

    });
});

app.get('/countrylanguage',(req,res)=>{
    db.query("SELECT * FROM world.countrylanguage",(error,row,field)=>{
     if(error){
         console.log("Not execute the query");
     }else{
         console.log("Query running successfully");
         console.log(row);
         res.json(row);
     }

    });
});


app.get('/countrylanguage/:country',(req,res)=>{
    var con=req.params.country;
    db.query('SELECT * FROM world.countrylanguage where CountryCode="'+con+'"',(error,row,field)=>{
        if(error)
        {
            console.log("Some error occur");
        }
        else{
            res.json(row);
        }
    });
});

app.get('/city/:from/:to',(req,res)=>{
    var f=req.params.from;
    var t=req.params.to;
    db.query('SELECT * FROM world.city limit '+f+','+t+';',(error,row,field)=>{
        if(error)
        {
            console.log("Some error occur");
        }
        else{
            res.json(row);
        }
    });
});


app.listen('9000',()=>{
    console.log('server started at the port 9000');
});