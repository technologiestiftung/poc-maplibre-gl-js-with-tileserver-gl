import mapboxgl from "maplibre-gl";
function main() {
  console.log(`hello world ${new Date().toISOString()}`);

  var map = new mapboxgl.Map({
    container: "map",
    style: "http://localhost:8080/styles/bright/style.json",
    center: { lng: 13.381777, lat: 52.531677 },
    zoom: 11,
  });
  map.addControl(new mapboxgl.NavigationControl(), "top-right");
  map.on("load", function () {
    map.addSource("citylab", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [13.388122137711605, 52.48390321595333],
        },
      },
    });
    map.addLayer({
      id: "citylab",
      type: "circle",
      source: "citylab",
      layout: {},
      paint: {
        "circle-radius": {
          base: 1,
          stops: [
            [1, 5],
            [22, 10],
          ],
        },
        "circle-color": "#ff6347",
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", main);
