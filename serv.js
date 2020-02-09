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
  // res.render('index');
});
app.get('/css/style.css', urlencodedParser, function(req, res){
  res.sendFile(__dirname + '/css/style.css');
});

app.use(express.static('public'));
app.use('/static', express.static('public'));



// app.get('/', function(req, res){
// 	res.render('index');
// });


// app.get('/public/desktop', function(req, res){
// 	res.render('desktop');
// });



app.post("/index", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    // res.render('index');

    sqltl = req.body.login;
    sqltp = req.body.pass;

    console.log(sqltl);
    console.log(sqltp);

      //db.run("CREATE TABLE if not exists user_info (info TEXT)");
// Обращение к БД за логином и паролем (проверка на совпадение)
    db.all("SELECT login, pass FROM users",[], function(err, rows) {

      if(err){  
            res.send(err.message);  
        }  
      let string = '';  
      let flag = 0;

        rows.forEach((row)=>{  
            //string += `${row.login} - ${row.pass}</br>`; 
            // Проверка на совпадение
            if(row.login == sqltl && row.pass == sqltp)
            {
                string = "ACCEPT";
                flag = 1;

            } else if(flag == 0)
            {
              string = "STOP";
            }
        });  
        res.send(string);
    });

    
});


app.listen(8080);
//db.close();