#!/bin/bash

BUILD_DIR=$(dirname $0)/build
SOURCE_DIR=$(dirname $0)/source
BUILD_JS=$(dirname $0)/n0d3s/build.js
RESOURCES_DIR=$(dirname $0)/resources

if [ ! -d "$BUILD_DIR" ]; then
    mkdir -p "$BUILD_DIR"
fi

node "$BUILD_JS" -s "$SOURCE_DIR" -b "$BUILD_DIR" -res "$RESOURCES_DIR" -jsem true -jsen true "$@"
