# Proof Of Concept maplibre-gl with tileserver-gl

This is a small test to run maplibre-gl-js (as successor for mapbox-gl-js) with tileserver-gl.


## ToDo

- [ ] restrict access to tile server https://tileserver.readthedocs.io/en/latest/deployment.html#securing
- [ ] React

## Run it

- Get your own tiles here https://data.maptiler.com/downloads/europe/germany/berlin/

```bash
docker-compose up
```


## map-client

Based on https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/app-template-blank-typescript


## Links

- Docker Image https://hub.docker.com/r/maptiler/tileserver-gl
- Docs for tileserver-gl https://tileserver.readthedocs.io/en/latest/
- editor https://github.com/maputnik/editor
- https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/ 
- Create your own style tutorial by Yasoob Khalid https://yasoob.me/posts/custom-map-with-tileserver-gl/
- https://docs.mapbox.com/mapbox-gl-js/api/


## Design 

### Generate favicon

```bash
convert -size 500x500 xc:tomato favicon.png
convert favicon.png  -bordercolor white -border 0 \
         \( -clone 0 -resize 16x16 \) \
         \( -clone 0 -resize 32x32 \) \
         \( -clone 0 -resize 48x48 \) \
         \( -clone 0 -resize 64x64 \) \
         -delete 0 -alpha off -colors 256 favicon.ico

```
