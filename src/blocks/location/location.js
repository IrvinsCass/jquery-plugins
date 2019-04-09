
ymaps.ready(init);

function init(){   
  var myMap = new ymaps.Map("map", {
    center: [37.79558526, -122.41463540],
    zoom: 15
  })

  var myPlacemark = new ymaps.Placemark([37.79558526, -122.41463540], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/location/marker.png',
    iconImageSize: [60, 61],
    iconImageOffset: [-17, -47]
});

  myMap.geoObjects.add(myPlacemark)
  myMap.controls
        .remove('zoomControl')
        .remove('geolocationControl')
        .remove('routeButtonControl')
        .remove('trafficControl')
        .remove('typeSelector')
        .remove('fullscreenControl')
        .remove('rulerControl')
  myMap.behaviors
        .disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom', 'dblClickZoom', 'leftMouseButtonMagnifier'])
}