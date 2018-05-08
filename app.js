// var RADIUS=1000;

function load(files) {
    var file=files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener( 'load', function() {
            onLoad(reader.result);
        })
}

function onLoad(text) {
    processJSON( JSON.parse(text) );
}

function processJSON(j) {
    var result="";
    var startRow = 0;
    var lenkhaan=j.data.length;

    for(var rowS=startRow;rowS<lenkhaan;rowS++) {
        var latS=j.data[rowS].latitude;
        var lngS=j.data[rowS].longitude;
        var name=j.data[rowS].name;

        plot(latS,lngS,name);
    }
}

function plot(latS,lngS,name) {
    var markerOptions = {
        map: map,
        position: {lat: latS, lng: lngS},
        title: name,
        icon: {
                url: 'dot-khaan.png',
                scaledSize: new google.maps.Size(6, 6)
            }   
    };
    var marker = new google.maps.Marker(markerOptions);

    var circle = new google.maps.Circle({
        strokeColor: '#2c8f40',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#2c8f40',
        fillOpacity: 0.35,
        map: map,
        center: {lat: latS, lng: lngS},
        radius: RADIUS
    });
}
