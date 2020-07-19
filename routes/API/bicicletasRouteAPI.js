var express= require('express');
var router =express.Router();
var bicicletaControllerAPI= require('../../controllers/API/bicicletaControllerAPI');

router.get('/',bicicletaControllerAPI.bicicleta_list);
router.post('/create', bicicletaControllerAPI.bicicleta_create)
router.delete('/delete', bicicletaControllerAPI.bicicleta_delete)

module.exports=router;