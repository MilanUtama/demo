var size = 0;
var placement = 'point';
function categories_CarRating_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '2 star':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(223,30,30,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3 star':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,191,111,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4 star':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,253,52,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CarRating_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("rating");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_CarRating_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
