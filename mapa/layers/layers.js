var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_poligono_cuenca_1 = new ol.format.GeoJSON();
var features_poligono_cuenca_1 = format_poligono_cuenca_1.readFeatures(json_poligono_cuenca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_cuenca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_cuenca_1.addFeatures(features_poligono_cuenca_1);
var lyr_poligono_cuenca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligono_cuenca_1, 
                style: style_poligono_cuenca_1,
                interactive: true,
                title: '<img src="styles/legend/poligono_cuenca_1.png" /> poligono_cuenca'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_poligono_cuenca_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_poligono_cuenca_1];
lyr_poligono_cuenca_1.set('fieldAliases', {'Id': 'Id', });
lyr_poligono_cuenca_1.set('fieldImages', {'Id': 'Range', });
lyr_poligono_cuenca_1.set('fieldLabels', {'Id': 'no label', });
lyr_poligono_cuenca_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});