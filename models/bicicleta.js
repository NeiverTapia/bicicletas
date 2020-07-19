    var Bicicleta=function(id, color, modelo, ubicacion){    
        this.id=id;
        this.color=color;
        this.modelo=modelo;
        this.ubicacion=ubicacion;
}

Bicicleta.prototype.toString = function biciToString(){
    return "id: "+this.id + " | color: " + this.color;
}

Bicicleta.allBicis=[];
Bicicleta.add=function(abicis){
    Bicicleta.allBicis.push(abicis);
}

Bicicleta.findById=(aBikeId)=>{
    var aBike = Bicicleta.allBicis.find(x=> x.id==aBikeId);
    if(aBike){
        return aBike;
    } else{
        throw new Error (`No existe una bicicleta con el Id: ${aBike}`);
    }
} 
Bicicleta.removeById=(aBikeId)=>{
    for(var i=0; i<Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id== aBikeId){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

var a = new Bicicleta(1,'negro','Calle',[6.25184, -75.56359]);
var b = new Bicicleta(2,'gris','models',[6.33732, -75.55795]);
var c = new Bicicleta(3,'red','antigua',[6.18461,-75.59913]);


Bicicleta.add(a);
Bicicleta.add(b);
Bicicleta.add(c);



module.exports=Bicicleta;