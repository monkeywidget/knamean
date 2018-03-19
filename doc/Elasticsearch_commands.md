# Elasticsearch Commands

# Tools

## Docker: Run ES in Development Mode, kibana

Notes:
- https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html
- https://docs.swiftybeaver.com/article/33-install-elasticsearch-kibana-via-docker

user: 'elastic', pw 'secret'

    docker run \
        -p 9200:9200 -p 9300:9300 \
        -e "discovery.type=single-node" \
        -e "transport.host=127.0.0.1" \ 
        -e ELASTIC_PASSWORD=secret --name elastic \
        docker.elastic.co/elasticsearch/elasticsearch:6.2.2


    docker run \
        -p 5601:5601 \
        --link elastic:elastic-url \ 
        --name kibana \
        -e "ELASTICSEARCH_URL=http://elastic-url:9200" \
        -e ELASTICSEARCH_PASSWORD="secret" \ 
        docker.elastic.co/kibana/kibana:6.2.2


Now visit `http://localhost:5601/`

- set up management for the index (we use `canon`)

# Query Examples

## Hello World

    curl http://localhost:9200/

## PUT Something


    curl -XPUT -H'Content-Type: application/json' 'http://localhost:9200/canon/paragraph/1' -d '
    {
        "paragraph": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?",
        "translated": "some stuff was said here" 
    }'

- index `canon`
- type `paragraph`
- id `3`

Return value looks like:

    {
     "_index":"canon",
     "_type":"paragraph",
     "_id":"1",
     "_version":1,
     "result":"created",
     "_shards": {
                  "total":2,
                  "successful":1,
                  "failed":0
                },
     "_seq_no":0,
     "_primary_term":1
    }

### GET it again

    curl -XGET 'http://localhost:9200/canon/paragraph/3'

