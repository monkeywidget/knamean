Commands in the `mongo` CLI

- [Collection Methods](https://docs.mongodb.com/manual/reference/method/js-collection/)

# Create

- [db.collection.insert](https://docs.mongodb.com/manual/reference/method/db.collection.insert/)
- [db.collection.insertOne](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/)
- [db.collection.insertMany](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/)

# Read

- [db.collection.find](https://docs.mongodb.com/manual/reference/method/db.collection.find/)
- [db.collection.findAndModify](https://docs.mongodb.com/manual/reference/method/db.collection.findAndModify/)
- [db.collection.findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/)
- [db.collection.findOneAndDelete](https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndDelete/)
- [db.collection.findOneAndReplace](https://docs.mongodb.com/manual/reference/method/db.collection.findAndReplace/)
- [db.collection.findOneAndUpdate](https://docs.mongodb.com/manual/reference/method/db.collection.findAndUpdate/)

# Update

- [db.collection.updateOne](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne)
- [db.collection.updateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany)
- [db.collection.replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne)

# Delete

- [db.collection.deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne)
- [db.collection.deleteMany](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany)

# Import

    mongoimport --db knamean --collection canon --file canon.json
    mongoimport --db knamean --collection codebook --file codebook.json

# Export

    mongoexport --db knamean --collection canon --out canon.json
    mongoexport --db knamean --collection codebook --out codebook.json
    
