var express = require('express');
var router = express.Router();
var Emplacement=require('../model/emplacement')
var portcontroller=require('../controller/portcontroller')

router.post('/addEmplacement', portcontroller.addEmplacement)

router.get('/showEmplacement', portcontroller.showEmplacement)

router.get('/showbyidEmplacement/:id',portcontroller.showbyidEmplacement)
router.get('/showbynameEmplacement/:name',portcontroller.showbynameEmplacement)
router.put('/updateEmplacement/:id',portcontroller.updateEmplacement)
router.delete('/deleteEmplacement/:id',portcontroller.deletebyidEmplacement)

module.exports = router;
