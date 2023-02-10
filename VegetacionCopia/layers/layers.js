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
var format_Vegetacion_1 = new ol.format.GeoJSON();
var features_Vegetacion_1 = format_Vegetacion_1.readFeatures(json_Vegetacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vegetacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetacion_1.addFeatures(features_Vegetacion_1);
var lyr_Vegetacion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vegetacion_1, 
                style: style_Vegetacion_1,
                interactive: true,
    title: 'Vegetacion<br />\
    <img src="styles/legend/Vegetacion_1_0.png" /> Bosque Desiduo<br />\
    <img src="styles/legend/Vegetacion_1_1.png" /> Bosque Ribereño<br />\
    <img src="styles/legend/Vegetacion_1_2.png" /> Bosque Semidesiduo<br />\
    <img src="styles/legend/Vegetacion_1_3.png" /> Instalaciones<br />\
    <img src="styles/legend/Vegetacion_1_4.png" /> Matorral<br />\
    <img src="styles/legend/Vegetacion_1_5.png" /> Cultivos<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Vegetacion_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Vegetacion_1];
lyr_Vegetacion_1.set('fieldAliases', {'FID': 'FID', 'codigo': 'codigo', 'Tipo_Veget': 'Tipo_Veget', });
lyr_Vegetacion_1.set('fieldImages', {'FID': 'TextEdit', 'codigo': 'TextEdit', 'Tipo_Veget': 'TextEdit', });
lyr_Vegetacion_1.set('fieldLabels', {'FID': 'inline label', 'codigo': 'no label', 'Tipo_Veget': 'header label', });
lyr_Vegetacion_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});