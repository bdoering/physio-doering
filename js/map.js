var praxisLoc = [47.228664,8.675111];
var mymap = L.map('map', {
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
  }
}).setView(praxisLoc, 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

var physioIcon = L.icon({
    iconUrl: '/img/map-marker_95.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [136, 95], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [60, 88], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


L.marker(praxisLoc, {icon: physioIcon}).addTo(mymap)
    .bindPopup("<b>Physio Döring am Zürisee</b><br />Merkurstrasse 3<br />8820 Wädenswil").openPopup();

