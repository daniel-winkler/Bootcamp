//source: https://www.w3resource.com/mongodb-exercises/

//1
db.restaurants.find().limit(5).pretty()

//2
db.restaurants.find({}, {"restaurant_id": true, name: true, borough: true, cuisine: true}).limit(5).pretty()

//3
db.restaurants.find({}, {"_id": 0, "restaurant_id": true, name: true, borough: true, cuisine: true}).limit(5).pretty()

//4
db.restaurants.find({}, {"_id": 0, "restaurant_id": true, name: true, borough: true, "address.zipcode": true}).limit(5).pretty()

//5
db.restaurants.find({borough: "Bronx"}).limit(10).pretty()

//6
db.restaurants.find({borough: "Bronx"}).limit(5).pretty()

//7
db.restaurants.find({borough: "Bronx"}).skip(5).limit(5).pretty()

//8
db.restaurants.find({"grades.score": {$gte: 90}}).pretty()
    // db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}});

//9
db.restaurants.find({"grades.score": {$gt: 80, $lt: 100}}).pretty()

//10
db.restaurants.find({"address.coord": {$lt: -95.754168}}).limit(5).pretty()

//11
db.restaurants.find({$and: [
    {"cuisine": {$ne: "American "}},
    {"grades.score": {$gt: 70}},
    {"address.coord": {$lt: -65.754168}}
]}).pretty()

//12
db.restaurants.find({
    "cuisine": {$ne: "American "},
    "grades.score": {$gt: 70},
    "address.coord": {$lt: -65.754168}}).pretty()

//13
db.restaurants.find({
    "cuisine": {$ne: "American "},
    "grades.grade": "A",
    "borough": {$ne: "Bronx"}}).sort({"cuisine": -1})

//14
db.restaurants.find(
    {"name": /^Wil/}, //filtra los que empiezan por 'Wil'
    {
        "_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
).pretty()

//15
db.restaurants.find(
    {"name": /ces$/}, //filtra los que terminan en 'ces'
    {
        "_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
).pretty()

//16
db.restaurants.find(
    {"name": /.*Reg.*/}, //filtra los que contienen 'Res' (CASE SENSITIVE!)
    {
        "_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
).pretty()

//17
db.restaurants.find({
    "borough": "Bronx",
    $or: [
        {"cuisine": "American "},
        {"cuisine": "Chinese"}
    ]}
)

//18
db.restaurants.find(
    {"borough": {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},
    {
        "_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
).pretty()

//19
db.restaurants.find(
    {"borough": {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},
    {
        "_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
).pretty()

//20
db.restaurants.find(
    {"grades.score": {$lte: 10}},
    {
        "_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
).pretty()

//21
db.restaurants.find({
    $or: [
        {"name": /^Wil/},
        {$and: [
            {"cuisine": {$ne: "American "}},
            {"cuisine": {$ne: "Chinese"}}
        ]}
    ]},
    {
        "_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
).pretty()

//22


