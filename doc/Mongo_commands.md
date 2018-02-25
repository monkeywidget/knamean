Commands in the `mongo` CLI and in JS

- [Collection Methods](https://docs.mongodb.com/manual/reference/method/js-collection/)

# Admin

## Show all DBs

    > show dbs

# Create

- [db.collection.insert](https://docs.mongodb.com/manual/reference/method/db.collection.insert/)
- [db.collection.insertOne](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/)
- [db.collection.insertMany](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/)

in `mongo` shell:

     > use knamean
     > db.codebook.insertMany([{"translation":"good"}, {"translation":"ungood","root":"good"}])

in curl:

    curl -H "Content-Type: application/json" \ 
        -X POST \ 
        -d '{"translation":"ungood", "root":"good"}' \
        http://localhost:3000/codebook/api/translations


# Read

- [db.collection.find](https://docs.mongodb.com/manual/reference/method/db.collection.find/)
- [db.collection.findAndModify](https://docs.mongodb.com/manual/reference/method/db.collection.findAndModify/)
- [db.collection.findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/)
- [db.collection.findOneAndDelete](https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndDelete/)
- [db.collection.findOneAndReplace](https://docs.mongodb.com/manual/reference/method/db.collection.findAndReplace/)
- [db.collection.findOneAndUpdate](https://docs.mongodb.com/manual/reference/method/db.collection.findAndUpdate/)

in `mongo` shell:

     > use knamean
     > db.codebook.find( {} )
     { "_id" : ObjectId("5a8874af8d49f317af90ab21"), "translation" : "good" }
     { "_id" : ObjectId("5a8874af8d49f317af90ab22"), "translation" : "ungood", "root" : "good" }
     { "_id" : ObjectId("5a887a8410230402aa6de123"), "translation" : "goodful", "root" : "good" }

# Update

- [db.collection.updateOne](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne)
- [db.collection.updateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany)
- [db.collection.replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne)

# Delete

- [db.collection.deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne)
- [db.collection.deleteMany](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany)

# Import

[`mongoimport`](https://docs.mongodb.com/manual/reference/program/mongoimport/)

Without OID inputs; i.e. only data:

    mongoimport --db knamean --collection codebook --jsonArray --file codebook.json

Example input file:

    [{"translation":"good"},
     {"translation":"ungood","root":"good"}]

# Export

Creates JSON with `oid` fields

    mongoexport --db knamean --collection codebook --out codebook.json
    
Example output:

    {"_id":{"$oid":"5a8874028d49f317af90aaef"},"translation":"good"}
    {"_id":{"$oid":"5a8874028d49f317af90aaf0"},"translation":"ungood","root":"good"}
