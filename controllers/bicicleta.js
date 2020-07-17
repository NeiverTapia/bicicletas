
var Bicicleta = require('../models/bicicleta');

exports.bicicleta_list= (req, res)=>{
    res.render('bicicletas/index',
    {bicis: Bicicleta.allBicis});
}


exports.bicicleta_create_get=function(req, res){
    res.render('bicicletas/create');
}

exports.bicicleta_create_post=(req, res)=>{
     
    var bike = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bike.ubicacion =[req.body.long, req.body.lat]
    
    Bicicleta.add(bike);
    res.redirect('/bicicletas');
}

exports.bicicleta_update_get=function(req, res){
    var bici =Bicicleta.findById(req.params.id);

    res.render('bicicletas/update',{bici});
}

exports.bicicleta_update_post=(req, res)=>{
    var bici =Bicicleta.findById(req.params.id);

    bici.id=req.body.id;
    bici.color=req.body.color;
    bici.modelo=req.body.modelo;
    bici.ubicacion =[req.body.long, req.body.lat]
    res.redirect('/bicicletas');
}

exports.bicicleta_delete_post=(req,res)=>{
    Bicicleta.removeById(req.body.id);
    res.redirect('/bicicletas');
}