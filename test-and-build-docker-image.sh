#!/usr/bin/env bash

docker build -t codecamp-board:${GO_PIPELINE_LABEL} . -f Dockerfile.application
docker run codecamp-board:${GO_PIPELINE_LABEL} npm test