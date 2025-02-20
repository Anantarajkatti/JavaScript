db.createCollection("posts")


//INSERT

db.posts.insertOne({   //curly braces is used for one entry
    title: "Post Title 1",
    body: "Body of post.",   
    category: "News",
    likes: 1,
    tags: ["news", "events"],
    date: Date()
  })

  db.posts.inserMany([{e1},{e2},{e3}])

//Find

  db.posts.find() // to show all 
  
  db.post.findOne()

  // find  accepts query object

  db.collection.find(query, projection)
  
  condition:  db.posts.find({age:{$gt:30}})

  projection: db.posts.find({},{name:1,age:1,gender:0}) //1 means display and 0 means not display

  sort: db.posts.find({}).sort({age:-1})  // sort -1 means decending and 1 means ascending

  Limit: db.posts.find({}).limit(5) // limits number of result to five

  Skip: db.posts.find({}).skip(5).limit(5) // skips first 5 and limits result to next 5

// Update
db.collectionName.updateOne/many(
    {condition},
    {$set:{newValue}},
    {upsert:true}  // this will add if entry is not found
)

db.posts.updateOne({position:"sales"},{$set:{position:"sales Manager"}})

//delete

db.collectionName.deleteOne({condition})
db.posts.deleteOne({name:"samaya"})


//query Operators
  //and,or,nor
db.employees.find({ 
    $and/$or/$nor: [
      { department: "Sales" },
      { age: { $gt: 30 } }
    ]
  })

  //not
  db.employees.find({ department: { $not: { $eq: "Engineering" } } })

// Evaluation Operators:

//$regex
db.employees.find({ email: { $regex: /@example\.com$/ } })

//$text (Text search)
db.employees.find({ $text: { $search: "developer" } })

//$where (Use a JavaScript expression)

db.employees.find({
    $where: function() {
      return this.age > this.yearsAtCompany;
    }
  })