var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_PrecipitacionInterpoladaRoGuey_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitacion Interpolada Río Guey",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PrecipitacionInterpoladaRoGuey_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7527166.406422, 1147920.156363, -7523737.724170, 1157148.699449]
                            })
                        });
var lyr_MDERioGueyamplio30mSombras_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "MDE Rio Guey amplio 30m Sombras",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MDERioGueyamplio30mSombras_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7534428.325225, 1140650.566908, -7517168.547724, 1160139.057389]
                            })
                        });
var format_poligono_cuenca_3 = new ol.format.GeoJSON();
var features_poligono_cuenca_3 = format_poligono_cuenca_3.readFeatures(json_poligono_cuenca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_cuenca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_cuenca_3.addFeatures(features_poligono_cuenca_3);
var lyr_poligono_cuenca_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligono_cuenca_3, 
                style: style_poligono_cuenca_3,
                interactive: true,
                title: '<img src="styles/legend/poligono_cuenca_3.png" /> poligono_cuenca'
            });
var format_IsoyetasRioGuey_4 = new ol.format.GeoJSON();
var features_IsoyetasRioGuey_4 = format_IsoyetasRioGuey_4.readFeatures(json_IsoyetasRioGuey_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IsoyetasRioGuey_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IsoyetasRioGuey_4.addFeatures(features_IsoyetasRioGuey_4);
var lyr_IsoyetasRioGuey_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IsoyetasRioGuey_4, 
                style: style_IsoyetasRioGuey_4,
                interactive: true,
                title: '<img src="styles/legend/IsoyetasRioGuey_4.png" /> Isoyetas Rio Guey'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_PrecipitacionInterpoladaRoGuey_1.setVisible(true);lyr_MDERioGueyamplio30mSombras_2.setVisible(true);lyr_poligono_cuenca_3.setVisible(true);lyr_IsoyetasRioGuey_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_PrecipitacionInterpoladaRoGuey_1,lyr_MDERioGueyamplio30mSombras_2,lyr_poligono_cuenca_3,lyr_IsoyetasRioGuey_4];
lyr_poligono_cuenca_3.set('fieldAliases', {'Id': 'Id', });
lyr_IsoyetasRioGuey_4.set('fieldAliases', {'P_anual_mm': 'P_anual_mm', });
lyr_poligono_cuenca_3.set('fieldImages', {'Id': 'Range', });
lyr_IsoyetasRioGuey_4.set('fieldImages', {'P_anual_mm': 'TextEdit', });
lyr_poligono_cuenca_3.set('fieldLabels', {'Id': 'no label', });
lyr_IsoyetasRioGuey_4.set('fieldLabels', {'P_anual_mm': 'inline label', });
lyr_IsoyetasRioGuey_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});