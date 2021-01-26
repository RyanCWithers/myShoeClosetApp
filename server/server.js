require('dotenv').config();

const express = require('express'), cookieParser = require('cookie-parser'), cors = require('cors');

require('./config/mongoose.config');

const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000/'}));
app.use(express.json());

require('./routes/user.routes')(app);

app.listen(process.env.PORT_NAME, () =>{console.log(`You are listening on port ${process.env.PORT_NAME}!`)});

