const MapWrapper = function(element, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  this.map = L.map(element).addLayer(osmLayer).setView(coords, zoom);
  this.map.on('click', function(event){
    this.addMarker(event.latlng);
    // const chicago = [41.8781, 87.6298];
    // const button = document.querySelector('button');
    // button.addEventListener('click', function(){
    //   this.takeMeToChicago(chicago);
  // });
  }.bind(this))



}

MapWrapper.prototype.addMarker = function(coords){
  L.marker(coords).addTo(this.map);

};

  // MapWrapper.prototype.takeMeToChicago = function (coords) {
  //   L.panTo(coords).addTo(this.map);
  // };
