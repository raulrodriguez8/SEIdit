const mongoose = require('mongoose');

const connectionStr = 'mongodb://127.0.0.1:27017/seidit-app';

mongoose.connect( connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then( () => console.log('MongoDB connected...'))
.catch( (err) => console.log( 'MongoDB connection error :(', err ) );

mongoose.connection.on( 'disconnected', (err) => console.log(err) );

module.exports = {
  Seidit: require('../models/Seidit'),
}
