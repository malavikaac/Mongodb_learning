use ("school"); 


db.getMongo().getDBs()
db.student.find();
db.student.find({name:"Ram"});
db.student.insertOne({"name":"krishna","age":35,"city":"Ooty"});
db.student.find();
 db.student.insertOne({"name":"Ram","age":24,"city":"Erode","contact":"9736256239"});
 db.student.find();
 db.student.insertOne({"name":"Vishnu","age":24,"city":"Erode","contact":"9736256289","adress":{"street":"kovil Street","pincode":"636002"}});
 //db.student.insertOne({"name":"Vishnu","age":24,"city":"Erode","contact":"9736256289","adress":{"street":"kovil Street","pincode":"636002"}});
 db.getMongo().getDBs();
 db.getCollectionNames();
 db.student.insertMany([
     {"_id":1,"name":"Maha",},
     {"_id":2,"name":"Lisa",},
     {"name":"Sathya","age":22},
    ])
    db.student.find();
    db.student.find({},{"_id":0,"name":1,"age":1})

