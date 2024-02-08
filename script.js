require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer","esri/core/urlUtils","esri/config"], (Map, MapView, FeatureLayer,urlUtils,esriConfig) => {
//        var map = new Map({
//          basemap: "hybrid"
//        });

      var map = new Map({
       basemap: "streets-night-vector",
       //layers: [featureLayer_1]
      });

          var template = {
          title: "School Name",
          content: "SChhol {Facility}"
        };

     var view = new MapView({
       container:  "viewDiv",
       map: map,
       center: [ -90.1994, 38.6270 ],
       zoom: 10,
          });
      

var featureLayer_1 = new FeatureLayer({ url: "https://services2.arcgis.com/ZV8Mb62EedSw2aTU/ArcGIS/rest/services/CurrentSystem_REGISTERED_1/FeatureServer/4"
});
  
map.add(featureLayer_1);


var featureLayer_2 = new FeatureLayer({
  url: 
"https://maps.stlouisco.com/arcgis/rest/services/OpenData/OpenData/FeatureServer/4"
});
map.add(featureLayer_2);

  
var featureLayer_3 = new FeatureLayer({
  url: 
"https://services2.arcgis.com/kNS2ppBA4rwAQQZy/ArcGIS/rest/services/MO_Public_Schools/FeatureServer/0",
   popupTemplate: template
});
map.add(featureLayer_3);


var featureLayer_4 = new FeatureLayer({
  url: 
"https://maps.stlouisco.com/arcgis/rest/services/OpenData/OpenData/FeatureServer/15"
});

map.add(featureLayer_4);
});  
