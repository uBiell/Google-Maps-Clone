/* Token that you find on mapbox's website when you create an account */
mapboxgl.accessToken = 'pk.eyJ1Ijoib2JpZWxsYWxtIiwiYSI6ImNrdDR2MDhyNTAyZDYyd256M3QyaDV0c2sifQ.5CkLacUPx1JM_c281H96QA';

/* Adds the map on your web application */
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

/* Adds the GeoLocalization resource */
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
}));

/* Adds the Navigation Control. Zoom and Rotate resources */
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

/* Adds the Fullscreen Mode button */
map.addControl(new mapboxgl.FullscreenControl());

/* Adds the search and routes resource for your map  */
map.addControl(new MapboxDirections({accessToken: mapboxgl.accessToken, unit: 'metric'}), 'top-left')