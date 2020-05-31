const express=require('express');
Bicicleta = require('../models/bicicleta');

exports.bicicleta_list= (req, res)=>{
    res.render('bicicletas/index',{bicis: bicicletaAllBicis})
}


exports.bicicleta_create_get=function(req, res){
    res.render('bicicletas/create');
}

exports.bicicleta_create_post=(req, res)=>{
    console.log('entrooo');
     
    var bike = new Bicicleta(req.body.id, req.body.color, req.body.lng, req.body.ltd);
//    bike(req.id, req.color, req.modelo, req.log, req.ltd);
    console.log(bike);

//   var bici = new Bicicleta(req.id, req.color, req.modelo);
//    bici.ubicacion=[req.ltd, req.lng];

    Bicicleta.add(bike);
//    res.redirect('/bicicletas');

}

//req.body.id, req.body.color, req.body.modelo)