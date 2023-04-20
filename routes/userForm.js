const express = require('express');

const userFormController = require('../controllers/userForm');

const router = express.Router();

router.post('/addUser', userFormController.postAddUserDetails);
router.get('/getUsers',userFormController.getUsers);
router.delete('/deleteUser/:id',userFormController.deleteUser);

module.exports = router;



