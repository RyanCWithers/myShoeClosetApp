const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/shoe_closet_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('Established connection with the database!'))
    .catch(() => console.log('There was an error connecting to the database!'));