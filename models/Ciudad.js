var db = require('../conexion/conexion');
var City={
    getAllCitys:function(callback){
        return db.query("select id,nombre from ciudad",callback);
    },
    getCityById:function (id, callback){
        return db.query("select * from ciudad where id=?",[id],callback);
    },
    crearCity:function(City,callback){
        return db.query("Insert into ciudad values(?,?,?)",[City.id,City.nombre,City.mensajeros],callback);
    },
    deleteCity:function(id,callback){
        return db.query("delete from ciudad where id=?",[id],callback);
    },
    updateCity:function(id,City,callback){
        return db.query("update ciudad set nombre=?,mensajeros=? where id=?",[City.nombre,City.mensajeros,id],callback)
    }
}
module.exports = City;