ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32619").setExtent([643216.353256, 1133911.747318, 666262.122106, 1145936.268197]);
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
var lyr_N10W068_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "N10W068",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/N10W068_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7569740.834983, 1118874.275309, -7458390.422109, 1232122.552320]
                            })
                        });
var format_Isoyetas2003_2 = new ol.format.GeoJSON();
var features_Isoyetas2003_2 = format_Isoyetas2003_2.readFeatures(json_Isoyetas2003_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas2003_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas2003_2.addFeatures(features_Isoyetas2003_2);
var lyr_Isoyetas2003_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas2003_2, 
                style: style_Isoyetas2003_2,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas2003_2.png" /> Isoyetas 2003'
            });
var format_Isoyetas2002_3 = new ol.format.GeoJSON();
var features_Isoyetas2002_3 = format_Isoyetas2002_3.readFeatures(json_Isoyetas2002_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas2002_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas2002_3.addFeatures(features_Isoyetas2002_3);
var lyr_Isoyetas2002_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas2002_3, 
                style: style_Isoyetas2002_3,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas2002_3.png" /> Isoyetas2002'
            });
var format_Isoyetas2001_4 = new ol.format.GeoJSON();
var features_Isoyetas2001_4 = format_Isoyetas2001_4.readFeatures(json_Isoyetas2001_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas2001_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas2001_4.addFeatures(features_Isoyetas2001_4);
var lyr_Isoyetas2001_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas2001_4, 
                style: style_Isoyetas2001_4,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas2001_4.png" /> Isoyetas2001'
            });
var format_Isoyetas2000_5 = new ol.format.GeoJSON();
var features_Isoyetas2000_5 = format_Isoyetas2000_5.readFeatures(json_Isoyetas2000_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas2000_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas2000_5.addFeatures(features_Isoyetas2000_5);
var lyr_Isoyetas2000_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas2000_5, 
                style: style_Isoyetas2000_5,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas2000_5.png" /> Isoyetas 2000'
            });
var format_Isoyetas1999_6 = new ol.format.GeoJSON();
var features_Isoyetas1999_6 = format_Isoyetas1999_6.readFeatures(json_Isoyetas1999_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1999_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1999_6.addFeatures(features_Isoyetas1999_6);
var lyr_Isoyetas1999_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1999_6, 
                style: style_Isoyetas1999_6,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1999_6.png" /> Isoyetas 1999'
            });
var format_Isoyetas1998_7 = new ol.format.GeoJSON();
var features_Isoyetas1998_7 = format_Isoyetas1998_7.readFeatures(json_Isoyetas1998_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1998_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1998_7.addFeatures(features_Isoyetas1998_7);
var lyr_Isoyetas1998_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1998_7, 
                style: style_Isoyetas1998_7,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1998_7.png" /> Isoyetas1998'
            });
var format_Isoyetas1997_8 = new ol.format.GeoJSON();
var features_Isoyetas1997_8 = format_Isoyetas1997_8.readFeatures(json_Isoyetas1997_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1997_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1997_8.addFeatures(features_Isoyetas1997_8);
var lyr_Isoyetas1997_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1997_8, 
                style: style_Isoyetas1997_8,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1997_8.png" /> Isoyetas1997'
            });
var format_Isoyetas1996_9 = new ol.format.GeoJSON();
var features_Isoyetas1996_9 = format_Isoyetas1996_9.readFeatures(json_Isoyetas1996_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1996_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1996_9.addFeatures(features_Isoyetas1996_9);
var lyr_Isoyetas1996_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1996_9, 
                style: style_Isoyetas1996_9,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1996_9.png" /> Isoyetas1996'
            });
var format_Isoyetas1995_10 = new ol.format.GeoJSON();
var features_Isoyetas1995_10 = format_Isoyetas1995_10.readFeatures(json_Isoyetas1995_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1995_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1995_10.addFeatures(features_Isoyetas1995_10);
var lyr_Isoyetas1995_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1995_10, 
                style: style_Isoyetas1995_10,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1995_10.png" /> Isoyetas1995'
            });
