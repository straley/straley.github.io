#!/bin/bash
npm run build
cp build/asset-manifest.json .
cp build/favicon.ico .
cp build/index.html .
cp build/manifest.json .
cp build/service-worker.js .
cp build/static/css/* static/css/
cp build/static/js/* static/js/
cp build/static/meda/* static/media/
