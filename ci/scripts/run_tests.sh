#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules Storage-unit-node
cd Storage-unit-node && npm test

