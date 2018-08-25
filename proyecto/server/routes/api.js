// Fuente: https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli

const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize')
const sequelize = new Sequelize('analisis', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
  operatorsAliases: false,
	define: {
        timestamps: false,
		defaultScope:{
			attributes:{
				exclude: ['createdAt','updatedAt']
			}
		}
	}
});
//var connection = require("express-myconnection")
sequelize.authenticate().then(() => {
    console.log("Conexion Establecida");
}).catch(err => {
    console.error("error ACAAA: ", err);
});

const user = sequelize.import('usuario', require("../modelos/usuario"));
const order = sequelize.import('orden', require("../modelos/order"));

/*order.findById(1).then(result => {
    console.log(result);
  });*/

//Querys que posiblemente sean necesarias--------------


  router.get('/mostrar_ordenes',(req,res) => {
    const usuario = Number(req.query.usuario) || '';
    order.findAll({
      attributes: ['id_orden','titulo','estado','fecha'],
      where: {
        usuario_id : usuario
        }
      }).then(us =>{
        console.log(us);
        res.json(us);
    })
  });

  router.get('/mostrar_ordenes_all',(req,res) => {
    const usuario = req.query.usuario || '';
    order.findAll({
      attributes: ['id_orden','titulo','estado','fecha'],
      }).then(us =>{
        console.log(us);
        res.json(us);
    })
  });



  /*router.get('/mostrar_usuario',(req,res) => {
    const usuario = req.query.id_usuario || '';
    user.findAll({
      attributes: ['nombre','apellido'],
      where: {
        id_usuario : usuario
        }
      }).then(us =>{
        console.log(us);
        res.json(us);
    })
  });*/

  router.get('/mostrar_clave',(req,res) => {
    const usuario = req.query.nombre || '';
    const pass = req.query.clave || '';

    user.findAll({
      attributes: ['id_usuario','nombre','clave','tipo'],
      where: {
        nombre : usuario,
        clave  : pass
        }
      }).then(us =>{
        //console.log(us[0].clave);
        res.json(us[0]);
    })
  });

router.get('/insertar_orden',(req,res) => {
  const usuario = Number(req.query.id) || '';
  const nuevotitulo = req.query.titulo || '';
  const nuevodetalle = req.query.detalle || '';
  order.create({
      usuario_id : usuario,
      titulo  : nuevotitulo,
      detalle : nuevodetalle,
      estado  : "pendiente"
    }).then(us =>{
      console.log(us);
      res.json("Se inserto la nueva orden");
  })
});

//------------QUERYS DE PRUEBA------------------------

//const usuario = req.query.username || '';

/*order.findAll({
  attributes: ['id_orden'],
  where: {
    usuario_id : 1
  }
  }).then(us =>{
    console.log(us);
    //res.json(us.id);
  })*/

/*user.findAll().then(users => {
  console.log(users)
})*/

/*router.post('/', (req, res) => {
    console.log("POST /")

    user.findAll({
        where: {
            username: req.body.username,
            password: req.body.password
        } }).then(result => {
        console.log(result);
        if(result.length == 0){res.json({status: 200});}
        else{res.json({
            status:200,
            body: {
                token: "fake-jwt-token",
                rol: result[0].fecha,
                rut: result[0].creado,
                nombre: result[0].nombre,
                apellido: result[0].apellido,
                email: result[0].email,
                id: result[0].ID
            }
        });}
    });
})*/

//--------------Hasta Aqui -------------------------


// Agregar MySQL
/*  var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'analisis'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

/* GET api listing. */
/*  router.get('/', (req, res) => {
	var Query = "SELECT * from analisis.usuarios";
  	connection.query(Query, function(err, rows){
    if(err){
      console.log(err)
      res.status(400).send("Error");
    }
    else{
      return res.send(rows);
    }
  	});
});

router.post('/login', (req, res) => {
  console.log(req.body)
    if(req.body.username=="cliente1"&&req.body.password=="cliente1"){
        res.json({ resp: {id: 1, nombre: "victor", email: "un@email.com", token: "fake-jwt-token", tipo_usuario: "cliente1"}});
    }
    else if(req.body.username=="cliente2"&&req.body.password=="cliente2"){
        res.json({ resp: {id: 1, nombre: "victor", email: "un@email.com", token: "fake-jwt-token", tipo_usuario: "cliente2"}});
    }
    else{
        res.json({ resp: "usuario no encontrado"});
    }
    /*
    setupListenHandle [as _listen2] (net.js:1343:14)
    at listenInCluster (net.js:1391:12)
    at Server.listen (net.js:1474:7)
    at Object.<anonymous> (/home/victor/Escritorio/Vector/proyecto/server.js:43:8)
    at Module._compile (module.js:624:30)
    at Object.Module._extensions..js (module.js:635:10)
    at Module.load (modul
*/

//});

//User registration
/*

exports.register = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  var usuarios={
    "nombre":req.body.first_name,
    "apellidp":req.body.last_name,
    "email":req.body.email,
    "clave":req.body.password,
    "created":today,
    "modified":today
  }
  connection.query('INSERT INTO usuarios SET ?',usuarios, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
  }
  });
}

//User Login
exports.login = function(req,res){
  var email= req.body.email;
  var clave = req.body.clave;
  connection.query('SELECT * FROM usuarios WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if([0].clave == clave){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }servicios
  });
}
*/
module.exports = router;
