const City = require('../models/Ciudad');

function index(req,res,next){
    City.getAllCitys((err,rows)=>{
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    })
}
function create(req,res,next){
    City.addCity(req.body,(err, count)=> {  
        if (err) {  
            res.json(err);  
        } else {  
            console.log(err)
            res.json(req.body);
        }  
    });  
}
function show(req,res,next){
    City.getCityById(req.params.id,(err, rows)=> {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    }); 
}
function update(req,res,next){
    City.updateCity(req.params.id, req.body,(err, rows)=> {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    }); 
}
function destroy(req,res,next){
    City.deleteCity(req.params.id,(err, count)=> {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
}

module.exports={index,create,show,update,destroy};