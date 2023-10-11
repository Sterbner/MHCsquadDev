<template>
    <div class="home" id="home">
      
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import "ol/ol.css";
  import { Map, View } from "ol";
  import  Projection  from "ol/proj/Projection";
  import WMTSTileGrid from 'ol/tilegrid/WMTS';
  import Tile from "ol/layer/Tile"
  // import TileSource from 'ol/source/Tile';
  import WMTS from 'ol/source/WMTS.js';
  
  const map = ref(null)
  
  const initmap = ()=>{
      map.value = new Map({
      target: 'home',
      layers: [
        new Tile({
          source: new WMTS({
            url: 'http://localhost:8080/geoserver/test/gwc/service/wmts',
            layer: 'test:squad_narva',
            matrixSet : 'EPSG:4326',
            format: 'image/png',
            projection: new Projection({
              code: 'EPSG:4326',
              units: 'degrees',
              axisOrientation: 'neu',
            }),
            tileGrid: new WMTSTileGrid({
            tileSize: [256,256],
            extent: [-180.0,-90.0,180.0,90.0],
            origin: [-180.0, 90.0],
            resolutions: [6.866455078125E-4, 3.4332275390625E-4, 1.71661376953125E-4, 8.58306884765625E-5, 4.291534423828125E-5, 2.1457672119140625E-5, 1.0728836059570312E-5, 5.364418029785156E-6, 2.682209014892578E-6, 1.341104507446289E-6, 6.705522537231445E-7],
            matrixIds: ['EPSG:4326:10', 'EPSG:4326:11', 'EPSG:4326:12', 'EPSG:4326:13', 'EPSG:4326:14', 'EPSG:4326:15', 'EPSG:4326:16', 'EPSG:4326:17', 'EPSG:4326:18', 'EPSG:4326:19', 'EPSG:4326:20'],
            }),
            style: '',
            wrapX: true
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
        resolutions: [6.866455078125E-4, 3.4332275390625E-4, 1.71661376953125E-4, 8.58306884765625E-5, 4.291534423828125E-5, 2.1457672119140625E-5, 1.0728836059570312E-5, 5.364418029785156E-6, 2.682209014892578E-6, 1.341104507446289E-6, 6.705522537231445E-7],
        projection: new Projection({
              code: 'EPSG:4326',
              units: 'degrees',
              axisOrientation: 'neu',
            }),
        extent: [-180.0,-90.0,180.0,90.0]
      })
    })
  }
  onMounted(() => {
    // try {
    //   initMap()
    // } catch (error) {
    //   console.log(error);
    // }
    initmap()
  })
  
  
  </script>
  
  
  <style>
  .home{
    width: 100vw;
    height: 100vh;
  }
  
  </style>