var format_Isoyetas1994_11 = new ol.format.GeoJSON();
var features_Isoyetas1994_11 = format_Isoyetas1994_11.readFeatures(json_Isoyetas1994_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1994_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1994_11.addFeatures(features_Isoyetas1994_11);
var lyr_Isoyetas1994_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1994_11, 
                style: style_Isoyetas1994_11,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1994_11.png" /> Isoyetas1994'
            });
var format_Isoyetas1993_12 = new ol.format.GeoJSON();
var features_Isoyetas1993_12 = format_Isoyetas1993_12.readFeatures(json_Isoyetas1993_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1993_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1993_12.addFeatures(features_Isoyetas1993_12);
var lyr_Isoyetas1993_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1993_12, 
                style: style_Isoyetas1993_12,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1993_12.png" /> Isoyetas1993'
            });
var format_Isoyetas1992_13 = new ol.format.GeoJSON();
var features_Isoyetas1992_13 = format_Isoyetas1992_13.readFeatures(json_Isoyetas1992_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1992_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1992_13.addFeatures(features_Isoyetas1992_13);
var lyr_Isoyetas1992_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1992_13, 
                style: style_Isoyetas1992_13,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1992_13.png" /> Isoyetas 1992'
            });
var format_Isoyetas1991_14 = new ol.format.GeoJSON();
var features_Isoyetas1991_14 = format_Isoyetas1991_14.readFeatures(json_Isoyetas1991_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1991_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1991_14.addFeatures(features_Isoyetas1991_14);
var lyr_Isoyetas1991_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1991_14, 
                style: style_Isoyetas1991_14,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1991_14.png" /> Isoyetas 1991'
            });
var format_Isoyetas1990_15 = new ol.format.GeoJSON();
var features_Isoyetas1990_15 = format_Isoyetas1990_15.readFeatures(json_Isoyetas1990_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1990_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1990_15.addFeatures(features_Isoyetas1990_15);
var lyr_Isoyetas1990_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1990_15, 
                style: style_Isoyetas1990_15,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1990_15.png" /> Isoyetas 1990'
            });
var format_Isoyetas1989_16 = new ol.format.GeoJSON();
var features_Isoyetas1989_16 = format_Isoyetas1989_16.readFeatures(json_Isoyetas1989_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1989_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1989_16.addFeatures(features_Isoyetas1989_16);
var lyr_Isoyetas1989_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1989_16, 
                style: style_Isoyetas1989_16,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1989_16.png" /> Isoyetas 1989'
            });
var format_Isoyetas1988_17 = new ol.format.GeoJSON();
var features_Isoyetas1988_17 = format_Isoyetas1988_17.readFeatures(json_Isoyetas1988_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Isoyetas1988_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoyetas1988_17.addFeatures(features_Isoyetas1988_17);
var lyr_Isoyetas1988_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isoyetas1988_17, 
                style: style_Isoyetas1988_17,
                interactive: true,
                title: '<img src="styles/legend/Isoyetas1988_17.png" /> Isoyetas 1988'
            });
var format_EstacionesClimaUCV_18 = new ol.format.GeoJSON();
var features_EstacionesClimaUCV_18 = format_EstacionesClimaUCV_18.readFeatures(json_EstacionesClimaUCV_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_EstacionesClimaUCV_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesClimaUCV_18.addFeatures(features_EstacionesClimaUCV_18);
var lyr_EstacionesClimaUCV_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacionesClimaUCV_18, 
                style: style_EstacionesClimaUCV_18,
                interactive: true,
    title: 'EstacionesClimaUCV<br />\
    <img src="styles/legend/EstacionesClimaUCV_18_0.png" /> CASTANO-CABECERA<br />\
    <img src="styles/legend/EstacionesClimaUCV_18_1.png" /> MARACAY-AGRONOMIA<br />\
    <img src="styles/legend/EstacionesClimaUCV_18_2.png" /> MARACAY-C.E.N.I.A.P.<br />\
    <img src="styles/legend/EstacionesClimaUCV_18_3.png" /> MARACAY-LA TRINIDAD<br />'
        });
