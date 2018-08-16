$(document).ready(function () {



    alert('here');




    var gdpData = {
        "IN": 1000
    }
    $('#map-canvas').vectorMap({
        map: 'world_mill_en',
      
        series: {
            regions: [{
                backgroundColor: "#b0bec5",
                values: gdpData,
                scale: ['#b0bec5'],
                normalizeFunction: 'polynomial'
          
            }]
        },
        onRegionTipShow: function(e, el, code){
            el.html(el.html()+' (GDP - '+gdpData[code]+')');
        },
      
    markerStyle: {
      initial: {
        fill: '#ec407a',
        stroke: '#ec407a'
      }
    },
    markers: [
      { latLng: [20.5937, 78.9629], name: 'India (3 visited, 2 registered online, 2 walkin)' },
      { latLng: [47.14, 9.52], name: 'Sharjah' },
      { latLng: [14.01, -60.98], name: 'Sharjah' },
      { latLng: [25.35, 55.40], name: 'Sharjah' }
    ]
    });
 
    $('.jvectormap-zoomin').addClass('btn blue-grey');
    $('.jvectormap-zoomout').addClass('btn blue-grey');

});


