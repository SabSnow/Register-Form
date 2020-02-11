let express = require('express');
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./user.db');
let app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
var sqltl;
var sqltp;


app.get('/index', urlencodedParser, function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/style.css', urlencodedParser, function(req, res){
  res.sendFile(__dirname + '/css/style.css');
});

app.post("/index", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);

    sqltl = req.body.login;
    sqltp = req.body.pass;

    console.log("Login: " + sqltl);
    console.log("Password: " + sqltp);
    
    // Обращение к БД за логином и паролем
    db.all("SELECT login, pass FROM users",[], function(err, rows) {

      if(err){  
            res.send(err.message);  
        }  
      let string = '';  
      let flag = 0;

        rows.forEach((row)=>{  
            // Проверка на совпадение
            if(row.login == sqltl && row.pass == sqltp)
            {
                string = "Acсess: ALLOWED";
                flag = 1;

            } else if(flag == 0)
            {
              string = "Acсess: DENIED";
            }
        });
        console.log(string);  
        if(flag == 1) {
          app.use('/', express.static('public'));
          res.sendFile(__dirname + '/public/desktop.html');
        }else {
          res.sendFile(__dirname + '/index.html');
        }
    });

    
});


app.listen(8080);
//db.close();