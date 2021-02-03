const db = require('../models');

const index = ( req, res ) => {
  
  db.Comment.find({})
  .populate('user')
  .sort({ createdAt: -1 })
  .exec( ( err, comment ) => {
    if ( err ) return console.log(err)

    console.log(req.session.currentUser)

    const context = {
      comment,
      currentUser: req.session.currentUser
    }

    res.render('feed/feed', context );
  })
}

// presentational
const addCommentForm = ( req, res ) => {
  res.render('comment/new');
}

const newComment = ( req, res ) => {
  const userId = req.session.currentUser.userId;

  db.Comment.create( req.body, ( err, createdComment ) => {
    if ( err ) return console.log(err)

    db.User.findById( userId, ( err, foundUser ) => {

      createdComment.user = foundUser._id;
      createdComment.save();

      foundUser.comment.push(createdComment._id);
      foundUser.save();

      res.redirect('/');
    });
  });
}

const testComments = ( req, res ) => {
  db.Comment.find({})
  .then( comment => res.send(comment) )
  .catch( err => console.log(err) );
}


module.exports = {
  index,
  addCommentForm,
  newComment,
  testComments,
}