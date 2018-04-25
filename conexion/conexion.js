let mysql = require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mysql'
  });
  /*connection.connect(function(error){
      if(error){
          throw error;
      }else{
          console.log('Conexion correcta');
      }
  });*/
  module.exports=connection;