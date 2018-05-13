#!/usr/bin/env bash

docker run \
    -p 5601:5601 \
    --link elastic:elastic-url \
    --name kibana \
    -e "ELASTICSEARCH_URL=http://elastic-url:9200" \
    -e ELASTICSEARCH_PASSWORD="secret" \
    docker.elastic.co/kibana/kibana:6.2.2