var format_poligono_cuenca_19 = new ol.format.GeoJSON();
var features_poligono_cuenca_19 = format_poligono_cuenca_19.readFeatures(json_poligono_cuenca_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_poligono_cuenca_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_cuenca_19.addFeatures(features_poligono_cuenca_19);
var lyr_poligono_cuenca_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligono_cuenca_19, 
                style: style_poligono_cuenca_19,
                interactive: false,
                title: '<img src="styles/legend/poligono_cuenca_19.png" /> poligono_cuenca'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_N10W068_1.setVisible(true);lyr_Isoyetas2003_2.setVisible(false);lyr_Isoyetas2002_3.setVisible(false);lyr_Isoyetas2001_4.setVisible(false);lyr_Isoyetas2000_5.setVisible(false);lyr_Isoyetas1999_6.setVisible(false);lyr_Isoyetas1998_7.setVisible(false);lyr_Isoyetas1997_8.setVisible(false);lyr_Isoyetas1996_9.setVisible(false);lyr_Isoyetas1995_10.setVisible(false);lyr_Isoyetas1994_11.setVisible(false);lyr_Isoyetas1993_12.setVisible(false);lyr_Isoyetas1992_13.setVisible(false);lyr_Isoyetas1991_14.setVisible(false);lyr_Isoyetas1990_15.setVisible(false);lyr_Isoyetas1989_16.setVisible(false);lyr_Isoyetas1988_17.setVisible(true);lyr_EstacionesClimaUCV_18.setVisible(true);lyr_poligono_cuenca_19.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_N10W068_1,lyr_Isoyetas2003_2,lyr_Isoyetas2002_3,lyr_Isoyetas2001_4,lyr_Isoyetas2000_5,lyr_Isoyetas1999_6,lyr_Isoyetas1998_7,lyr_Isoyetas1997_8,lyr_Isoyetas1996_9,lyr_Isoyetas1995_10,lyr_Isoyetas1994_11,lyr_Isoyetas1993_12,lyr_Isoyetas1992_13,lyr_Isoyetas1991_14,lyr_Isoyetas1990_15,lyr_Isoyetas1989_16,lyr_Isoyetas1988_17,lyr_EstacionesClimaUCV_18,lyr_poligono_cuenca_19];
