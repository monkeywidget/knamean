#!/usr/bin/env bash

docker run \
    -p 9200:9200 -p 9300:9300 \
    -e "discovery.type=single-node" \
    -e "transport.host=127.0.0.1" \
    -e ELASTIC_PASSWORD=secret --name elastic \
    docker.elastic.co/elasticsearch/elasticsearch:6.2.2
