const express=require('express');
let router=express.Router();
const CiudadController = require('../Controllers/CiudadController');
router.route('/')
.get(CiudadController.index)
.post(CiudadController.create) 

router.route('/:id')
.get(CiudadController.show)
.put(CiudadController.update)
.delete(CiudadController.destroy);  

module.exports =router;



