var size = 0;
var placement = 'point';
function categories_Roads_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'motorway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'motorway_link':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'primary':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'primary_link':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'residential':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'secondary':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'secondary_link':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'tertiary':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'tertiary_link':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'trunk':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'unclassified':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Roads_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("fclass");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }
    
    var style = categories_Roads_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
