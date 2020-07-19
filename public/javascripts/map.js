var mymap = L.map('main_map').setView([6.217,-75.567], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(mymap);

//Llamada a Ajax es un reques asincronico para hacer una solicitud a una web en un formato que se especifíque

$.ajax({
    dataType: "json",
    url: "API/bicicletasRouteAPI",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach((bici)=>{
            L.marker(bici.ubiccacion, {title: bici.id}).addTo(mymap);
        });
    }
});