const mongoose = require('mongoose');


const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const URL_MONGODB = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(URL_MONGODB, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,

    })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));
    