lyr_Isoyetas2003_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Prec2003': 'Prec2003', });
lyr_Isoyetas2002_3.set('fieldAliases', {'ID': 'ID', 'Prec2002': 'Prec2002', });
lyr_Isoyetas2001_4.set('fieldAliases', {'ID': 'ID', 'Prec2001': 'Prec2001', });
lyr_Isoyetas2000_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Prec2000': 'Prec2000', });
lyr_Isoyetas1999_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Prec1999': 'Prec1999', });
lyr_Isoyetas1998_7.set('fieldAliases', {'ID': 'ID', 'Prec1998': 'Prec1998', });
lyr_Isoyetas1997_8.set('fieldAliases', {'ID': 'ID', 'Prec1997': 'Prec1997', });
lyr_Isoyetas1996_9.set('fieldAliases', {'ID': 'ID', 'Prec1996': 'Prec1996', });
lyr_Isoyetas1995_10.set('fieldAliases', {'ID': 'ID', 'prec1995': 'prec1995', });
lyr_Isoyetas1994_11.set('fieldAliases', {'ID': 'ID', 'Precip1994': 'Precip1994', });
lyr_Isoyetas1993_12.set('fieldAliases', {'ID': 'ID', 'Prec1993': 'Prec1993', });
lyr_Isoyetas1992_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Precip1992': 'Precip1992', });
lyr_Isoyetas1991_14.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'precip91': 'precip91', });
lyr_Isoyetas1990_15.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'precip90': 'precip90', });
lyr_Isoyetas1989_16.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'precip89': 'precip89', });
lyr_Isoyetas1988_17.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'prec88': 'prec88', });
lyr_EstacionesClimaUCV_18.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Norte': 'Norte', 'Este': 'Este', 'imagen': 'imagen', });
lyr_poligono_cuenca_19.set('fieldAliases', {'Id': 'Id', });
lyr_Isoyetas2003_2.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'Prec2003': 'TextEdit', });
lyr_Isoyetas2002_3.set('fieldImages', {'ID': 'Hidden', 'Prec2002': 'TextEdit', });
lyr_Isoyetas2001_4.set('fieldImages', {'ID': 'Hidden', 'Prec2001': 'TextEdit', });
lyr_Isoyetas2000_5.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'Prec2000': 'TextEdit', });
lyr_Isoyetas1999_6.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'Prec1999': 'TextEdit', });
lyr_Isoyetas1998_7.set('fieldImages', {'ID': 'Hidden', 'Prec1998': 'TextEdit', });
lyr_Isoyetas1997_8.set('fieldImages', {'ID': 'Hidden', 'Prec1997': 'TextEdit', });
lyr_Isoyetas1996_9.set('fieldImages', {'ID': 'Hidden', 'Prec1996': 'TextEdit', });
lyr_Isoyetas1995_10.set('fieldImages', {'ID': 'Hidden', 'prec1995': 'TextEdit', });
lyr_Isoyetas1994_11.set('fieldImages', {'ID': 'Hidden', 'Precip1994': 'TextEdit', });
lyr_Isoyetas1993_12.set('fieldImages', {'ID': 'Hidden', 'Prec1993': 'TextEdit', });
lyr_Isoyetas1992_13.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'Precip1992': 'TextEdit', });
lyr_Isoyetas1991_14.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'precip91': 'TextEdit', });
lyr_Isoyetas1990_15.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'precip90': 'TextEdit', });
lyr_Isoyetas1989_16.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'precip89': 'TextEdit', });
lyr_Isoyetas1988_17.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'prec88': 'TextEdit', });
lyr_EstacionesClimaUCV_18.set('fieldImages', {'Id': 'Hidden', 'Nombre': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', 'imagen': 'Hidden', });
lyr_poligono_cuenca_19.set('fieldImages', {'Id': 'Hidden', });
lyr_Isoyetas2003_2.set('fieldLabels', {'Prec2003': 'inline label', });
lyr_Isoyetas2002_3.set('fieldLabels', {'Prec2002': 'inline label', });
lyr_Isoyetas2001_4.set('fieldLabels', {'Prec2001': 'inline label', });
lyr_Isoyetas2000_5.set('fieldLabels', {'Prec2000': 'inline label', });
lyr_Isoyetas1999_6.set('fieldLabels', {'Prec1999': 'inline label', });
lyr_Isoyetas1998_7.set('fieldLabels', {'Prec1998': 'inline label', });
lyr_Isoyetas1997_8.set('fieldLabels', {'Prec1997': 'inline label', });
lyr_Isoyetas1996_9.set('fieldLabels', {'Prec1996': 'inline label', });
lyr_Isoyetas1995_10.set('fieldLabels', {'prec1995': 'inline label', });
lyr_Isoyetas1994_11.set('fieldLabels', {'Precip1994': 'inline label', });
lyr_Isoyetas1993_12.set('fieldLabels', {'Prec1993': 'inline label', });
lyr_Isoyetas1992_13.set('fieldLabels', {'Precip1992': 'inline label', });
lyr_Isoyetas1991_14.set('fieldLabels', {'precip91': 'header label', });
lyr_Isoyetas1990_15.set('fieldLabels', {'precip90': 'inline label', });
lyr_Isoyetas1989_16.set('fieldLabels', {'precip89': 'inline label', });
lyr_Isoyetas1988_17.set('fieldLabels', {'prec88': 'inline label', });
lyr_EstacionesClimaUCV_18.set('fieldLabels', {'Nombre': 'inline label', 'Norte': 'header label', 'Este': 'inline label', });
lyr_poligono_cuenca_19.set('fieldLabels', {});
lyr_poligono_cuenca_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});