require('dotenv').config();

const express = require('express'), cookieParser = require('cookie-parser'), cors = require('cors');

require('./config/mongoose.config');

const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

require('./routes/user.routes')(app);

//server production assets

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join("client/build")));
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")))
}

app.listen(process.env.PORT_NAME, () =>{console.log(`You are listening on port ${process.env.PORT_NAME}!`)});

