var Bicicleta = require("../../../models/bicicleta")

beforeEach(function() {
    Bicicleta.allBicis=[];
  });
  
  beforeEach(function() {
   console.log("Testeando....")
  });

describe("Bicicleta.allBIcis",()=>{
    it("Comienza vacia",()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});
//Funcionamiento del método add
describe("Bicicleta.add",()=>{
    it("Add bicicletas",()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var a = new Bicicleta(1,'negro','Calle',[6.25184, -75.56359]);
        Bicicleta.add(a)
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});
describe("Bicicleta.findById",()=>{
    it("encontrar por Id",()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var a = new Bicicleta(1,'rojo','Montaña',[6.25184, -75.56359]);
        var b = new Bicicleta(2,'gris','Clasica',[6.25184, -75.56359]);
        Bicicleta.add(a);
        Bicicleta.add(b);

        var targetBicicleta =Bicicleta.findById(2);

        expect(targetBicicleta.id).toBe(2);
        expect(targetBicicleta.modelo).toBe(b.modelo);
        expect(targetBicicleta.color).toBe(b.color);
    });
});
describe("Examinando método remove",()=>{
    it("Le pasamos un Id y este lo debe remover",()=>{
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1,'rojo','Montaña',[6.25184, -75.56359]);
        var b = new Bicicleta(2,'gris','Clasica',[6.25184, -75.56359]);
        
        Bicicleta.add(a);
        Bicicleta.add(b);

        Bicicleta.removeById(1);
        expect(Bicicleta.allBicis.length).toBe(1);
    });
});