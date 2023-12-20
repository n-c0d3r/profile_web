@echo off

set BUILD_DIR=%0/../../build
set SOURCE_DIR=%0/../../source
set BUILD_JS=%0/../../n0d3s/build.js
set RESOURCES_DIR=%0/../../resources

if not exist %BUILD_DIR% (
    rem
    mkdir %BUILD_DIR%
)

node %BUILD_JS% -s %SOURCE_DIR% -b %BUILD_DIR% -res %RESOURCES_DIR% -jsem true -jsen true %*