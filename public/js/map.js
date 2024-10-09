mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates,
  style: "mapbox://styles/mapbox/streets-v12",
  zoom: 9, // starting zoom
});

// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: "red", rotation: 45 })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.location}</h4><p>Exact location provided after booking</p>`
    )
  )
  .addTo(map);


