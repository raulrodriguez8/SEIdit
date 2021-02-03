const mongoose = require('mongoose');

const connectionStr = 'mongodb://127.0.0.1:27017/seidit'

mongoose.connect(connectionStr,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

.then( () => console.log('MongoDB connection ESTABLISHED :)'))
.catch( (err) => console.log('MongoDB error', err))


mongoose.connection.on( 'disconnected', (err) => console.log(err) );

module.exports = {
    User: require('../models/User'),
    Post: require('../models/Post'),
}