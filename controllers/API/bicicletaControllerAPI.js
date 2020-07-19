var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list=(req,resp)=>{
    resp.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}
exports.bicicleta_create =(req,resp)=>{
    var bici= new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion =[req.body.lat, req.body.long]

    Bicicleta.add(bici);

    resp.status(200).json({
        bicicleta:bici
    });
}

exports.bicicleta_delete=(req, res)=>{
    Bicicleta.findById(req.body.id);
    res.status(204).send();
}