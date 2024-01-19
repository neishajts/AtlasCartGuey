var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 0.499000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
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
var format_Vegetacin_2 = new ol.format.GeoJSON();
var features_Vegetacin_2 = format_Vegetacin_2.readFeatures(json_Vegetacin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vegetacin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetacin_2.addFeatures(features_Vegetacin_2);
var lyr_Vegetacin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vegetacin_2, 
                style: style_Vegetacin_2,
                interactive: true,
    title: 'Vegetación<br />\
    <img src="styles/legend/Vegetacin_2_0.png" /> Arbustal<br />\
    <img src="styles/legend/Vegetacin_2_1.png" /> Bosque deciduo<br />\
    <img src="styles/legend/Vegetacin_2_2.png" /> Bosque ribereno<br />\
    <img src="styles/legend/Vegetacin_2_3.png" /> Cultivo permanente<br />\
    <img src="styles/legend/Vegetacin_2_4.png" /> Cultivos anuales<br />\
    <img src="styles/legend/Vegetacin_2_5.png" /> Forrajes<br />\
    <img src="styles/legend/Vegetacin_2_6.png" /> Herbazales con elementos lenosos dispersos<br />\
    <img src="styles/legend/Vegetacin_2_7.png" /> Instalaciones<br />\
    <img src="styles/legend/Vegetacin_2_8.png" /> Matorral<br />\
    <img src="styles/legend/Vegetacin_2_9.png" /> Pastos<br />\
    <img src="styles/legend/Vegetacin_2_10.png" /> Terreno en descanso<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_poligono_cuenca_1.setVisible(true);lyr_Vegetacin_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_poligono_cuenca_1,lyr_Vegetacin_2];
lyr_poligono_cuenca_1.set('fieldAliases', {'Id': 'Id', });
lyr_Vegetacin_2.set('fieldAliases', {'Tde_Vege': 'Tipo de Vegetación', 'Perim': 'Perimetro', 'FactorC': 'Factor C', 'Sup': 'Superficie', });
lyr_poligono_cuenca_1.set('fieldImages', {'Id': 'Range', });
lyr_Vegetacin_2.set('fieldImages', {'Tde_Vege': 'TextEdit', 'Perim': 'TextEdit', 'FactorC': 'TextEdit', 'Sup': 'TextEdit', });
lyr_poligono_cuenca_1.set('fieldLabels', {'Id': 'no label', });
lyr_Vegetacin_2.set('fieldLabels', {'Tde_Vege': 'inline label', 'Perim': 'inline label', 'FactorC': 'inline label', 'Sup': 'inline label', });
lyr_Vegetacin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});