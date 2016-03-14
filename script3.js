
var map = L.map( 'map' ).setView( [30,-90], 4 );

var streets = L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo( map ); 


var satellite = L.tileLayer( 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
  type: 'sat',
  ext: 'jpg',
  attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
  subdomains: '1234'
});


var hightemp = L.tileLayer.wms( "http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: "NOAA nowCOAST",
  opacity: 0.25
}).addTo( map ); 

var watchwarningadvisory = L.tileLayer.wms( "https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer/WMSServer", {
  layers: '0',
  format: 'image/png',
  transparent: true,
  attribution: "NOAA/NWS",
  opacity: 0.50
}).addTo( map ); 

var radar = L.tileLayer.wms( "https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/radar_base_reflectivity/MapServer/WMSServer", {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: "National Weather Service",
}).addTo( map ); 


var baselayers = {
  "Streets": streets,
  "Satellite": satellite
};


var datalayers = {

  "High Temps": hightemp,
  "Watch Warning Advisory": watchwarningadvisory,
  "Radar": radar
};


L.control.layers( baselayers, datalayers ).addTo( map );