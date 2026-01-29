var wms_layers = [];

var format_State_0 = new ol.format.GeoJSON();
var features_State_0 = format_State_0.readFeatures(json_State_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_0.addFeatures(features_State_0);
var lyr_State_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_State_0, 
                style: style_State_0,
                popuplayertitle: 'State',
                interactive: false,
                title: '<img src="styles/legend/State_0.png" /> State'
            });
var format_Daerah_1 = new ol.format.GeoJSON();
var features_Daerah_1 = format_Daerah_1.readFeatures(json_Daerah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerah_1.addFeatures(features_Daerah_1);
var lyr_Daerah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Daerah_1, 
                style: style_Daerah_1,
                popuplayertitle: 'Daerah',
                interactive: false,
                title: '<img src="styles/legend/Daerah_1.png" /> Daerah'
            });
var format_Highway_2 = new ol.format.GeoJSON();
var features_Highway_2 = format_Highway_2.readFeatures(json_Highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highway_2.addFeatures(features_Highway_2);
var lyr_Highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highway_2, 
                style: style_Highway_2,
                popuplayertitle: 'Highway',
                interactive: false,
                title: '<img src="styles/legend/Highway_2.png" /> Highway'
            });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                popuplayertitle: 'Road',
                interactive: true,
    title: 'Road<br />\
    <img src="styles/legend/Road_3_0.png" /> Highway<br />\
    <img src="styles/legend/Road_3_1.png" /> Major Road<br />\
    <img src="styles/legend/Road_3_2.png" /> Minor Road<br />\
    <img src="styles/legend/Road_3_3.png" /> Normal Road<br />' });
var format_CarRating_4 = new ol.format.GeoJSON();
var features_CarRating_4 = format_CarRating_4.readFeatures(json_CarRating_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarRating_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarRating_4.addFeatures(features_CarRating_4);
var lyr_CarRating_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarRating_4, 
                style: style_CarRating_4,
                popuplayertitle: 'Car Rating',
                interactive: true,
    title: 'Car Rating<br />\
    <img src="styles/legend/CarRating_4_0.png" /> 2 star<br />\
    <img src="styles/legend/CarRating_4_1.png" /> 3 star<br />\
    <img src="styles/legend/CarRating_4_2.png" /> 4 star<br />' });
var format_MotorcycleRating_5 = new ol.format.GeoJSON();
var features_MotorcycleRating_5 = format_MotorcycleRating_5.readFeatures(json_MotorcycleRating_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MotorcycleRating_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MotorcycleRating_5.addFeatures(features_MotorcycleRating_5);
var lyr_MotorcycleRating_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MotorcycleRating_5, 
                style: style_MotorcycleRating_5,
                popuplayertitle: 'Motorcycle Rating',
                interactive: true,
    title: 'Motorcycle Rating<br />\
    <img src="styles/legend/MotorcycleRating_5_0.png" /> 1 star<br />\
    <img src="styles/legend/MotorcycleRating_5_1.png" /> 2 star<br />\
    <img src="styles/legend/MotorcycleRating_5_2.png" /> 3 star<br />\
    <img src="styles/legend/MotorcycleRating_5_3.png" /> <br />' });

lyr_State_0.setVisible(true);lyr_Daerah_1.setVisible(true);lyr_Highway_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_CarRating_4.setVisible(true);lyr_MotorcycleRating_5.setVisible(true);
var layersList = [lyr_State_0,lyr_Daerah_1,lyr_Highway_2,lyr_Road_3,lyr_CarRating_4,lyr_MotorcycleRating_5];
lyr_State_0.set('fieldAliases', {'FCD': 'FCD', 'FNM': 'FNM', 'NAM': 'NAM', 'KOD_NEGERI': 'KOD_NEGERI', 'GlobalID': 'GlobalID', });
lyr_Daerah_1.set('fieldAliases', {'FCD': 'FCD', 'FNM': 'FNM', 'NAM': 'NAM', 'KOD_NEGERI': 'KOD_NEGERI', 'KOD_DAERAH': 'KOD_DAERAH', 'GlobalID': 'GlobalID', });
lyr_Highway_2.set('fieldAliases', {'ROAD_NAME': 'ROAD_NAME', 'NET_CLASS': 'NET_CLASS', });
lyr_Road_3.set('fieldAliases', {'ROAD_NAME': 'ROAD_NAME', 'NET_CLASS': 'NET_CLASS', 'Road_Type': 'Road_Type', });
lyr_CarRating_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'rating': 'rating', });
lyr_MotorcycleRating_5.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'rating': 'rating', });
lyr_State_0.set('fieldImages', {'FCD': 'TextEdit', 'FNM': 'TextEdit', 'NAM': 'TextEdit', 'KOD_NEGERI': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_Daerah_1.set('fieldImages', {'FCD': 'TextEdit', 'FNM': 'TextEdit', 'NAM': 'TextEdit', 'KOD_NEGERI': 'TextEdit', 'KOD_DAERAH': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_Highway_2.set('fieldImages', {'ROAD_NAME': 'TextEdit', 'NET_CLASS': 'Range', });
lyr_Road_3.set('fieldImages', {'ROAD_NAME': 'TextEdit', 'NET_CLASS': 'Range', 'Road_Type': 'TextEdit', });
lyr_CarRating_4.set('fieldImages', {'qc_id': 'Range', 'id': 'TextEdit', 'rating': 'TextEdit', });
lyr_MotorcycleRating_5.set('fieldImages', {'qc_id': 'Range', 'id': 'TextEdit', 'rating': 'TextEdit', });
lyr_State_0.set('fieldLabels', {'FCD': 'no label', 'FNM': 'no label', 'NAM': 'no label', 'KOD_NEGERI': 'no label', 'GlobalID': 'no label', });
lyr_Daerah_1.set('fieldLabels', {'FCD': 'no label', 'FNM': 'no label', 'NAM': 'no label', 'KOD_NEGERI': 'no label', 'KOD_DAERAH': 'no label', 'GlobalID': 'no label', });
lyr_Highway_2.set('fieldLabels', {'ROAD_NAME': 'no label', 'NET_CLASS': 'no label', });
lyr_Road_3.set('fieldLabels', {'ROAD_NAME': 'inline label - visible with data', 'NET_CLASS': 'hidden field', 'Road_Type': 'inline label - visible with data', });
lyr_CarRating_4.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'rating': 'inline label - visible with data', });
lyr_MotorcycleRating_5.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'rating': 'inline label - visible with data', });
lyr_MotorcycleRating_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});