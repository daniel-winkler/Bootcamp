db.users.insertMany([
    {
        username: "daniwo",
        email: "daniwo@email.com",
        password: "abc123",
        birthdate: new Date(1988, 07, 07),
        lastLogin: new Date(2021,02,15, 15,15,00),
        status: {
            online: true,
            available: false
        },
        contacts: []
    }, {
        username: "helvegen",
        email: "helvegen@email.com",
        password: "def567",
        birthdate: new Date(2000, 07, 01),
        lastLogin: new Date(2021,04,12, 07,45,15),
        status: {
            online: true,
            available: true
        },
        contacts: []
    }, {
        username: "shaok",
        email: "shaok@email.com",
        password: "bhg987",
        birthdate: new Date(1988, 04, 15),
        lastLogin: new Date(2021,04,27, 20,30,45),
        status: {
            online: true,
            available: true
        },
        contacts: []
    }, {
        username: "iangrunt",
        email: "iangrunt@email.com",
        password: "ryt364",
        birthdate: new Date(1990, 12, 09),
        lastLogin: new Date(2021,05,01, 10,30,00),
        status: {
            online: false,
            available: false
        },
        contacts: []
    }
])

const users = db.users.find().toArray()

db.chats.insertMany([
    {
        members: [
            users[0]._id,
            users[1]._id
        ],
        messages: [
            {
                from: users[0]._id,
                body: "¿Echamos una partida?",
                createAt: new Date(2021, 05, 10, 11,30)
            },
            {
                from: users[1]._id,
                body: "Venga, ¡invita!",
                createAt: new Date(2021, 05, 10, 11,35)
            }
        ]
    }, 
    {
        members: [
            users[1]._id,
            users[2]._id,
            users[3]._id
        ],
        messages: [
            {
                from: users[1]._id,
                body: "¿Vamos al cine?",
                createAt: new Date(2021, 04, 12, 16, 15)
            },
            {
                from: users[2]._id,
                body: "¿A qué pelicula?",
                createAt: new Date(2021, 04, 12, 16, 18)
            },
            {
                from: users[3]._id,
                body: "¡La nueva de Marvel!",
                createAt: new Date(2021, 04, 12, 16, 20)
            }
        ]
    }
])

db.users.update(
    {"_id": users[0]._id},
    {$set: {contacts: [users[1]._id, users[2]._id, users[3]._id]}}
)

db.users.update(
    {"_id": users[1]._id},
    {$set: {contacts: [users[0]._id, users[2]._id]}}
)

db.users.update(
    {"_id": users[2]._id},
    {$set: {contacts: [users[0]._id, users[1]._id]}}
)

db.users.update(
    {"_id": users[3]._id},
    {$set: {contacts: [users[0]._id]}}
)

const chats = db.chats.find().toArray()

db.chats.find({members: {$size: 3}},{"messages.body": true}).pretty() //Apartado 6

db.users.find({contacts: users[0]._id}).pretty() //podemos buscar por parametros que incluso son elementos de un array

db.users.find({lastLogin: {$gte: new Date(2021, 04, 11, 11,09)}}).pretty() //busca los que han hecho login en las dos ultimas horas