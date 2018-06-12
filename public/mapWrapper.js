const MapWrapper = function(element, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  this.map = L.map(element).addLayer(osmLayer).setView(coords, zoom);
  this.map.on('click', function(event){
    this.addMarker(event.latlng);

  }.bind(this))

  const myMarker = new L.marker([55.86515, -4.25763], {title: 'CodeClan Glasgow'}).bindPopup("CodeClan Glasgow, coding bootcamp in Scotland").openPopup(); 
  myMarker.addTo(this.map);

  const chicago = [41.8781, -87.6298, 15];
  const button = document.querySelector('button');
  button.addEventListener('click', function(){
    this.takeMeToChicago(chicago);
}.bind(this));


}

MapWrapper.prototype.addMarker = function(coords){
  L.marker(coords).addTo(this.map);

};

  MapWrapper.prototype.takeMeToChicago = function (coords, zoom) {
    this.map.flyTo(coords, zoom);
  };
