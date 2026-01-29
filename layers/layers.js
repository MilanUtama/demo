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
var format_District_1 = new ol.format.GeoJSON();
var features_District_1 = format_District_1.readFeatures(json_District_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_1.addFeatures(features_District_1);
var lyr_District_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_1, 
                style: style_District_1,
                popuplayertitle: 'District',
                interactive: false,
                title: '<img src="styles/legend/District_1.png" /> District'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: 'Roads',
                interactive: true,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_2_0.png" /> motorway<br />\
    <img src="styles/legend/Roads_2_1.png" /> motorway_link<br />\
    <img src="styles/legend/Roads_2_2.png" /> primary<br />\
    <img src="styles/legend/Roads_2_3.png" /> primary_link<br />\
    <img src="styles/legend/Roads_2_4.png" /> residential<br />\
    <img src="styles/legend/Roads_2_5.png" /> secondary<br />\
    <img src="styles/legend/Roads_2_6.png" /> secondary_link<br />\
    <img src="styles/legend/Roads_2_7.png" /> tertiary<br />\
    <img src="styles/legend/Roads_2_8.png" /> tertiary_link<br />\
    <img src="styles/legend/Roads_2_9.png" /> trunk<br />\
    <img src="styles/legend/Roads_2_10.png" /> unclassified<br />' });
var format_MotorcycleRating_3 = new ol.format.GeoJSON();
var features_MotorcycleRating_3 = format_MotorcycleRating_3.readFeatures(json_MotorcycleRating_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MotorcycleRating_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MotorcycleRating_3.addFeatures(features_MotorcycleRating_3);
var lyr_MotorcycleRating_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MotorcycleRating_3, 
                style: style_MotorcycleRating_3,
                popuplayertitle: 'Motorcycle Rating',
                interactive: true,
    title: 'Motorcycle Rating<br />\
    <img src="styles/legend/MotorcycleRating_3_0.png" /> 1 star<br />\
    <img src="styles/legend/MotorcycleRating_3_1.png" /> 2 star<br />\
    <img src="styles/legend/MotorcycleRating_3_2.png" /> 3 star<br />\
    <img src="styles/legend/MotorcycleRating_3_3.png" /> <br />' });
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
var format_town_5 = new ol.format.GeoJSON();
var features_town_5 = format_town_5.readFeatures(json_town_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_town_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_town_5.addFeatures(features_town_5);
var lyr_town_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_town_5, 
                style: style_town_5,
                popuplayertitle: 'town',
                interactive: false,
                title: '<img src="styles/legend/town_5.png" /> town'
            });

lyr_State_0.setVisible(true);lyr_District_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_MotorcycleRating_3.setVisible(false);lyr_CarRating_4.setVisible(true);lyr_town_5.setVisible(true);
var layersList = [lyr_State_0,lyr_District_1,lyr_Roads_2,lyr_MotorcycleRating_3,lyr_CarRating_4,lyr_town_5];
lyr_State_0.set('fieldAliases', {'FCD': 'FCD', 'FNM': 'FNM', 'NAM': 'NAM', 'KOD_NEGERI': 'KOD_NEGERI', 'GlobalID': 'GlobalID', });
lyr_District_1.set('fieldAliases', {'FCD': 'FCD', 'FNM': 'FNM', 'NAM': 'NAM', 'KOD_NEGERI': 'KOD_NEGERI', 'KOD_DAERAH': 'KOD_DAERAH', 'GlobalID': 'GlobalID', });
lyr_Roads_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_MotorcycleRating_3.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'rating': 'rating', });
lyr_CarRating_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'rating': 'rating', });
lyr_town_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr_State_0.set('fieldImages', {'FCD': 'TextEdit', 'FNM': 'TextEdit', 'NAM': 'TextEdit', 'KOD_NEGERI': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_District_1.set('fieldImages', {'FCD': 'TextEdit', 'FNM': 'TextEdit', 'NAM': 'TextEdit', 'KOD_NEGERI': 'TextEdit', 'KOD_DAERAH': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_MotorcycleRating_3.set('fieldImages', {'qc_id': 'Range', 'id': 'TextEdit', 'rating': 'TextEdit', });
lyr_CarRating_4.set('fieldImages', {'qc_id': 'Range', 'id': 'TextEdit', 'rating': 'TextEdit', });
lyr_town_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', });
lyr_State_0.set('fieldLabels', {'FCD': 'no label', 'FNM': 'no label', 'NAM': 'no label', 'KOD_NEGERI': 'no label', 'GlobalID': 'no label', });
lyr_District_1.set('fieldLabels', {'FCD': 'no label', 'FNM': 'no label', 'NAM': 'no label', 'KOD_NEGERI': 'no label', 'KOD_DAERAH': 'no label', 'GlobalID': 'no label', });
lyr_Roads_2.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'inline label - visible with data', 'ref': 'hidden field', 'oneway': 'hidden field', 'maxspeed': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', });
lyr_MotorcycleRating_3.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'rating': 'inline label - visible with data', });
lyr_CarRating_4.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'rating': 'inline label - visible with data', });
lyr_town_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'population': 'no label', 'name': 'no label', });
lyr_town_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});