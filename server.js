const express = require("express");//building rest api
const bodyParser = require("body-parser");//helps to parse the request and create the req.body object
const cors = require("cors");
const app = express();

// app.use(...);
const db = require("./models");
const Role = db.role;
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}
const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "welcome to application" });
})
require('./routes/auth.routes.js')(app);
require('./routes/user.routes.js')(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})