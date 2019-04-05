
var map;

function initMap() {
  map = new google.maps.Map(document.getElementsByClassName('google-map__window'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}