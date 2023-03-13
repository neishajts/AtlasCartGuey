var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
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
                interactive: false,
                title: '<img src="styles/legend/poligono_cuenca_1.png" /> poligono_cuenca'
            });
var format_DepartamentosFAgroUCV_2 = new ol.format.GeoJSON();
var features_DepartamentosFAgroUCV_2 = format_DepartamentosFAgroUCV_2.readFeatures(json_DepartamentosFAgroUCV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosFAgroUCV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosFAgroUCV_2.addFeatures(features_DepartamentosFAgroUCV_2);
var lyr_DepartamentosFAgroUCV_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosFAgroUCV_2, 
                style: style_DepartamentosFAgroUCV_2,
                interactive: true,
    title: 'Departamentos FAgro UCV<br />\
    <img src="styles/legend/DepartamentosFAgroUCV_2_0.png" /> Inst. Agronomía<br />\
    <img src="styles/legend/DepartamentosFAgroUCV_2_1.png" /> Inst. Botánica Agrícola<br />\
    <img src="styles/legend/DepartamentosFAgroUCV_2_2.png" /> Inst. Economía Agrícola<br />\
    <img src="styles/legend/DepartamentosFAgroUCV_2_3.png" /> Inst. Edafología<br />\
    <img src="styles/legend/DepartamentosFAgroUCV_2_4.png" /> Inst. Genética Agrícola<br />\
    <img src="styles/legend/DepartamentosFAgroUCV_2_5.png" /> Inst. Ingeniería Agrícola<br />\
    <img src="styles/legend/DepartamentosFAgroUCV_2_6.png" /> Inst. Producción Animal<br />\
    <img src="styles/legend/DepartamentosFAgroUCV_2_7.png" /> Inst. Química y Tecnología<br />\
    <img src="styles/legend/DepartamentosFAgroUCV_2_8.png" /> Inst. Zoología Agrícola<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_poligono_cuenca_1.setVisible(true);lyr_DepartamentosFAgroUCV_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_poligono_cuenca_1,lyr_DepartamentosFAgroUCV_2];
lyr_poligono_cuenca_1.set('fieldAliases', {'Id': 'Id', });
lyr_DepartamentosFAgroUCV_2.set('fieldAliases', {'id': 'id', 'cod': 'Codigo', 'nombre_dep': 'Nombre Departamento', });
lyr_poligono_cuenca_1.set('fieldImages', {'Id': 'Range', });
lyr_DepartamentosFAgroUCV_2.set('fieldImages', {'id': 'Hidden', 'cod': 'Hidden', 'nombre_dep': 'TextEdit', });
lyr_poligono_cuenca_1.set('fieldLabels', {'Id': 'no label', });
lyr_DepartamentosFAgroUCV_2.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_DepartamentosFAgroUCV_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});