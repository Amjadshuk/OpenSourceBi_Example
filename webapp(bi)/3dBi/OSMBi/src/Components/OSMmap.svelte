<!-- Map.svelte -->

<script>
  import { onMount } from "svelte";
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import { MenaBoundries } from '../Global/Variables';
  import { Showbuble } from '../Global/buble'; 
  
  
  
  function initializeMap() {



    const map = L.map('map',{zoomControl: false}).setView([25, 25], 4);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution/">CARTO</a>'
    }).addTo(map);
  
    fetch('https://raw.githubusercontent.com/wjdanalharthi/MENA_GeoJSON/master/MENA.geojson'
    ,{
      method:'GET',
      'Access-Control-Allow-Origin':'*'
    })
        .then(response => response.json())
        .then(data => {
            // Customize the style of the polygons

const myStyle = {
    "color": "#262626",     // Fill color of the polygons
    "weight": 1,            // Thickness of the outline
    "opacity": 0.70,        // Opacity of the polygons
    "fillOpacity": 0.70,     // Opacity of the fill
    "dashArray": "1, 1",    // Dash array for dashed lines (optional)
    "fillColor": "#ff7800", // Color of the fill
    "outlineColor": "#ffd9c2"  // Color of the outline
};


            // Add GeoJSON layer to the map
            L.geoJSON(data, {
                style: myStyle,
                onEachFeature: 
                function(feature, layer) {
                    layer.on('mouseover', function(e) {
                        const popup = L.popup()
                            .setLatLng(e.latlng)
                            .setContent(Showbuble(feature.properties.name))
                            .openOn(map);
                    });
                }
            }).addTo(map);
        })
        .catch(error => {
            console.error('Error fetching GeoJSON:', error);
        });


  
  }



  


  onMount(initializeMap);
</script>

<div id="map" class="map-container"></div>

<style>
  .map-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    color: var(--maincolor);
    background: #262626;
    z-index: -1;
  }
</style>
