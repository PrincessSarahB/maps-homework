const drawMap = function(){
  const mapDiv = document.getElementById('main-map')
  const glasgow = [55.86515, -4.25763];
  const javaStreet = [55.801507, -4.003805];
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, glasgow, zoomLevel);


}


window.addEventListener('load', drawMap);
