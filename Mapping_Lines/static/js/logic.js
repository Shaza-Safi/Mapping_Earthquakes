// Create the map object with a center and zoom level.
// let map = L.map("mapid").setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: "satellite-streets-v11",
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


//=========================================================================
// // Skill Drill 13.4.3

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// // Coordinates for each point to be used in the line.
// let line = [
//   [37.6213, -122.3790],
//   [30.1974292, -97.6663058],
//   [43.67771760000001, -79.62481969999999],
//   [40.641766, -73.780968]

// ];


// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "blue",
//   weight: '4',
//   dashArray: '20, 20',
//   fillOpacity: 0.5
// }).addTo(map);


// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: "light-v9",
//   accessToken: API_KEY
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);