var mymap = L.map('main_map').setView([6.2518401, -75.563591], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([6.2518401, -75.563591]).addTo(mymap);
var marker = L.marker([6.5068463, -75.570329]).addTo(mymap);
var marker = L.marker([6.9384638, -75.999999]).addTo(mymap);

