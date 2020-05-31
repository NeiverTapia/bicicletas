function Bicicleta(id, color, modelo, ubicacion){    
    this.id=id;
    this.color=color;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
    
}

Bicicleta.prototype.getId=function(){
    return this.getId;
}
Bicicleta.prototype.getColor=function(){
    return this.getCOlor;
}
Bicicleta.prototype.getModelo=function(){
    return this.getModelo;
}
Bicicleta.prototype.getUbicacion=function(){
    return this.getId;
}
Bicicleta.prototype.setId = function(id) {
    this.id = id;
}
Bicicleta.prototype.setColor = function(color) {
    this.color = color;
}
Bicicleta.prototype.setModelo = function(modelo) {
    this.modelo = modelo;
}
Bicicleta.prototype.setUbicacion = function(ubicacion) {
    this.ubicacion = ubicacion;
}

/*
var bicicletaAllBicis=[];

bicicletaAllBicis.add=function(abicis){
    bicicletaAllBicis.push(abicis);
}

a = new Bicicleta(1,'negro','Calle',[-56.12342,-50.09876]);
b = new Bicicleta(2,'gris','models',[-17.12342,-20.09876]);
c = new Bicicleta(3,'red','antigua',[-18.12342,-15.09876]);


Bicicleta.add(a);
Bicicleta.add(b);
Bicicleta.add(c);
*/


module.exports.Bicicleta;