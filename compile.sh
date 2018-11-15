#!/bin/bash
#~/emsdk/emscripten/1.37.27/emcc -s WASM=1 -s ONLY_MY_CODE=1 -s EXPORT_ALL=1 -v -o output.js test.cpp
~/emsdk/emscripten/1.37.27/emcc -v -s ALLOW_MEMORY_GROWTH=1 --bind -o ./public/test.js ./src/js/example-8/test.cpp
