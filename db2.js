

// use shop


db.customer.insertOne({"_id":1,"name":"priya","age":24,"contact":{"email":"priya@gmail.com","phone":9465742375}});
db.customer.insertOne({"_id":2,"name":"priya","age":23,"contact":{"email":"riya@gmail.com","phone":9465742376}});
db.customer.insertOne({"_id":3,"name":"diya","age":22,"contact":{"email":"diya@gmail.com","phone":9465742332}});
db.customer.find();

[
    {
      _id: 1,
      name: 'priya',
      age: 24,
      contact: { email: 'priya@gmail.com', phone: 9465742375 }
    },
    {
      _id: 2,
      name: 'priya',
      age: 23,
      contact: { email: 'riya@gmail.com', phone: 9465742376 }
    },
    {
      _id: 3,
      name: 'diya',
      age: 22,
      contact: { email: 'diya@gmail.com', phone: 9465742332 }
    }
  ]

//todo Lookup method

db.customer.aggregate([ { $lookup:{from:"product",localField:"_id",foreignField:"Customer_id",as:"productDetail" } } ]).pretty()

[
    {
      _id: 1,
      name: 'priya',
      age: 24,
      contact: { email: 'priya@gmail.com', phone: 9465742375 },
      productDetail: [ { _id: 11, product_name: 'phone', Customer_id: 1 } ]
    },
    {
      _id: 2,
      name: 'riya',
      age: 23,
      contact: { email: 'riya@gmail.com', phone: 9465742376 },
      productDetail: [ { _id: 12, product_name: 'shoe', Customer_id: 2 } ]
    },
    {
      _id: 3,
      name: 'diya',
      age: 22,
      contact: { email: 'diya@gmail.com', phone: 9465742332 },
      productDetail: [ { _id: 13, product_name: 'pant', Customer_id: 3 } ]
    }
  ]
  db.collection.remove(query);