const express = require('express');
const router = express.Router();

const ctrls = require('../controllers');
const authRequired = require('../middleware/authRequired');


router.get( '/', authRequired, ctrls.comment.index );
router.get('/addpost', authRequired, ctrls.comment.addCommentForm );
router.post('/newpost', ctrls.comment.newComment );


module.exports = router;