// Bus stop coordinates from MIT to Harvard 
const busStops = [
    [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];
// My mapbox access token 
mapboxgl.accessToken = 
'pk.eyJ1IjoibWFrY29sb25lbGxvIiwiYSI6ImNsY3BkZXdjeTI4b2UzbnBlY3hqMTk5dTQifQ.t_3ImI4EOVoqcXkD7lxp9Q';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 13,
});
// Adding a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);

// Counter allows access to bus stops in the array busStops
let counter = 0;
function move() {
    setTimeout(() => {
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
    }, 1000);
}
if (typeof module !== 'undefined') {
    module.exports = { move, counter, marker, busStops };
  }
