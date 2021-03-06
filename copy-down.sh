#!/bin/bash
npm run build
cp build/asset-manifest.json .
cp build/favicon.ico .
cp build/index.html .
cp build/manifest.json .
cp build/service-worker.js .
mkdir build/static/media/
cp build/scottstraley.pdf build/static/media/
rm static/css/*
cp build/static/css/* static/css/
rm static/js/*
cp build/static/js/* static/js/
rm static/media/*
cp build/static/media/* static/media/
git add asset-manifest.json index.html service-worker.js
git add static/*
git commit -m "copy-down"
git push
