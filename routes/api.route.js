// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RipOff!',
    });
});
/*// Import user controller
var userController = require('../controllers/userController');
// user routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);
router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);*/

//require ('./user.route')(router);
// Export API routes
router.use('/user', require('./user.route'));
module.exports = router;