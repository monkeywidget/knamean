# knamean

- do things like the works on [Anguish Languish](http://www.crockford.com/wrrrld/anguish.html)

## Development Notes

Iterations:
- ✔ hello world
- ✔ define Mongo schema
- ⌛ set up express with mongoose models and routes
- ETL: CSV to MongoDB
- BDD with chai
- ES implementation: analysis with ES
- React front end
- convert MongoDB implementation to AWS EC2
- containerize and redeploy to AWS ECS
- Lambda-ize where possible and redeploy

## app link in node_modules 

- create a symlink under node_modules for your app


    cd node_modules && ln -nsf ../app

- add just the node_modules/app symlink itself, not the entire node_modules folder, to git


    git add -f node_modules/app
    

## References

- Node
    - [Best practices](https://www.codementor.io/mattgoldspink/nodejs-best-practices-du1086jja)
- ElasticSearch
    - [JavaScript API](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html)
    - [bulk loading](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html)
- MongoDB
    - [Getting Started](https://docs.mongodb.com/manual/tutorial/getting-started/)
    - [CRUD operations](https://docs.mongodb.com/manual/crud/)
    - [schema examples](https://docs.mongodb.com/manual/applications/data-models/)
- Express
    - [Express CRUD](https://zellwk.com/blog/crud-express-mongodb/)
    - [node-api](https://github.com/scotch-io/node-api) a REST example
    - [express_code_structure](https://github.com/focusaurus/express_code_structure) demo app
        - another [Structure of Express/Mongoose app](https://stackoverflow.com/questions/22966854/structure-of-express-mongoose-app)
        - another one at [MEANAppsFiles](https://github.com/joeeames/MEANAppsFiles) demo app
- Mongoose 
    - [Express NodeJS](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)
    - [Mongoose start](http://mongoosejs.com/docs/guide.html)
    - [populate](http://mongoosejs.com/docs/populate.html) required referencing objects across collections
- containers and AWS
    - Node
        - [Node on AWS](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html)
    - MongoDB
        - [on docker](https://github.com/dockerfile/mongodb)
        - [in cloud](https://docs.mongodb.com/manual/tutorial/getting-started/#getting-started)
        - [on AWS](http://docs.aws.amazon.com/quickstart/latest/mongodb/welcome.html)
